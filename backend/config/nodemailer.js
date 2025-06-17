import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,      // your Gmail address
        pass: process.env.GMAIL_PASS       // your Gmail App Password (not your regular password)
    }
});

export default transporter;