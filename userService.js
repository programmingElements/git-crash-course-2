function register() {
    return "demo demo@gmail.com"   
}

function login() {
    const email = "demo@gmail.com";
    const password = "********";
    return {
        data: {
            email,
            password,

        },
        message: "Login Successfully Completed",
        success: true
    }
}

function logout() {
    return ""
}

