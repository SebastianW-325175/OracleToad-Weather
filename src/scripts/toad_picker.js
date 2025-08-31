const options = document.getElementById("toadGridContainer").children;
for(let option of options){
    option.addEventListener("click", event => {
        for(let option of options){
            option.classList = ["oracleProfileUnselected"];
        }
        event.target.classList = ["oracleProfileSelected"];
        localStorage.setItem("oracleId", event.target.id);
    })
}

document.getElementById(localStorage.getItem("oracleId")).classList = ["oracleProfileSelected"];