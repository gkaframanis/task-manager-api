const sgMail = require("@sendgrid/mail");

const sendgridAPIKey = "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";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
    to: "gkaframanis@gmail.com",
    from: "gregotel7@gmail.com",
    subject: "This is my first creation",
    text: "I hope this one actually get to you."
});
