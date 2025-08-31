import { getEndQuote, getForecastUnavailableQuote, getGeolocationFailedQuote, getLocationUnreachableQuote, getNoLocationFoundQuote, getRainQuote, getSnowQuote, getSunQuote, getTemperatureQuote, getWelcomeQuote } from "./dialogs";
import { getWelcomeBackQuote } from "./dialogs";
import { getNoLocationQuote } from "./dialogs";
import { getPrepareQuote } from "./dialogs";

let isForecastActive = false;
if(localStorage.getItem("locationCache") == null) localStorage.setItem("locationCache", JSON.stringify([]));
if(localStorage.getItem("oracleId") == null) localStorage.setItem("oracleId", "the_oracle");



export function addBubble(quote){
    const chatContainer = document.getElementById("chatContainer");
    const messageBubble = document.createElement("div");
    messageBubble.classList.add("messageBubble");
    messageBubble.innerHTML = quote;
    chatContainer.insertBefore(messageBubble, chatContainer.children[0]);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

export async function addBubbleAndWait(quote){
    let delay = (quote.split(" ").length*500)+1000;
    delay = Math.max(1000, delay);
    delay = Math.min(5000, delay);
    
    addBubble(quote);

    function wait(delay){
        return new Promise(resolve => setTimeout(resolve, delay));
    }

    await wait(delay);
}

function greet(){
    const lastGreetingTime = localStorage.getItem("lastGreetingTime");
    const currentTime = Date.now();
    const timeElapsed = (lastGreetingTime != undefined) ? currentTime - Number.parseInt(lastGreetingTime) : undefined;

    if(timeElapsed/1000/60 > 5 || timeElapsed == undefined){
        addBubble(getWelcomeQuote());
        localStorage.setItem("lastGreetingTime", Date.now());
    }
    else{
         addBubble(getWelcomeBackQuote());
    }
}

async function requestForecast(){
    //Jeżeli ropucha już przepowiada pogodę, anuluj requesta
    if(isForecastActive) return;
    isForecastActive = true;

    let longitude;
    let latitude;
    let timezone;
    let forecast;
    const inputValue = document.getElementById("locationInput").value;
    const locationCache = JSON.parse(localStorage.getItem("locationCache"));

    //Spróbuj sprawdzić pogodę
    try{
        //Jeżeli użytkownik podał nazwę miejscowości
        if(inputValue != ""){
            //Spróbuj sprawdzić ją w API
            /**
             * Postanowiłem, że informacje o lokalizacji zaciągnięte z API
             * będą ważniejsze niż informacje zapisane w pamięci cache ze
             * względu na zmiany stref czasowych. Powoduje to oczywiście
             * dodatkowe zużycie internetu i może powodować opóźnienie,
             * lecz zagwarantuje zwiększoną precyzję stref czasowych.
             */
            try{
                const positionApiQuery = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(inputValue)}&count=1&language=pl`;
                const positionApiReply = await fetch(positionApiQuery);
                if(positionApiReply.ok == false) throw new Error("API unreachable");
                const positionContent = await positionApiReply.json();
                if(positionContent.error == true) throw new Error("API error");
                if(positionContent.results.length == 0) throw new Error("Location not found");
                longitude = positionContent.results[0].longitude;
                latitude = positionContent.results[0].latitude;
                timezone = positionContent.results[0].timezone;

                const cachedLocationIndex = locationCache.findIndex(location => location.name == inputValue)
                //Jeżeli lokalizacja jest w pamięci cache
                if(cachedLocationIndex != -1){
                    locationCache[cachedLocationIndex] = {name: inputValue, longitude: longitude, latitude: latitude, timezone: timezone};
                }
                else{
                    //Jeżeli bufor o długości 5 jest pełny, usuń najstarszy element
                    if(locationCache.length >= 4) shift(1);
                    //Dodaj informacje o lokalizacji do bufora pamięci cache
                    locationCache.push({name: inputValue, longitude: longitude, latitude: latitude, timezone: timezone});
                }
            }
            //Jeśli się nie uda, sprawdź w pamięci cache
            catch(error){
                if(error.message == "Location not found") throw error;
                const cachedLocation = locationCache.find(location => location.name == inputValue);
                if(cachedLocation == undefined) throw new Error("Location info not found");
                
                await addBubbleAndWait("Hmm... kamienie milczą na temat tego miejsca...");

                longitude = cachedLocation.longitude;
                latitude = cachedLocation.latitude;
                timezone = cachedLocation.timezone;
            }
        }
        //Jeżeli użytkownik chce użyć geolokalizacji
        else{
            //Jeżeli usługa geolokalizacji jest wyłączona
            if(!Navigator.geolocation) throw new Error("Geolocation not available");
            Navigator.geolocation.getCurrentLocation(
                //Jeśli geolokalizacja się powiedzie
                success => {
                    longitude = success.coords.longitude;
                    latitude = success.coords.latitude;
                },
                //Jeśli geolokalizacja się nie powiedzie
                failure => {
                    throw new Error("Geolocation failed");
                }
            )
            timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        //Pomyślnie zebrano informacje o lokalizacji i zapisano ją w pamięci cache
        //Spróbuj sprawdzić w niej pogodę
        try{
            const forecastApiQuery = `https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(latitude.toPrecision(4))}&longitude=${encodeURIComponent(longitude.toPrecision(4))}&daily=sunrise,sunset,rain_sum,snowfall_sum,temperature_2m_min,temperature_2m_max&timezone=${encodeURIComponent(timezone)}`;
            const forecastApiReply = await fetch(forecastApiQuery);
            if(forecastApiReply.ok != true) throw new Error("API unreachable");
            forecast = await forecastApiReply.json();

            //TODO: Cachowanie pogody do miejsca
            locationCache.find(location => location.longitude == longitude && location.latitude == latitude).forecast = forecast;
        }
        //Jeśli nie uda się pobrać pogody z API
        catch(error){
            await addBubbleAndWait("Coś jest nie tak... błoto nie chce przekazać mi żadnych wizji...");
            const cachedForecast = locationCache.find(location => location.longitude == longitude && location.latitude == latitude).forecast;
            if(cachedForecast == undefined) throw new Error("Can not access forecast");

            //Uaktualnianie zapamiętanej prognozy
            const currentTime = new Date();
            currentTime.setHours(0);
            currentTime.setMinutes(0);
            currentTime.setSeconds(0);
            currentTime.setMilliseconds(0);
            for(let i = 0; i > cachedForecast.daily.time.length; i++){
                const forecastDate = new Date(cachedForecast.daily.time[i]);
                if(forecastDate < currentTime){
                    for(let property of cachedForecast.daily){
                        cachedForecast.daily[property].shift(1);
                    }
                    i--;
                }
            }

            //Jeśli wciąż można wykorzystać zapamiętaną prognozę, zrób to
            if(cachedForecast.daily.time.length > 0){
                forecast = cachedForecast;
                await addBubbleAndWait("Jednak ma ropusza pamięć jest niezastąpiona. Posłuchaj więc ostatniej prognozy.");
            }
            else{
                cachedForecast = undefined;
                throw new Error("Can not access forecast");
            }
        }
        //Pomyślnie odczytano pogodę
        presentForecast(forecast);
    }
    //Jeśli się nie uda...
    catch(error){
        switch(error.message){
            case "Location not found":
                await addBubbleAndWait(getNoLocationFoundQuote())
                break;
            case "Location info not found":
                await addBubbleAndWait(getLocationUnreachableQuote());
                break;
            case "Geolocation not available":
                await addBubbleAndWait(getNoLocationQuote());
                await addBubbleAndWait("Zdradź mi swoje położenie dwunożny płazie, a zdradzę ci moje sekrety.");
                break;
            case "Geolocation failed":
                await addBubbleAndWait(getGeolocationFailedQuote());
                break;
            case "Can not access forecast":
                await addBubbleAndWait(getForecastUnavailableQuote());
                break;
            default:
                break;
        }
        isForecastActive = false
    }

    localStorage.setItem("locationCache", JSON.stringify(locationCache));
}

async function presentForecast(forecast){
    const dayPreambles = [
        "Dziś...",
        "Jutro...",
        "Pojutrze..."
    ]
    let minTemp;
    let maxTemp;
    let avgTemp;

    await addBubbleAndWait(getPrepareQuote());
    for(let day = 0; day < Math.min(2, forecast.daily.time.length); day++){
        await addBubbleAndWait(dayPreambles[day]);
        avgTemp = (forecast.daily.temperature_2m_min[day] + forecast.daily.temperature_2m_max[day])/2;
        await addBubbleAndWait(getSunQuote(forecast.daily.sunrise[day], forecast.daily.sunset[day]));
        await addBubbleAndWait(getRainQuote(forecast.daily.rain_sum[day]));
        if(forecast.daily.snowfall_sum[day] > 0.0) await addBubbleAndWait(getSnowQuote(forecast.daily.snowfall_sum[day]));
        await addBubbleAndWait((avgTemp.toPrecision(3)).toString()+"... "+getTemperatureQuote(avgTemp));
    }

    addBubbleAndWait(getEndQuote());
    isForecastActive = false;
}

document.getElementById("forecastButton").addEventListener("click", () => {
    requestForecast(getPrepareQuote);
});

window.addEventListener("load", () => {
    setTimeout( greet, 1000);
    document.getElementById("oraclePhoto").src = "./src/images/"+localStorage.getItem("oracleId")+".png";
});