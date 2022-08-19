import nodemailer from 'nodemailer';
import {google} from 'googleapis';
const debug = require('debug')('live-project-scorecard-sq011a:server');


const OAuth2 = google.auth.OAuth2;

const myOAuth2Client = new OAuth2(
    `${process.env.OAUTH_CLIENTID}`,
    `${process.env.OAUTH_CLIENT_SECRET}`,
    "https://developers.google.com/oauthplayground"
    );

myOAuth2Client.setCredentials({
    refresh_token:`${process.env.OAUTH_REFRESH_TOKEN}`
});
const myAccessToken = myOAuth2Client.getAccessToken();
// const connection = {host: "gmail"}
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: `${process.env.MAIL_USERNAME}`,
        pass: `${process.env.MAIL_PASSWORD}`,
        clientId: `${process.env.OAUTH_CLIENTID}`,
        clientSecret: `${process.env.OAUTH_CLIENT_SECRET}`,
        refreshToken: `${process.env.OAUTH_REFRESH_TOKEN}`,
        accessToken: myAccessToken
    }
} as any);



export const emailService = function(emailAddress: unknown, subject: string, mail: string,  name='Sugar Estate'){
    try{
        // const text = `<p>Click to be verified as an admin <a href=" http://${ url }"> click here </a>.</p>`
        const message = {
            from: 'Sugar Estate <daamsexchange@gmail.com>',
            to: `${name} <${emailAddress}>`,
            subject: subject,
            text: 'For clients with plaintext support only',
            html: mail,
        }
        transporter.sendMail(message, (err , data )=>{
            if (err) {
                debug('Mail Service Error:\n', err);
                throw new Error(`Error occured while sending email`)
            } else {
                debug('Mail Service Response:\n', data?.response);
                return 'Email successfully sent';
            }
        })
    }catch(error){
        throw new Error(`${error}`)
    }
}