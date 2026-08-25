import React from "react";
import logo from "../assets/logo.png";
import { APP_IMAGES } from "../data/packagesData";
import { AnimatedTrustStats } from "../components/AnimatedTrustStats";
import { Testimonials } from "../components/Testimonials";
import {
  ShieldCheck,
  Award,
  HeartHandshake,
  Users,
  Sparkles,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { ShimmerImage } from "../components/ShimmerImage";

interface AboutViewProps {
  onOpenPlanner: () => void;
  onOpenContact: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onOpenPlanner,
  onOpenContact,
}) => {
  const values = [
    {
      title: "Spiritual Sacred Integrity",
      desc: "We treat every pilgrim as a guest of Allah (Duyuf al-Rahman), ensuring complete adherence to Sunnah and honesty in all dealings.",
    },
    {
      title: "Precision Attention to Detail",
      desc: "From airport fast-track reception to direct elevator access into the Haram, we eliminate logistical friction so your heart remains focused.",
    },
    {
      title: "Transparent Pricing & Ethics",
      desc: "Zero hidden charges. Guaranteed confirmed hotel vouchers, transparent room categories, and verified flight itineraries.",
    },
    {
      title: "Continuous 24/7 On-Ground Support",
      desc: "Multilingual field coordinators stationed permanently in Makkah and Madinah to assist with medical, logistics, and Nusuk permit needs.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 text-[#E0E0E0]"
      id="about-view"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.3em] bg-[#141414] text-[#C5FF4A] border border-white/15">
            <span className="w-2 h-2 rounded-full bg-[#C5FF4A] shadow-[0_0_8px_#C5FF4A]"></span>
            ABOUT SAFAR-E-JAHAN
          </div>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            Spiritual Journeys Redefined
          </h1>
          <p className="font-urdu text-3xl text-neutral-300 font-normal">
            آؤ سفر کریں جہاں کا
          </p>
          <p className="text-sm sm:text-base font-editorial-serif italic text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            Founded with a solemn mission: to provide the highest echelon of
            hospitality, precision planning, and tranquility for the sacred
            pilgrimages of Umrah and Hajj.
          </p>
        </div>

        {/* Animated Trust Stats Bar */}
        <div className="rounded-3xl overflow-hidden border border-white/10">
          <AnimatedTrustStats />
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5FF4A] font-bold">
              THE PHILOSOPHY
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-black text-white uppercase leading-tight">
              Serving the Guests of the Almighty with Reverence
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              At Safar-E-Jahan Travel and Tours, we recognize that a pilgrimage
              to the Holy Sanctuaries of Makkah al-Mukarramah and Madinah
              al-Munawwarah is not a conventional vacation—it is the culmination
              of years of longing, prayer, and devotion.
            </p>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Our team combines deep spiritual sensitivity with rigorous modern
              operational logistics. With direct accreditations from the
              Ministry of Hajj and Umrah (KSA), IATA certification, and premier
              hospitality partnerships, we ensure every moment of your
              pilgrimage is seamless and serene.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#121212] h-[380px]">
              <ShimmerImage
                src={APP_IMAGES.madinahLobby}
                alt="Luxury Hospitality in Madinah"
                containerClassName="w-full h-full"
                className="w-full h-full object-cover filter brightness-90"
              />
            </div>
          </div>
        </div>

        {/* Our Pillars / Values */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5FF4A] font-bold mb-2">
              FOUNDATIONAL PILLARS
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-black text-white uppercase">
              Our Guiding Principles
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-editorial-serif italic mt-1">
              Built on trust, honor, and uncompromising excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl bg-[#121212] border border-white/10 space-y-4 hover:border-[#C5FF4A]/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#1C1C1C] border border-[#C5FF4A]/40 text-[#C5FF4A] flex items-center justify-center font-mono font-bold text-xs">
                  0{i + 1}
                </div>
                <h3 className="font-serif-heading text-lg font-bold text-white">
                  {v.title}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Component */}
        <div className="rounded-3xl overflow-hidden border border-white/10">
          <Testimonials onOpenContact={onOpenContact} />
        </div>

        {/* CTA */}
        <div className="p-10 rounded-3xl bg-[#121212] border border-white/10 text-center space-y-5 shadow-2xl">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5FF4A] font-bold">
            START YOUR SACRED JOURNEY
          </div>
          <h3 className="font-serif-heading text-2xl sm:text-4xl font-black text-white uppercase">
            Let Us Craft Your Pilgrimage Experience
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto font-editorial-serif italic">
            Speak directly with our dedicated travel counselors to design an
            itinerary tailored to your dates and family preferences.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={onOpenPlanner}
              className="px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest bg-white text-black hover:bg-[#C5FF4A] hover:text-black shadow-2xl transition-all transform hover:scale-105 active:scale-95"
            >
              Plan Your Journey
            </button>
            <button
              onClick={onOpenContact}
              className="px-7 py-4 rounded-full font-mono font-bold text-xs bg-[#1C1C1C] text-white border border-white/20 hover:border-[#C5FF4A] transition-all"
            >
              Call 0345-8050124
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
