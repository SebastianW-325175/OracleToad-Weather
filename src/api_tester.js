async function testAPI(){

    const dataCachedTime = localStorage.getItem("dataAge");
    const currentTime = Date.now();
    const dataAge = (Number.parseInt(currentTime) - dataCachedTime)/1000;

    if(dataAge > 30 || dataCachedTime == undefined){
        const request = "https://api.open-meteo.com/v1/forecast?latitude=50.2868&longitude=19.1039&hourly=temperature_2m&forecast_days=1";
        const response = await fetch(request);

        localStorage.setItem("dataAge", Date.now());
        localStorage.setItem("data", JSON.stringify(response));

        console.log("Refreshed the API data!");
        console.log(response);
    }
    else{
        console.log("Using cached data!");
        console.log(JSON.parse(localStorage.getItem("data")));
    }
};

function getLocation(){
    if(!Navigator.geolocation){
        console.log("Localisation not supported on this device!");
        return;
    }
    console.log("Geolocalising...");
    Navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
    },
    error => {
        console.log(error);
    }
)
}

//testAPI();
//getLocation();