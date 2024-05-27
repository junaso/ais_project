import nodemailer from 'nodemailer'

interface EmailOptions {
  to: string,
  subject: string,
  text: string
}

const sendEmail = async ({ to, subject, text }: EmailOptions) => {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: false,
    auth: {
      user: process.env.REACT_APP_MAILER_USER,
      pass: process.env.REACT_APP_MAILER_PASS
    }
  })

  const mailOptions = {
    from: process.env.REACT_APP_MAILER_USER,
    to: to,
    subject: subject,
    text: text,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent: ' + info.response)
  } catch (error) {
    console.error('Error sending email:', error)
    throw new Error('Email could not be sent')
  }
}

export { sendEmail }
