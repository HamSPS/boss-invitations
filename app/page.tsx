"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Envelope from "./components/Envelope";
import RevealCard from "./components/RevealCard";

// ─────────────────────────────────────────────────────────────
//  EDIT ALL WEDDING DETAILS HERE
// ─────────────────────────────────────────────────────────────
const invitationData = {
  couple: {
    names: "Souksawat & Sengsouliphone",
    initials: "SS",
  },
  event: {
    title: "Save the Date",
    date: "20 NOV 2026",
    fullDate: "2026-11-20T00:00:00",
    venue: "Landmark Mekong Riverside Hotel",
  },
  message: {
    headline: "Formal invitation to follow",
    subline: "Formal invitation to follow, please click below to share your address...",
    cta: "SHARE YOUR ADDRESS",
    contactLabel: "For any inquiries, please contact us at:",
    contactPhone: "+66 81-234-5678",
    googleMapsLink: "https://maps.app.goo.gl/jA4kXsyFcRNXWMfTA",
    mapsEmbedUrl: "https://maps.google.com/maps?q=Landmark+Mekong+Riverside+Hotel&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  music: {
    src: "/song.mp3",
    volume: 0.6,
  },
  photos: {
    photo1: "/photos/couple-1.png",
    photo2: "/photos/couple-2.png",
  },
  florals: {
    lily: "/photos/lily.png",
    lily2: "/photos/lily-2.png",
    amaranthus: "/photos/amaranthus.png",
    rose: "/photos/rose-1.png",
    flower1: "/photos/flower-1.png",
    flower2: "/photos/flower-2.png",
  },
  stamps: {
    seal: "/photos/stamp.png",
  },
  envelopes: {
    closed: "/photos/evelope_close.png",
    open: "/photos/envelope_open.png",
    front: "/photos/evelope_fronted.png",
  },
};

function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const timeLeft = useCountdown(invitationData.event.fullDate);

  useEffect(() => {
    audioRef.current = new Audio(invitationData.music.src);
    audioRef.current.loop = true;
    audioRef.current.volume = invitationData.music.volume;
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (musicOn) {
      audioRef.current.play().catch(() => setMusicOn(false));
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  const handleOpen = () => {
    setIsOpen(true);
    setMusicOn(true);
  };

  const handleToggleMusic = () => {
    setMusicOn((prev) => !prev);
  };

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const timerBlocks = useMemo(
    () => [
      { value: timeLeft.days, label: "DAYS" },
      { value: timeLeft.hours, label: "HOURS" },
      { value: timeLeft.minutes, label: "MINUTES" },
      { value: timeLeft.seconds, label: "SECONDS" },
    ],
    [timeLeft]
  );

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-cream font-sans text-foreground">
      <AnimatePresence mode="wait">
        {!isOpen && (
          <Envelope
            key="envelope"
            names={invitationData.couple.names}
            envelopeImage={invitationData.envelopes.closed}
            lilyImage={invitationData.florals.lily}
            stampImage={invitationData.stamps.seal}
            onOpen={handleOpen}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative min-h-screen"
          >
            {/* Reveal / Hero section */}
            <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-12 pt-20">
              <RevealCard
                names={invitationData.couple.names}
                initials={invitationData.couple.initials}
                title={invitationData.event.title}
                date={invitationData.event.date}
                venue={invitationData.event.venue}
                isPlaying={musicOn}
                onToggleMusic={handleToggleMusic}
                envelopeImage={invitationData.envelopes.open}
                frontEnvelopeImage={invitationData.envelopes.front}
                stampImage={invitationData.stamps.seal}
                photo1={invitationData.photos.photo1}
                photo2={invitationData.photos.photo2}
                florals={invitationData.florals}
              />

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                onClick={scrollToDetails}
                className="mt-12 flex cursor-pointer flex-col items-center gap-2 font-serif text-xs uppercase tracking-[0.25em] text-foreground/60 transition-colors hover:text-foreground"
              >
                <span>Scroll for details</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </motion.button>
            </section>

            {/* Details section */}
            <section
              ref={detailsRef}
              className="mx-auto max-w-2xl px-6 py-24 text-center"
            >
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mb-2 font-script text-5xl text-foreground sm:text-6xl"
                >
                  {invitationData.message.headline}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="mb-8 font-serif text-xs uppercase tracking-[0.25em] text-foreground/70"
                >
                  The countdown is on!
                </motion.p>

                {/* Countdown */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="mb-12 grid grid-cols-4 gap-2 sm:gap-4"
                >
                  {timerBlocks.map(({ value, label }) => (
                    <div key={label} className="flex flex-col items-center">
                      <span className="font-serif text-3xl font-medium text-foreground sm:text-5xl">
                        {String(value).padStart(2, "0")}
                      </span>
                      <span className="mt-1 font-serif text-[10px] uppercase tracking-widest text-foreground/60 sm:text-xs">
                        {label}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="mx-auto max-w-sm font-serif text-base leading-relaxed text-foreground/80"
                >
                  {invitationData.message.subline}
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  onClick={() => alert("Address sharing form coming soon.")}
                  className="mt-8 inline-block cursor-pointer border-2 border-foreground px-8 py-3 font-serif text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:bg-foreground hover:text-cream"
                >
                  {invitationData.message.cta}
                </motion.button> */}
              </div>

              <div className="mt-20 flex flex-col items-center">
                <motion.h2
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  className="font-sloop text-6xl text-foreground sm:text-7xl"
                >
                  {invitationData.couple.names}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="mt-6 font-serif text-base leading-relaxed text-foreground/80"
                >
                  {invitationData.message.contactLabel}
                </motion.p>
                <motion.a
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  href={`tel:${invitationData.message.contactPhone}`}
                  className="mt-1 inline-block font-serif text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-burgundy text-xl"
                >
                  {invitationData.message.contactPhone}
                </motion.a>

                {invitationData.message.mapsEmbedUrl && (
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mt-8 w-full overflow-hidden rounded-2xl border border-cream-dark shadow-xl"
                  >
                    <iframe
                      src={invitationData.message.mapsEmbedUrl}
                      width="100%"
                      height="320"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Wedding venue location"
                      className="w-full"
                    />
                  </motion.div>
                )}

                {invitationData.message.googleMapsLink && (
                  <motion.a
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    href={invitationData.message.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-serif text-sm uppercase tracking-widest text-burgundy underline underline-offset-4 transition-colors hover:text-foreground"
                  >
                    Open in Google Maps App
                  </motion.a>
                )}
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
