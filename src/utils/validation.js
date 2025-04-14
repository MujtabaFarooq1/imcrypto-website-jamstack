const email_validation_keyset = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}]))|((([a-zA-Z\-0-9]+\.){1,2})[a-zA-Z]{2,}))$/;
const password_validatoin_keyset = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

export const Validation = {
    // check empty , undefined or null string
    isEmpty: function (value = "") {
        try {
            if (value?.trim() == "") {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.log("error to check empty string >>>>> ", e);
        }
    },

    // Check Email is valide or not
    isValidEmail: function (value) {
        const CHECK_EMAIL = email_validation_keyset;

        if (CHECK_EMAIL?.test(value.trim()) == 0) {
            return false;
        }
        return true;
    },

    // Check Password Validation
    isValidPassword: function (value) {
        const CHECK_PASSWORD = password_validatoin_keyset;

        if (CHECK_PASSWORD.test(value.trim()) == 0) {
            return false;
        }
        return true;
    }
};