const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = "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";

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "gkaframanis@gmail.com",
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "gkaframanis@gmail.com",
        subject: "Sorry to see you go!",
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`,
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
};