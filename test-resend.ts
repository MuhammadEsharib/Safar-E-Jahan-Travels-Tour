import "dotenv/config";
import { Resend } from "resend";

async function testResendEmail() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Using Resend's built-in verified domain
  const fromEmail = "onboarding@resend.dev"; // Resend's default verified sender
  const toEmail = "delivered@resend.dev"; // Resend's default test receiver

  console.log("🚀 Testing Resend Email with Built-in Domain...\n");
  console.log(`From: ${fromEmail}`);
  console.log(`To: ${toEmail}\n`);

  try {
    const response = await resend.emails.send({
      from: `Safar-E-Jahan <${fromEmail}>`,
      to: [toEmail],
      subject: "✨ Safar-E-Jahan Email Verification Test",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0A0A0A; color: #E0E0E0; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #141414; border: 1px solid #333; border-radius: 16px; overflow: hidden; }
            .header { background-color: #1A1A1A; padding: 30px 20px; text-align: center; border-bottom: 2px solid #C5FF4A; }
            .title { color: #FFFFFF; font-size: 24px; font-weight: 800; letter-spacing: 2px; margin: 0; text-transform: uppercase; }
            .sub { color: #C5FF4A; font-size: 11px; letter-spacing: 3px; font-weight: bold; margin-top: 5px; text-transform: uppercase; }
            .body-content { padding: 30px; }
            .success-box { background-color: #1C3A2D; border: 2px solid #4AFF6A; border-radius: 12px; padding: 20px; text-align: center; margin: 20px 0; }
            .success-box h2 { color: #4AFF6A; margin: 0 0 10px 0; }
            .success-box p { color: #E0E0E0; margin: 0; }
            .footer { background-color: #101010; padding: 20px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #222; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 class="title">✨ VERIFICATION SUCCESS</h1>
              <div class="sub">RESEND EMAIL SYSTEM ACTIVE</div>
            </div>
            <div class="body-content">
              <div class="success-box">
                <h2>✅ Email System is Working!</h2>
                <p>Your Safar-E-Jahan email service is operational and verified.</p>
              </div>
              <p style="color: #AAA; font-size: 14px; line-height: 1.6;">
                This is a test email confirming that the Resend email service is properly configured and functioning with the built-in verified domain.
              </p>
              <div style="background-color: #1C1C1C; border: 1px solid #2A2A2A; border-radius: 12px; padding: 15px; margin: 20px 0; font-family: monospace; font-size: 12px; color: #4AFF6A;">
                <div>From: onboarding@resend.dev (Resend Built-in Domain)</div>
                <div>Time: ${new Date().toISOString()}</div>
                <div>Status: ✅ DELIVERED</div>
              </div>
              <p style="color: #AAA; font-size: 12px; margin-top: 20px;">
                You can now start sending real pilgrimage inquiries through Safar-E-Jahan. Replace the recipient email with your actual customer email address.
              </p>
            </div>
            <div class="footer">
              <div><strong>Safar-E-Jahan Travel & Tours</strong></div>
              <div>Email Verification Test | Resend Built-in Domain</div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (response.error) {
      console.error("❌ Email Send Failed:");
      console.error(JSON.stringify(response.error, null, 2));
      process.exit(1);
    }

    console.log("✅ Email Sent Successfully!");
    console.log("\nResponse Details:");
    console.log(`  Email ID: ${response.data?.id}`);
    console.log(`  Status: Queued for delivery\n`);
    console.log("📧 Check your inbox at: delivered@resend.dev");
    console.log("\n💡 For production, use a verified custom domain.");
    console.log(
      "   Current setup uses Resend's built-in domain (onboarding@resend.dev)",
    );
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

testResendEmail();
