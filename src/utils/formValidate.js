export const formValidate = ( ) => {
    return {
        required: {
            value: true,
            message: "Obligatory field",
        },
        patternEmail: {
            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message: "Wrong email format",
        },
        patternURL: {
            value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
            message: "Wrong URL format",
        },
        minLength: {
            value: 6,
            message: "Min 6 characters",
        },
        validateTrim: {
            trim: (v) => {
                if (!v.trim()) {
                    return "Don't be 🤡, I wrote something";
                }
                return true;
            },
        },
        validateEquals(value) {
            return {
            equals: (v) => v === value || "passwords do not match",
            };
        },
    };
};