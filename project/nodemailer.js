const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: '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'
    }
}))

transporter.sendMail({
    to: req.body.email,
    from: 'mario@mrmarioi.fr',
    subject: 'Votre message a été envoyé',
    html: `<h1> Bienvenue sur notre site !</h1>
    <p>Voici votre identifiant et votre mot de passe</p>
    <br>
    <br>
    <p>
   Votre nom : ${req.name} <br>
   Votre mail : ${req.email} <br>
   Votre ville : ${req.ville} <br>
   Votre message : ${req.message} </p>
    `
});

