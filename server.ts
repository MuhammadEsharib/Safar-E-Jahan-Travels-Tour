import "dotenv/config";
import express, { Request, Response } from "express";
import path from "path";
import { Resend } from "resend";
import { createServer as createViteServer } from "vite";

const resend = new Resend(process.env.RESEND_API_KEY || "");

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check API
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      service: "Safar-E-Jahan API",
      timestamp: new Date().toISOString(),
    });
  });

  // Contact & Pilgrimage Inquiry API
  app.post("/api/send-inquiry", async (req, res) => {
    try {
      const {
        name,
        email,
        phone,
        contactMethod,
        subject,
        travelers,
        departureCity,
        travelMonth,
        specialRequests,
        bookingRef,
      } = req.body;

      if (!name || (!email && !phone)) {
        return res.status(400).json({
          error:
            "Compulsory fields missing: Full Name and at least one contact channel (Email or Phone/WhatsApp) are required.",
        });
      }

      const generatedRef =
        bookingRef ||
        `SFJ-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      const normalizedEmail = String(email || "").trim();
      const normalizedPhone = String(phone || "").trim();
      const resendApiKey = process.env.RESEND_API_KEY?.trim() || "";
      // Using Resend's built-in verified domain
      const resendFromEmail = "onboarding@resend.dev";
      const whatsappToken = process.env.WHATSAPP_TOKEN?.trim();
      const whatsappPhoneNumberId =
        process.env.WHATSAPP_PHONE_NUMBER_ID?.trim();
      let emailDispatched = false;
      let whatsappDispatched = false;
      let emailError: string | null = null;
      let whatsappError: string | null = null;

      // Send email using Resend's built-in verified domain (onboarding@resend.dev)
      if (normalizedEmail && resendApiKey) {
        try {
          const emailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0A0A0A; color: #E0E0E0; margin: 0; padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background-color: #141414; border: 1px solid #333; border-radius: 16px; overflow: hidden; }
                .header { background-color: #1A1A1A; padding: 30px 20px; text-align: center; border-bottom: 2px solid #C5FF4A; }
                .title { color: #FFFFFF; font-size: 24px; font-weight: 800; letter-spacing: 2px; margin: 0; text-transform: uppercase; }
                .sub { color: #C5FF4A; font-size: 11px; letter-spacing: 3px; font-weight: bold; margin-top: 5px; text-transform: uppercase; }
                .body-content { padding: 30px; }
                .ref-badge { background-color: #222; border: 1px solid #C5FF4A; color: #C5FF4A; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-family: monospace; font-weight: bold; display: inline-block; margin-bottom: 20px; }
                .card { background-color: #1C1C1C; border: 1px solid #2A2A2A; border-radius: 12px; padding: 20px; margin-bottom: 20px; }
                .row { display: flex; justify-content: space-between; border-bottom: 1px solid #282828; padding: 10px 0; font-size: 14px; }
                .row:last-child { border-bottom: none; }
                .label { color: #888; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; }
                .val { color: #FFF; font-weight: 600; }
                .footer { background-color: #101010; padding: 20px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #222; }
                .btn { background-color: #C5FF4A; color: #000; font-weight: bold; text-decoration: none; padding: 12px 24px; border-radius: 25px; display: inline-block; font-size: 12px; letter-spacing: 1px; margin-top: 15px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 class="title">SAFAR-E-JAHAN</h1>
                  <div class="sub">TRAVEL & TOURS • SACRED JOURNEYS</div>
                </div>
                <div class="body-content">
                  <div style="text-align: center;">
                    <div class="ref-badge">REFERENCE ID: ${generatedRef}</div>
                    <h2 style="color: #FFF; margin-top: 0;">Assalam-o-Alaikum, ${name}</h2>
                    <p style="color: #AAA; font-size: 14px; line-height: 1.6;">
                      Thank you for submitting your sacred pilgrimage inquiry. Our senior travel consultant has received your dossier and will reach out shortly.
                    </p>
                  </div>
                  <div class="card">
                    <div style="color: #C5FF4A; font-size: 12px; font-weight: bold; letter-spacing: 1px; margin-bottom: 12px; text-transform: uppercase;">
                      Your Inquiry Dossier
                    </div>
                    <div class="row"><span class="label">Pilgrim Name</span><span class="val">${name}</span></div>
                    <div class="row"><span class="label">Inquiry Package</span><span class="val">${subject || "Umrah Package"}</span></div>
                    <div class="row"><span class="label">Departure City</span><span class="val">${departureCity || "Karachi, Pakistan"}</span></div>
                    <div class="row"><span class="label">Travel Season</span><span class="val">${travelMonth || "Flexible / Upcoming"}</span></div>
                    <div class="row"><span class="label">Total Travelers</span><span class="val">${travelers || "2 Adults"}</span></div>
                    <div class="row"><span class="label">Phone / WhatsApp</span><span class="val">${phone || "Provided"}</span></div>
                  </div>
                  ${
                    specialRequests
                      ? `
                    <div class="card">
                      <div class="label" style="margin-bottom: 6px;">Special Requests / Notes:</div>
                      <div style="color: #DDD; font-size: 13px; font-style: italic;">"${specialRequests}"</div>
                    </div>
                  `
                      : ""
                  }
                  <div style="text-align: center; margin-top: 25px;">
                    <a href="https://wa.me/923458050124?text=Assalam-o-Alaikum%20I%20have%20inquiry%20reference%20${generatedRef}" class="btn">
                      CHAT ON WHATSAPP (+92 345 8050124)
                    </a>
                  </div>
                </div>
                <div class="footer">
                  <div><strong>Safar-E-Jahan Travel & Tours</strong></div>
                  <div>Direct 24/7 Helpline: 0345-8050124 | info@safarejahan.com</div>
                  <div>Offices: Karachi • Lahore • Islamabad • Makkah al-Mukarramah</div>
                  <div style="margin-top: 8px; color: #555;">Approved & Authorized by Saudi Ministry of Hajj & Umrah</div>
                </div>
              </div>
            </body>
            </html>
          `;

          const { data, error } = await resend.emails.send({
            from: `Safar-E-Jahan <${resendFromEmail}>`,
            to: [normalizedEmail],
            subject: `Sacred Journey Dossier [Ref: ${generatedRef}] - Safar-E-Jahan`,
            html: emailHtml,
          });

          if (error) {
            emailError = error.message || "Resend delivery attempted";
          } else if (data?.id) {
            emailDispatched = true;
          }
        } catch (e: any) {
          emailError = e.message;
        }
      }

      if (normalizedPhone && whatsappToken && whatsappPhoneNumberId) {
        try {
          const cleanPhone = normalizedPhone.replace(/\D/g, "");
          const toNumber = cleanPhone.startsWith("0")
            ? `92${cleanPhone.slice(1)}`
            : cleanPhone.startsWith("92")
              ? cleanPhone
              : `92${cleanPhone}`;

          const whatsappText = `Assalam-o-Alaikum ${name.trim()}!\n\nYour inquiry has been received by Safar-E-Jahan.\nReference: ${generatedRef}\nPhone: ${normalizedPhone}\nPackage: ${subject || "Umrah Inquiry"}\n\nOur advisor will contact you shortly.`;

          const whatsappResponse = await fetch(
            `https://graph.facebook.com/v20.0/${whatsappPhoneNumberId}/messages`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${whatsappToken}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                messaging_product: "whatsapp",
                to: toNumber,
                type: "text",
                text: { body: whatsappText },
              }),
            },
          );

          if (whatsappResponse.ok) {
            whatsappDispatched = true;
          } else {
            const whatsappData = await whatsappResponse
              .json()
              .catch(() => ({}));
            whatsappError =
              whatsappData?.error?.message || "WhatsApp delivery attempted";
          }
        } catch (e: any) {
          whatsappError = e.message;
        }
      }

      if (normalizedEmail && resendApiKey && emailError) {
        return res.status(400).json({
          success: false,
          bookingRef: generatedRef,
          emailDispatched: false,
          whatsappDispatched,
          error: emailError,
          message:
            "Inquiry was received, but email delivery failed. Please verify the Resend sender/recipient settings.",
        });
      }

      if (
        normalizedPhone &&
        whatsappToken &&
        whatsappPhoneNumberId &&
        whatsappError
      ) {
        return res.status(400).json({
          success: false,
          bookingRef: generatedRef,
          emailDispatched: Boolean(emailDispatched),
          whatsappDispatched: false,
          error: whatsappError,
          message:
            "Inquiry was received, but the WhatsApp message failed to send.",
        });
      }

      return res.json({
        success: true,
        bookingRef: generatedRef,
        emailDispatched: normalizedEmail ? Boolean(emailDispatched) : false,
        whatsappDispatched: normalizedPhone
          ? Boolean(whatsappDispatched)
          : false,
        method: normalizedEmail ? "email-and-whatsapp" : "whatsapp-direct",
        timestamp: new Date().toISOString(),
        message: `Inquiry registered successfully under reference ${generatedRef}.`,
      });
    } catch (err: any) {
      console.error("Error processing inquiry:", err);
      return res
        .status(500)
        .json({ error: "Internal error processing inquiry." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Safar-E-Jahan server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
