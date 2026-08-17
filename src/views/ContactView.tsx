import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Copy,
  Check,
  Send,
  Loader2,
  Users,
  Calendar,
  Building,
  Plane,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const ContactView: React.FC = () => {
  // Form State
  const [name, setName] = useState("");
  const [contactMode, setContactMode] = useState<"both" | "email" | "whatsapp">(
    "both",
  );
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Star Umrah Package (15 Days)");
  const [travelersAdults, setTravelersAdults] = useState("2");
  const [travelersChildren, setTravelersChildren] = useState("0");
  const [departureCity, setDepartureCity] = useState("Karachi");
  const [travelMonth, setTravelMonth] = useState("Next 30–60 Days");
  const [message, setMessage] = useState("");

  // UI / Dispatch State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dispatchStep, setDispatchStep] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [copiedRef, setCopiedRef] = useState(false);
  const [copiedDossier, setCopiedDossier] = useState(false);
  const [emailSentStatus, setEmailSentStatus] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Compulsory field validation
    if (!name.trim()) {
      setValidationError("Please enter your full name.");
      return;
    }

    if (contactMode === "email" && !email.trim()) {
      setValidationError(
        "Please provide a valid email address for confirmation delivery.",
      );
      return;
    }

    if (contactMode === "whatsapp" && !phone.trim()) {
      setValidationError(
        "Please provide a valid WhatsApp / Mobile number for instant message delivery.",
      );
      return;
    }

    if (contactMode === "both" && !email.trim() && !phone.trim()) {
      setValidationError(
        "Please provide at least an Email address or WhatsApp / Mobile number.",
      );
      return;
    }

    // Begin live interactive sending sequence
    setIsSubmitting(true);
    const newRef = `SFJ-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(newRef);

    setDispatchStep("Generating Sacred Pilgrimage Dossier...");
    await new Promise((r) => setTimeout(r, 600));

    if (email.trim()) {
      setDispatchStep(`Dispatching live confirmation dossier to ${email}...`);
      await new Promise((r) => setTimeout(r, 700));
    }

    if (phone.trim()) {
      setDispatchStep(
        "Formatting WhatsApp encrypted itinerary transmission...",
      );
      await new Promise((r) => setTimeout(r, 600));
    }

    setDispatchStep("Syncing with Safar-E-Jahan 24/7 Concierge...");

    try {
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          contactMethod: contactMode,
          subject,
          travelers: `${travelersAdults} Adults${Number(travelersChildren) > 0 ? `, ${travelersChildren} Children` : ""}`,
          departureCity,
          travelMonth,
          specialRequests: message.trim(),
          bookingRef: newRef,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success === false) {
        setValidationError(
          data.error ||
            "The inquiry was received, but email delivery is currently unavailable. Please check the Resend sender configuration.",
        );
        setEmailSentStatus(false);
        setSubmitted(false);
        return;
      }

      setEmailSentStatus(Boolean(data.emailDispatched));
      setSubmitted(true);
    } catch {
      setValidationError(
        "The inquiry could not be sent right now. Please try again or contact the helpline directly.",
      );
      setEmailSentStatus(false);
      setSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFullDossierText = () => {
    return (
      `*🌟 SACRED JOURNEY INQUIRY DOSSIER - SAFAR-E-JAHAN*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `📌 *Booking Reference:* ${bookingRef}\n` +
      `👤 *Pilgrim Name:* ${name}\n` +
      `🕋 *Package / Subject:* ${subject}\n` +
      `👥 *Travelers:* ${travelersAdults} Adults${Number(travelersChildren) > 0 ? `, ${travelersChildren} Children` : ""}\n` +
      `✈️ *Departure City:* ${departureCity}\n` +
      `🗓 *Travel Period:* ${travelMonth}\n` +
      (email ? `✉️ *Email Address:* ${email}\n` : "") +
      (phone ? `📞 *Phone / WhatsApp:* ${phone}\n` : "") +
      (message ? `📝 *Requirements:* ${message}\n` : "") +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `🏢 *Safar-E-Jahan Helpline:* +92 345 8050124\n` +
      `🌐 *Offices:* Karachi • Lahore • Islamabad • Makkah al-Mukarramah`
    );
  };

  const handleOpenWhatsAppDirect = () => {
    const text = encodeURIComponent(getFullDossierText());
    window.open(`https://wa.me/923458050124?text=${text}`, "_blank");
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(bookingRef);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const handleCopyDossier = () => {
    navigator.clipboard.writeText(getFullDossierText());
    setCopiedDossier(true);
    setTimeout(() => setCopiedDossier(false), 2500);
  };

  const faqs = [
    {
      q: "What is included in the Star and Premium Umrah packages?",
      a: "Our Star and Premium packages include fast-track Saudi electronic visas, 4-Star or 5-Star Front Row hotel accommodations in Makkah (Clock Tower) and Madinah, full-board gourmet meals, high-speed Haramain bullet train tickets, private luxury GMC Yukon / HiAce transfers, guided historical Ziyarat tours, and 24/7 on-ground assistance.",
    },
    {
      q: "How do I secure Rawdah Sharif (Riyad ul-Jannah) permits?",
      a: "Our dedicated coordinators assist all our travelers in setting up and securing official Nusuk app appointment permits for the Rawdah Sharif according to Saudi Ministry guidelines.",
    },
    {
      q: "Can we customize the number of days in Makkah and Madinah?",
      a: "Absolutely! Our Custom Journey Planner allows you to choose exact dates, duration (5 to 30 days), hotel tiers, room sharing types (Quad, Triple, Twin, Single), and private chauffeur vehicles.",
    },
    {
      q: "What are the visa requirements for Pakistani and international passport holders?",
      a: "For Pakistani passport holders, a valid passport with at least 6 months validity, a digital passport-size photograph on a white background, and a copy of CNIC are required. We handle electronic visa approvals in 24–48 hours.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#0A0A0A] pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 text-[#E0E0E0]"
      id="contact-view"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 lg:px-8 space-y-12 sm:space-y-16 md:space-y-20">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] bg-[#141414] text-[#C5FF4A] border border-white/15 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-[#C5FF4A] shadow-[0_0_8px_#C5FF4A]"></span>
            24/7 DIRECT ADVISORY & DISPATCH
          </div>
          <h1 className="font-serif-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight">
            Connect With Our Advisors
          </h1>
          <p className="text-[12px] sm:text-sm md:text-base font-editorial-serif italic text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Whether you are booking a curated package or customizing a bespoke
            spiritual journey, submit your inquiry below for immediate
            confirmation and dedicated advisor assistance.
          </p>
        </div>

        {/* Main Form & Contact Info Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
          {/* Left Column: Form / Success Dossier (7 cols on lg, full width on mobile/tablet) */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5FF4A]/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5FF4A] font-bold">
                  INQUIRY & DISPATCH DESK
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C5FF4A]" />
                  <span>Verified MOFA Agent</span>
                </div>
              </div>

              {/* SUCCESS CONFIRMATION DOSSIER VIEW */}
              {submitted ? (
                <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  {/* Top Success Banner */}
                  <div className="p-6 rounded-2xl bg-[#181818] border border-[#C5FF4A]/40 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#C5FF4A]/20 border border-[#C5FF4A] flex items-center justify-center text-[#C5FF4A] mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif-heading font-black text-white uppercase tracking-wider">
                      Inquiry Dispatched Successfully
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 font-editorial-serif italic max-w-md mx-auto">
                      Assalam-o-Alaikum,{" "}
                      <strong className="text-white not-italic">{name}</strong>.
                      Your pilgrimage inquiry has been registered with our
                      senior booking concierge.
                    </p>

                    {/* Booking Reference Code */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                      <div className="px-4 py-2 rounded-xl bg-[#0A0A0A] border border-white/15 font-mono text-xs sm:text-sm font-bold text-[#C5FF4A] tracking-wider">
                        REFERENCE: {bookingRef}
                      </div>
                      <button
                        onClick={handleCopyRef}
                        className="px-3 py-2 rounded-xl bg-[#222] hover:bg-[#2c2c2c] border border-white/10 text-xs font-mono text-white flex items-center gap-1.5 active:scale-95 transition-all"
                      >
                        {copiedRef ? (
                          <Check className="w-3.5 h-3.5 text-[#C5FF4A]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-neutral-400" />
                        )}
                        <span>{copiedRef ? "Copied!" : "Copy Code"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Live Dispatch Feedback Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    {email && emailSentStatus && (
                      <div className="p-3.5 rounded-xl bg-[#161616] border border-white/10 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green-500/20 text-[#C5FF4A] flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] uppercase text-neutral-400 font-bold">
                            Email Dispatch Status
                          </div>
                          <div className="text-white text-xs truncate">
                            Sent successfully
                          </div>
                        </div>
                      </div>
                    )}

                    {email && !emailSentStatus && (
                      <div className="p-3.5 rounded-xl bg-[#161616] border border-white/10 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                          <AlertCircle className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] uppercase text-neutral-400 font-bold">
                            Email Dispatch Status
                          </div>
                          <div className="text-amber-300 text-xs truncate">
                            Delivery pending
                          </div>
                        </div>
                      </div>
                    )}

                    {phone && (
                      <div className="p-3.5 rounded-xl bg-[#161616] border border-white/10 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#C5FF4A]/20 text-[#C5FF4A] flex items-center justify-center shrink-0">
                          <MessageCircle className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[9px] uppercase text-neutral-400 font-bold">
                            WhatsApp Dispatch
                          </div>
                          <div className="text-white text-xs truncate">
                            Ready for {phone}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Summary Dossier Card */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#161616] border border-white/10 space-y-3 text-xs sm:text-sm">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5FF4A] font-bold border-b border-white/10 pb-2">
                      Pilgrimage Summary Dossier
                    </div>

                    <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                      <div>
                        <span className="text-neutral-400 text-[11px] font-mono block">
                          Package / Inquiry
                        </span>
                        <strong className="text-white">{subject}</strong>
                      </div>
                      <div>
                        <span className="text-neutral-400 text-[11px] font-mono block">
                          Departure City
                        </span>
                        <strong className="text-white">{departureCity}</strong>
                      </div>
                      <div>
                        <span className="text-neutral-400 text-[11px] font-mono block">
                          Travelers
                        </span>
                        <strong className="text-white">
                          {travelersAdults} Adults
                          {Number(travelersChildren) > 0
                            ? `, ${travelersChildren} Children`
                            : ""}
                        </strong>
                      </div>
                      <div>
                        <span className="text-neutral-400 text-[11px] font-mono block">
                          Travel Timeline
                        </span>
                        <strong className="text-white">{travelMonth}</strong>
                      </div>
                    </div>

                    {message && (
                      <div className="pt-2 border-t border-white/10">
                        <span className="text-neutral-400 text-[11px] font-mono block mb-1">
                          Special Notes / Requirements
                        </span>
                        <p className="text-neutral-300 italic font-editorial-serif text-xs bg-[#111] p-3 rounded-lg border border-white/5">
                          "{message}"
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-2">
                    <button
                      onClick={handleOpenWhatsAppDirect}
                      className="w-full py-4 px-6 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider bg-[#C5FF4A] text-black hover:bg-white transition-all shadow-xl flex items-center justify-center gap-2 active:scale-95"
                      id="confirm-whatsapp-btn"
                    >
                      <MessageCircle className="w-4 h-4 fill-black text-transparent shrink-0" />
                      <span>Open Direct Chat on WhatsApp (0345-8050124)</span>
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        onClick={handleCopyDossier}
                        className="py-3 px-4 rounded-full font-mono font-bold text-xs bg-[#1C1C1C] hover:bg-[#252525] border border-white/15 text-white flex items-center justify-center gap-2 active:scale-95 transition-all"
                      >
                        {copiedDossier ? (
                          <Check className="w-3.5 h-3.5 text-[#C5FF4A]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-neutral-400" />
                        )}
                        <span>
                          {copiedDossier
                            ? "Dossier Copied!"
                            : "Copy Full Dossier Text"}
                        </span>
                      </button>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setMessage("");
                        }}
                        className="py-3 px-4 rounded-full font-mono text-xs bg-[#141414] hover:bg-[#1C1C1C] border border-white/10 text-neutral-300 hover:text-white flex items-center justify-center gap-2 active:scale-95 transition-all"
                      >
                        <span>Send Another Inquiry</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* INQUIRY SUBMISSION FORM */
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  id="contact-inquiry-form"
                >
                  <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                    Send Instant Pilgrimage Inquiry
                  </h2>
                  <p className="text-xs text-neutral-400 font-editorial-serif italic mb-6">
                    Fill in your details below. We will send a confirmation
                    dossier directly to your email or WhatsApp number.
                  </p>

                  {/* Validation Error Banner */}
                  {validationError && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-2.5 text-xs text-red-400 font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  {/* 1. Pilgrim Name (Compulsory) */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-300 mb-1.5 font-bold">
                      Full Name *{" "}
                      <span className="text-[#C5FF4A] font-normal">
                        (Compulsory)
                      </span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Muhammad Farooq or Dr. Sarah Khan"
                      className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 sm:p-3.5 text-[12px] sm:text-xs md:text-sm text-white placeholder:text-neutral-500 focus:border-[#C5FF4A] focus:outline-none transition-colors"
                      id="contact-name-input"
                    />
                  </div>

                  {/* 2. Contact Channel Choice */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono uppercase text-neutral-300 font-bold">
                      Preferred Confirmation Method *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: "both", label: "Email & WhatsApp" },
                        { id: "email", label: "Email Only" },
                        { id: "whatsapp", label: "WhatsApp Only" },
                      ].map((mode) => (
                        <button
                          key={mode.id}
                          type="button"
                          onClick={() => setContactMode(mode.id as any)}
                          className={`py-2 px-2 text-[11px] font-mono rounded-xl border transition-all text-center ${
                            contactMode === mode.id
                              ? "bg-[#C5FF4A] text-black font-bold border-[#C5FF4A]"
                              : "bg-[#181818] text-neutral-400 border-white/10 hover:text-white"
                          }`}
                        >
                          {mode.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Fields based on selected mode */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {/* Email Input */}
                    {(contactMode === "email" || contactMode === "both") && (
                      <div>
                        <label className="block text-[10px] sm:text-[11px] font-mono uppercase text-neutral-300 mb-1.5 font-bold">
                          Email Address{" "}
                          {contactMode === "email" ? "*" : "(For live copy)"}
                        </label>
                        <input
                          type="email"
                          required={contactMode === "email"}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="youremail@example.com"
                          className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 sm:p-3.5 text-[12px] sm:text-xs md:text-sm text-white placeholder:text-neutral-500 focus:border-[#C5FF4A] focus:outline-none transition-colors"
                          id="contact-email-input"
                        />
                      </div>
                    )}

                    {/* WhatsApp / Mobile Input */}
                    {(contactMode === "whatsapp" || contactMode === "both") && (
                      <div>
                        <label className="block text-[10px] sm:text-[11px] font-mono uppercase text-neutral-300 mb-1.5 font-bold">
                          WhatsApp / Mobile No *{" "}
                          {contactMode === "whatsapp" ? "(Compulsory)" : ""}
                        </label>
                        <input
                          type="tel"
                          required={contactMode === "whatsapp"}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 0345-8050124 or +92..."
                          className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 sm:p-3.5 text-[12px] sm:text-xs md:text-sm text-white placeholder:text-neutral-500 focus:border-[#C5FF4A] focus:outline-none transition-colors"
                          id="contact-phone-input"
                        />
                      </div>
                    )}
                  </div>

                  {/* Package & Departure Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-mono uppercase text-neutral-300 mb-1.5 font-bold">
                        Inquiry Package / Service
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 sm:p-3.5 text-[12px] sm:text-xs md:text-sm text-white focus:border-[#C5FF4A] focus:outline-none transition-colors"
                      >
                        <option value="Star Umrah Package (15 Days)">
                          Star Umrah Package (15 Days)
                        </option>
                        <option value="Economy Umrah Package (15 Days)">
                          Economy Umrah Package (15 Days)
                        </option>
                        <option value="Premium Kaaba Suite Package (10 Days)">
                          Premium Kaaba Suite Package (10 Days)
                        </option>
                        <option value="Executive Hajj 2025/2026 Registration">
                          Executive Hajj 2025/2026 Registration
                        </option>
                        <option value="Custom Family Package Planning">
                          Custom Family Package Planning
                        </option>
                        <option value="Visa & VIP Transportation Only">
                          Visa & VIP Transportation Only
                        </option>
                        <option value="Corporate / Group Delegation">
                          Corporate / Group Delegation
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-mono uppercase text-neutral-300 mb-1.5 font-bold">
                        Departure City
                      </label>
                      <select
                        value={departureCity}
                        onChange={(e) => setDepartureCity(e.target.value)}
                        className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 sm:p-3.5 text-[12px] sm:text-xs md:text-sm text-white focus:border-[#C5FF4A] focus:outline-none transition-colors"
                      >
                        <option value="Karachi">Karachi (KHI)</option>
                        <option value="Lahore">Lahore (LHE)</option>
                        <option value="Islamabad">Islamabad (ISB)</option>
                        <option value="Peshawar">Peshawar (PEW)</option>
                        <option value="Multan">Multan (MUX)</option>
                        <option value="Sialkot">Sialkot (SKT)</option>
                        <option value="London / UK">London / UK</option>
                        <option value="Dubai / UAE">Dubai / UAE</option>
                        <option value="USA / Canada">USA / Canada</option>
                        <option value="Other International">
                          Other International
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Travelers & Travel Month */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div>
                        <label className="block text-[10px] sm:text-[11px] font-mono uppercase text-neutral-300 mb-1.5 font-bold">
                          Adults (12+)
                        </label>
                        <select
                          value={travelersAdults}
                          onChange={(e) => setTravelersAdults(e.target.value)}
                          className="w-full bg-[#181818] border border-white/15 rounded-xl p-2.5 sm:p-3.5 text-[12px] sm:text-xs md:text-sm text-white focus:border-[#C5FF4A] focus:outline-none"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 10, 15, 20].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? "Adult" : "Adults"}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] sm:text-[11px] font-mono uppercase text-neutral-300 mb-1.5 font-bold">
                          Children / Infants
                        </label>
                        <select
                          value={travelersChildren}
                          onChange={(e) => setTravelersChildren(e.target.value)}
                          className="w-full bg-[#181818] border border-white/15 rounded-xl p-2.5 sm:p-3.5 text-[12px] sm:text-xs md:text-sm text-white focus:border-[#C5FF4A] focus:outline-none"
                        >
                          {[0, 1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? "Child" : "Children"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-mono uppercase text-neutral-300 mb-1.5 font-bold">
                        Intended Travel Period
                      </label>
                      <select
                        value={travelMonth}
                        onChange={(e) => setTravelMonth(e.target.value)}
                        className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 sm:p-3.5 text-[12px] sm:text-xs md:text-sm text-white focus:border-[#C5FF4A] focus:outline-none"
                      >
                        <option value="Next 30 Days">
                          Immediate (Next 30 Days)
                        </option>
                        <option value="Next 60-90 Days">
                          Upcoming (Next 60–90 Days)
                        </option>
                        <option value="Ramadan 2025 (First 15 Days)">
                          Ramadan 2025 (First 15 Days)
                        </option>
                        <option value="Ramadan 2025 (Last 10 Days & Lailat-ul-Qadr)">
                          Ramadan 2025 (Last 10 Days)
                        </option>
                        <option value="Shawwal / Post-Eid 2025">
                          Shawwal / Post-Eid 2025
                        </option>
                        <option value="Hajj Season 2025/2026">
                          Executive Hajj 2025/2026
                        </option>
                        <option value="Winter Vacation (Dec-Jan)">
                          Winter Holidays (Dec - Jan)
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message & Special Requests */}
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-mono uppercase text-neutral-300 mb-1.5 font-bold">
                      Special Requirements / Inquiries
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Wheelchair assistance, specific hotel choice, quad sharing, etc."
                      className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 sm:p-3.5 text-[12px] sm:text-xs md:text-sm text-white placeholder:text-neutral-500 focus:border-[#C5FF4A] focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit CTA Button */}
                  <div className="pt-3 sm:pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 sm:py-4 rounded-full font-black text-[12px] sm:text-xs md:text-sm uppercase tracking-widest bg-white text-black hover:bg-[#C5FF4A] shadow-2xl flex items-center justify-center gap-2 sm:gap-2.5 transition-all transform hover:scale-[1.01] active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed"
                      id="submit-contact-form-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-black" />
                          <span className="hidden sm:inline">
                            {dispatchStep || "Processing Inquiry..."}
                          </span>
                          <span className="sm:hidden">Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-black" />
                          <span className="hidden sm:inline">
                            Confirm & Send Pilgrimage Inquiry
                          </span>
                          <span className="sm:hidden">Send Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Helplines, Office Addresses & Live Stats (5 cols on lg, full width on mobile/tablet) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            {/* Quick Contact Card */}
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-[#121212] border border-white/10 space-y-4 sm:space-y-6 shadow-2xl">
              <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#C5FF4A] font-bold">
                INSTANT DIRECT HELPLINES
              </div>
              <h3 className="font-serif-heading text-lg sm:text-xl md:text-2xl font-bold text-white">
                Live Concierge Channels
              </h3>

              <div className="space-y-2.5 sm:space-y-3.5 text-[12px] sm:text-xs md:text-sm">
                <a
                  href="tel:03458050124"
                  className="flex items-center gap-3 sm:gap-3.5 p-3 sm:p-4 rounded-lg sm:rounded-2xl bg-[#181818] border border-white/10 hover:border-[#C5FF4A] transition-colors group"
                >
                  <div className="w-9 sm:w-10 md:w-11 h-9 sm:h-10 md:h-11 rounded-lg sm:rounded-xl bg-[#222222] border border-white/15 text-[#C5FF4A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase">
                      Direct Helpline
                    </div>
                    <div className="font-bold text-white text-[12px] sm:text-sm md:text-base font-mono">
                      0345-8050124
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/923458050124"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 sm:gap-3.5 p-3 sm:p-4 rounded-lg sm:rounded-2xl bg-[#181818] border border-white/10 hover:border-[#C5FF4A] transition-colors group"
                >
                  <div className="w-9 sm:w-10 md:w-11 h-9 sm:h-10 md:h-11 rounded-lg sm:rounded-xl bg-[#222222] border border-white/15 text-[#C5FF4A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase">
                      WhatsApp Instant Support
                    </div>
                    <div className="font-bold text-white text-[12px] sm:text-sm md:text-base font-mono">
                      +92 345 8050124
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@safarejahan.com"
                  className="flex items-center gap-3 sm:gap-3.5 p-3 sm:p-4 rounded-lg sm:rounded-2xl bg-[#181818] border border-white/10 hover:border-[#C5FF4A] transition-colors group"
                >
                  <div className="w-9 sm:w-10 md:w-11 h-9 sm:h-10 md:h-11 rounded-lg sm:rounded-xl bg-[#222222] border border-white/15 text-[#C5FF4A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase">
                      Official Bookings Desk
                    </div>
                    <div className="font-bold text-white text-[12px] sm:text-sm md:text-base font-mono truncate">
                      info@safarejahan.com
                    </div>
                  </div>
                </a>
              </div>

              {/* Office Locations */}
              <div className="pt-3 sm:pt-4 border-t border-white/10 space-y-2.5 sm:space-y-3 text-[11px] sm:text-xs text-neutral-300 font-mono">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5FF4A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Head Office:</strong> Main
                    Commercial Avenue, Phase 6, DHA, Karachi, Pakistan
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5FF4A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Branch Office:</strong> Blue
                    Area, Islamabad & Gulberg III, Lahore
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5FF4A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Makkah Desk:</strong> Ibrahim
                    Al Khalil St, Ajyad, Makkah al-Mukarramah, KSA
                  </div>
                </div>
              </div>
            </div>

            {/* Saudi Ministry Certification Box */}
            <div className="p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-[#141414] border border-white/10 flex items-start gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#1F1F1F] border border-white/15 text-[#C5FF4A] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white text-[11px] sm:text-xs md:text-sm uppercase font-mono">
                  Official Saudi Accreditation
                </h4>
                <p className="text-[11px] sm:text-xs md:text-sm text-neutral-400 font-editorial-serif italic leading-relaxed">
                  Authorized by the Ministry of Hajj & Umrah (Kingdom of Saudi
                  Arabia) and the Department of Tourist Services Pakistan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div
          className="max-w-4xl mx-auto space-y-6 sm:space-y-8 pt-8 sm:pt-10 border-t border-white/10"
          id="faq"
        >
          <div className="text-center space-y-2 sm:space-y-3">
            <div className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#C5FF4A] font-bold">
              HELP & SACRED KNOWLEDGE
            </div>
            <h2 className="font-serif-heading text-xl sm:text-3xl md:text-4xl font-black text-white uppercase leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[12px] sm:text-xs md:text-sm text-neutral-400 font-editorial-serif italic">
              Clear guidance to assist in your preparation and itinerary
              decisions.
            </p>
          </div>

          <div className="space-y-2.5 sm:space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-lg sm:rounded-2xl bg-[#121212] border border-white/10 overflow-hidden transition-colors hover:border-white/20"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-3 sm:p-4 md:p-5 text-left flex items-start sm:items-center justify-between gap-3 sm:gap-4 font-bold text-[12px] sm:text-xs md:text-sm lg:text-base text-white hover:text-[#C5FF4A] transition-colors"
                  >
                    <span className="leading-tight">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#C5FF4A] shrink-0 mt-0.5" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-3 sm:px-4 md:px-5 pb-4 sm:pb-5 text-[12px] sm:text-xs md:text-sm text-neutral-300 leading-relaxed border-t border-white/10 pt-3 sm:pt-3.5 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
