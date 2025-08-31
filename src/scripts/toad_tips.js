import { checkAuth } from "./auth_utils";
import { getToadTip } from "./dialogs";


document.getElementById("oraclePhoto").src = "./src/images/"+localStorage.getItem("oracleId")+".png";

const isUserLoggedIn = await checkAuth();
if(!isUserLoggedIn) window.location.replace("./login_page.html");

function isTipAvailable(){
    const lastTipTime = localStorage.getItem("lastTipTime");
    if(lastTipTime == null) return true;

    const now = new Date();
    const today = new Date(now.getFullYear, now.getMonth, now.getDate);
    const lastTipDate = new Date(lastTipTime);
    if(lastTipDate < today) return true;
    else return false;
}

if(isTipAvailable()){
    document.getElementById("tipButton").addEventListener("click", event => {
        const now = new Date();
        localStorage.setItem("lastTipTime", `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`);
        event.target.classList.add("tipButtonDisappear");
        window.setTimeout(() => { 
            const tipText = document.createElement("p");
            tipText.id = "tipText";
            const todaysTip = getToadTip();
            localStorage.setItem("lastToadTip", todaysTip);
            tipText.innerHTML = `"${todaysTip}"`;
            event.target.parentNode.insertBefore(tipText, event.target);

            const tipInfo = document.createElement("p");
            tipInfo.id = "tipInfo";
            tipInfo.innerHTML = "Wróć jutro, po kolejną ropuszą mądrość.";
            event.target.parentNode.insertBefore(tipInfo, event.target);

            event.target.parentNode.removeChild(event.target);
        }, 2000);
    })
}
else{
    const tipButton = document.getElementById("tipButton");
    
    const tipText = document.createElement("p");
    tipText.id = "tipText";
    const todaysTip = localStorage.getItem("lastToadTip");
    tipText.innerHTML = `"${todaysTip}"`;
    tipButton.parentNode.insertBefore(tipText, tipButton);

    const tipInfo = document.createElement("p");
    tipInfo.id = "tipInfo";
    tipInfo.innerHTML = "Wróć jutro, po kolejną ropuszą mądrość.";
    tipButton.parentNode.insertBefore(tipInfo, tipButton);

    tipButton.parentNode.removeChild(tipButton);
}