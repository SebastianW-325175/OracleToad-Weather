export async function checkAuth(){
    let authToken = localStorage.getItem("authToken");
    const authApiReply = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
            Authorization: authToken
        },
        credentials: "omit"
    })
    const authApiContent = await authApiReply.json();
    if(authApiContent.message == undefined){
        return true
    }
    else{
        return false;
    }
}

export async function authenticate(login, password){
    const authApiReply = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: login,
            password: password,
            expiresInMins: 30
        }),
        credentials: "omit"
    })
    const authApiContent = await authApiReply.json();
    if(authApiContent.message == "Invalid credentials"){
        return false;
    }
    else{
        localStorage.setItem("authToken", authApiContent.accessToken)
        localStorage.setItem("refreshToken", authApiContent.refreshToken)
        return true;
    }
}

export async function refreshAuth(refreshToken){
    const authApiReply = await fetch("https://dummyjson.com/auth/refresh", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            refreshToken: refreshToken,
            expiresInMins: 30
        }),
        credentials: "omit"
    })
    const authApiContent = await authApiReply.json();
    
    console.log("Auth session refreshed!");
    localStorage.setItem("authToken", authApiContent.accessToken);
    localStorage.setItem("refreshToken", authApiContent.refreshToken);
}