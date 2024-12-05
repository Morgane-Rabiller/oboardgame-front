export const SEND_MAIL = "SEND_MAIL";

export const sendMail = (email, object, message) => ({
    type: SEND_MAIL,
    email,
    object,
    message
});

export const SEND_MAIL_MESSAGE = "SEND_MAIL_MESSAGE";

export const sendMailMessage = (message) => ({
type: SEND_MAIL_MESSAGE,
message
});