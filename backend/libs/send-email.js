import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

// Only initialize SendGrid if API key is properly configured
if (process.env.SEND_GRID_API && process.env.SEND_GRID_API.startsWith("SG.")) {
  sgMail.setApiKey(process.env.SEND_GRID_API);
} else if (process.env.SEND_GRID_API) {
  console.warn("⚠️  Invalid SendGrid API key format. Email sending disabled.");
}

const fromEmail = process.env.FROM_EMAIL;

export const sendEmail = async (to, subject, html) => {
  // Skip email sending if SendGrid is not configured
  if (
    !process.env.SEND_GRID_API ||
    !process.env.SEND_GRID_API.startsWith("SG.")
  ) {
    console.log("📧 Email skipped (SendGrid not configured):", { to, subject });
    return true; // Return true to prevent error responses
  }

  const msg = {
    to,
    from: `TaskHub <${fromEmail}>`,
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent successfully");

    return true;
  } catch (error) {
    console.error("Error sending email:", error);

    return false;
  }
};
