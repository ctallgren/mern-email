// Looking to send emails in production? Check out our Email API/SMTP product!
import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

export const mailtrapClient = new MailtrapClient({
  endpoint: ENDPOINT,
  token: TOKEN,
});

export const mailtrapSender = {
  email: "hello@demomailtrap.com",
  name: "Chris-Chris",
};

// const recipients = [
//   {
//     email: "kikket@gmail.com",
//   },
// ];

// client

//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })

//   .then(console.log, console.error);
