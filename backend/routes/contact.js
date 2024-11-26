const express = require('express');
const nodemailer = require('nodemailer');
const router = express();



router.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `Portfolio Contact Form: ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({message: 'Message sent successfully!'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send message' });
    }
});


module.exports = router;