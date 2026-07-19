const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const mailSender = async (email, title, body) => {
  try {
    const data = await resend.emails.send({
      from: "Mind-Matrix <onboarding@resend.dev>",
      to: email,
      subject: title,
      html: body,
    });

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = mailSender;