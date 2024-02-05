const sgMail = require('@sendgrid/mail')

require('dotenv').config()


exports.sendMail = async (to, otp) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const message = {
        to: to,
        from: {
            name: 'RK HALL IIT KGP',
            email: 'harshit@kgpian.iitkgp.ac.in',
        },
        subject: "OTP for login on RK's website ",
        text: ` your otp is  :${otp}  `,
        html: `<h1 style='align-text:center; margin:20px' > Now Help is just one tap away </h1>
            <p> your otp is : ${otp} </p>`
    }
    sgMail.send(message).then((res) => {
        console.log('message sent ....')
    })
        .catch((err) => { console.log(err) })

}