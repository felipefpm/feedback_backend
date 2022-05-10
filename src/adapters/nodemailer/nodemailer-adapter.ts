import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

export const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "400bc954b91588",
    pass: "c9ff349069f253"
  }
});

export class NodemailerAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transporter.sendMail({
      from: 'Feedback <oi@feedback.com.br>',
      to: 'Felipe Pinto <felipepinto.fpm@gmail.com>',
      subject,
      html: body
    })
  }
}