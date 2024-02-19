function register() {
    const username = "demo1";
    const email = "demo1.pe@gmail.com";
    const password = "********";
    return {
        data: {
            username,
            email,
            password
        },
        message: "Registration Successfully Completed"
    }   
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
    return {
        data: "",
        message: "Logout Successfully Completed"
    }
}

