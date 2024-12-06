export const SEND_MAIL = "SEND_MAIL";

export const sendMail = (email, object, message) => ({
    type: SEND_MAIL,
    email,
    object,
    message
});

export const SEND_MAIL_SUCCESS = "SEND_MAIL_SUCCESS";

export const sendMailSuccess = (success) => ({
type: SEND_MAIL_SUCCESS,
success
});

export const SEND_MAIL_ERROR = "SEND_MAIL_ERROR";

export const sendMailError = (error) => ({
type: SEND_MAIL_ERROR,
error
});