import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d5e752aa91e916",
    pass: "f452f159882f96"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
     await transport.sendMail({
    from: 'Equipe FeedWid <oi@FeedWid.com>',
    to: 'Willian Domingues <willian.domingues3@gmail.com>',
    subject,
    html: body
});
  }
}