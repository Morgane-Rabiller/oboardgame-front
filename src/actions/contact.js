export const SEND_MAIL = "SEND_MAIL";

export const sendMail = (email, object, message) => ({
    type: SEND_MAIL,
    email,
    object,
    message
});