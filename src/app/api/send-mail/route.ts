import { sendEmail } from 'app/api/utils/sendEmail'

const handler = async (req:any, res:any) => {

  if (req.method === 'POST') {

    try {

      const formData = await req.formData()
      const to = formData.get('to')
      const subject = formData.get('subject')
      const text = formData.get('text')

      await sendEmail({ to, subject, text })

      res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}

export { handler as POST }
