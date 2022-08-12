import nodemailer from 'nodemailer';
import asyncHandler from 'express-async-handler';
import {google} from 'googleapis';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { urlencoded } from 'express';
import SMTPPool from 'nodemailer/lib/smtp-pool';
import { error } from 'node:console';
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



export const emailService = function(emailAddress: unknown, subject: string, text: string){
    try{
        // const text = `<p>Click to be verified as an admin <a href=" http://${ url }"> click here </a>.</p>`
        const message = {
            from: ' <daamsexchange@gmail.com>',
            to: `Decagon Edo Tech Park <${emailAddress}>`,
            subject: subject,
            text: 'For clients with plaintext support only',
            html: text,
        }
        transporter.sendMail(message, (err , data )=>{
            if (err) {
              throw new Error("Error occured while sending email")
            } else {
                return 'Email successfully sent';
            }
        })
    }catch(error){
        throw new Error(`${error}`)
    }
}