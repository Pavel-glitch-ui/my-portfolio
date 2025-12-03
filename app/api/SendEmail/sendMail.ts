import nodemailer from "nodemailer";
import { EmailData } from "@/app/__shared/types";


export async function sendMail(data: EmailData) {
    try{
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", 
            port: 465,
            secure: true,
            auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
            },
        })
        await transporter.sendMail({
      from: `"Форма обратной связи" <${process.env.SMTP_USER}>`,
      to: "pavelsatete@mail.ru",
      subject: "Новое сообщение с сайта",
      text: `Имя: ${data.name}\nEmail: ${data.email}\nСообщение: ${data.message}\n Проект: ${data.project}`,
    });
    } catch(err){
        console.error("Error sending email:", err);
    }
}