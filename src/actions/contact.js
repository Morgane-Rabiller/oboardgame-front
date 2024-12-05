const SEND_MAIL = "SEND_MAIL";

const sendMail = (email, object, message) => ({
    type: SEND_MAIL,
    email,
    object,
    message
});