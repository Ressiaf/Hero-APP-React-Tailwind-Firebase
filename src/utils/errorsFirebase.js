export const errorsFirebase = (error) => {
    switch (error.code) {
        case "auth/email-already-in-use":
            return { code: "email", message: "User already registered" };

        case "auth/invalid-email":
            return { code: "email", message: "Invalid email format" };

        case "auth/invalid-email-verified":
            return { code: "email", message: "The email is not verified" };

        case "auth/invalid-password":
            return {
                code: "password",
                message: "Password minimum 6 characters",
            };

        case "auth/user-not-found":
            return { code: "email", message: "Unregistered user" };

        case "auth/wrong-password":
            return { code: "password", message: "Incorrect password" };

        default:
            return { code: "email", message: "Error, try again later" };
    }
};