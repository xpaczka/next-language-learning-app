// Third-party imports
import nodemailer from 'nodemailer';
import { htmlToText } from 'html-to-text';

// TODO: refactor whole file

const transportOptions = {
  host: process.env.MAIL_HOST!,
  port: process.env.MAIL_PORT!,
  auth: { user: process.env.MAIL_USER!, pass: process.env.MAIL_PASS! },
};

const generateWelcomeTemplate = (username: string): string => {
  return `
  <p>Hi, ${username}</p>
  <p>Thanks for joining fluentify. Hope you will enjoy the app!</p>
  `;
};

export default class Email {
  to: string;
  username: string;
  from: string;

  constructor(user: any) {
    this.to = user.email;
    this.username = user.username;
    this.from = process.env.MAIL_FROM!;
  }

  private createTransport() {
    // @ts-expect-error
    return nodemailer.createTransport(transportOptions);
  }

  private async sendMail(template: string, subject: string) {
    const transport = this.createTransport();
    const mailOptions = { from: this.from, to: this.to, subject, html: template, text: htmlToText(template) };

    await transport.sendMail(mailOptions);
  }

  public async sendWelcomeMail() {
    const template = generateWelcomeTemplate(this.username);
    await this.sendMail(template, 'Welcome to fluentify');
  }
}
