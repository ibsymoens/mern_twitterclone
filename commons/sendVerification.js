import nodemailer from "nodemailer";
import env from "dotenv";
env.config();

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
    host: "smtp.gmail.com"
});

const sendVerificationCode = async(email, verificationCode) => {
    console.log("#################################send email verification code#################################");
    await transport.sendMail({
        from: "Twitter Clone",
        to: email,
        subject: `${verificationCode} is your Twitter verification code`,
        html: `
            <div style="background: #F8F6F8;">
                <div style="width: 40%; height: 50%; margin: 30px auto; padding: 30px; background: #FFF;">
                    <h2>Confirm your email address</h2>
                    <p>There's one quick step you need to complete before creating your Twitter account. Let's make sure this is the right email address for you --- please confirm this is the right address to use for your new account.</p>
                    <p>Please enter this verification code to get started on Twitter:</p>
                    <h2>${verificationCode}</h2>
                    <p>Verification codes expire after two hours.</p>
                    <br />
                    <br />
                    <p>Thanks,</p>
                    <p>Twitter</p>
                </div>
            </div>
        `
    });
}

export default sendVerificationCode;