"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FloralsConfig {
  lily: string;
  lily2: string;
  amaranthus: string;
  rose: string;
  flower1: string;
  flower2: string;
}

interface RevealCardProps {
  names: string;
  initials?: string;
  title: string;
  date: string;
  venue: string;
  isPlaying: boolean;
  onToggleMusic: () => void;
  envelopeImage: string;
  frontEnvelopeImage: string;
  stampImage: string;
  photo1: string;
  photo2: string;
  florals: FloralsConfig;
}

function TopFloralCluster({ florals }: { florals: FloralsConfig }) {
  return (
    <div className="pointer-events-none absolute -top-20 left-1/2 z-20 h-32 w-68 -translate-x-1/2 sm:-top-24 sm:h-40 sm:w-80">
      {/* Arching double burgundy calla lilies (lily.png) tucked behind garland */}
      <div className="absolute top-3 left-[43%] h-24 w-22 -rotate-12 drop-shadow-md sm:h-28 sm:w-26">
        <Image
          src={florals.lily}
          alt="Calla lilies"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 88px, 104px"
        />
      </div>

      {/* Single red calla lily on left (lily-2.png) tucked closer */}
      <div className="absolute top-8 left-8 h-18 w-9 -rotate-38 drop-shadow-md sm:left-10 sm:h-22 sm:w-11">
        <Image
          src={florals.lily2}
          alt="Calla lily left"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 36px, 44px"
        />
      </div>

      {/* Single red calla lily on right (lily-2.png) tucked closer */}
      <div className="absolute top-7 right-9 h-18 w-9 scale-x-[-1] rotate-32 drop-shadow-md sm:right-11 sm:h-22 sm:w-11">
        <Image
          src={florals.lily2}
          alt="Calla lily right"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 36px, 44px"
        />
      </div>

      {/* Base greenery & white flower garland (flower-1) */}
      <div className="absolute bottom-2 left-1/2 h-22 w-56 -translate-x-1/2 opacity-95 drop-shadow-md sm:h-26 sm:w-68">
        <Image
          src={florals.flower1}
          alt="Floral base arrangement"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 224px, 272px"
        />
      </div>

      {/* Main top-left burgundy rose lowered onto the garland */}
      <div className="absolute bottom-9 left-15 h-14 w-14 -rotate-12 drop-shadow-lg sm:bottom-11 sm:left-19 sm:h-17 sm:w-17">
        <Image
          src={florals.rose}
          alt="Burgundy rose"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 56px, 68px"
        />
      </div>

      {/* Center burgundy rose */}
      <div className="absolute bottom-5 left-[38%] h-13 w-13 rotate-12 drop-shadow-lg sm:h-15 sm:w-15">
        <Image
          src={florals.rose}
          alt="Burgundy rose center"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 52px, 60px"
        />
      </div>

      {/* Right-center burgundy rose */}
      <div className="absolute bottom-4 right-15 h-13 w-13 -rotate-6 drop-shadow-lg sm:right-18 sm:h-15 sm:w-15">
        <Image
          src={florals.rose}
          alt="Burgundy rose right-center"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 52px, 60px"
        />
      </div>

      {/* Far-right burgundy rose */}
      <div className="absolute bottom-3 right-4 h-12 w-12 rotate-25 drop-shadow-lg sm:right-5 sm:h-14 sm:w-14">
        <Image
          src={florals.rose}
          alt="Burgundy rose far-right"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 48px, 56px"
        />
      </div>

      {/* Far-left lower burgundy rose */}
      <div className="absolute bottom-2 left-5 h-12 w-12 -rotate-25 drop-shadow-lg sm:left-6 sm:h-14 sm:w-14">
        <Image
          src={florals.rose}
          alt="Burgundy rose far-left"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 48px, 56px"
        />
      </div>
    </div>
  );
}

function VinylRecord({
  isPlaying,
  initials,
  onClick,
}: {
  isPlaying: boolean;
  initials: string;
  onClick: () => void;
}) {
  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={onClick}
        className="group relative flex cursor-pointer items-center justify-center focus:outline-none"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{
            repeat: isPlaying ? Infinity : 0,
            duration: 5,
            ease: "linear",
          }}
          className="relative flex h-26 w-26 items-center justify-center rounded-full bg-neutral-950 shadow-2xl ring-2 ring-black/80 sm:h-32 sm:w-32"
        >
          {/* Vinyl grooves */}
          <div className="absolute inset-1.5 rounded-full border border-white/15" />
          <div className="absolute inset-3 rounded-full border border-white/10" />
          {/* Inner burgundy label */}
          <div className="relative flex h-18 w-18 items-center justify-center rounded-full border border-rose/40 bg-[#9E2A5B] shadow-inner sm:h-22 sm:w-22">
            <div className="absolute inset-1 rounded-full border border-cream/30" />
            {/* Initials in background of label */}
            <span className="pointer-events-none select-none font-sloop text-3xl text-cream/85 sm:text-4xl">
              {initials}
            </span>
            {/* Center spindle & play/pause icon */}
            <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-neutral-800/90 shadow-md sm:h-7 sm:w-7">
              {isPlaying ? (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#FAF8F3">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#FAF8F3"
                  className="ml-0.5"
                >
                  <polygon points="6 4 20 12 6 20 6 4" />
                </svg>
              )}
            </div>
          </div>
        </motion.div>
      </button>

      {/* Curved "TAP TO PLAY" text along bottom arc */}
      <svg
        viewBox="0 0 160 55"
        className="pointer-events-none -mt-5 h-12 w-36 overflow-visible sm:-mt-6 sm:h-14 sm:w-40"
      >
        <defs>
          <path id="tapToPlayArc" d="M 18,8 A 65,65 0 0,0 142,8" />
        </defs>
        <text
          fill="#FAF8F3"
          fontSize="10.5"
          letterSpacing="2.5"
          className="font-serif uppercase drop-shadow"
        >
          <textPath
            href="#tapToPlayArc"
            startOffset="50%"
            textAnchor="middle"
          >
            TAP TO PLAY
          </textPath>
        </text>
      </svg>
    </div>
  );
}

export default function RevealCard({
  names,
  initials: propInitials,
  title,
  date,
  venue,
  isPlaying,
  onToggleMusic,
  envelopeImage,
  frontEnvelopeImage,
  stampImage,
  photo1,
  photo2,
  florals,
}: RevealCardProps) {
  const derivedInitials =
    propInitials ||
    names
      .split(/[&\s]+/)
      .map((n) => n.charAt(0).toUpperCase())
      .filter(Boolean)
      .slice(0, 2)
      .join("") ||
    "SS";

  // Split title into two lines like "Save our" / "Date" in reference
  const words = title.trim().split(/\s+/);
  const titleLine1 =
    words.length > 1 ? words.slice(0, -1).join(" ") : "Save our";
  const titleLine2 = words.length > 1 ? words[words.length - 1] : title;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative mx-auto w-85 sm:w-110 lg:w-130"
    >
      <div className="relative h-145 w-full sm:h-175 lg:h-190">
        {/* Hanging green amaranthus left & right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.4, ease: "easeOut" }}
          className="pointer-events-none absolute top-[35%] -left-4 z-25 h-56 w-16 -rotate-6 drop-shadow-lg sm:-left-6 sm:h-68 sm:w-20"
        >
          <Image
            src={florals.amaranthus}
            alt="Hanging amaranthus left"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 64px, 80px"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45, ease: "easeOut" }}
          className="pointer-events-none absolute top-[31%] -right-4 z-25 h-60 w-16 scale-x-[-1] rotate-6 drop-shadow-lg sm:-right-6 sm:h-72 sm:w-20"
        >
          <Image
            src={florals.amaranthus}
            alt="Hanging amaranthus right"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 64px, 80px"
          />
        </motion.div>

        {/* 1. Open envelope at back (z-0) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="absolute bottom-[4%] left-1/2 z-0 w-[94%] -translate-x-1/2 -rotate-3"
        >
          <Image
            src={envelopeImage}
            alt="Open envelope"
            width={886}
            height={1123}
            className="h-auto w-full drop-shadow-xl"
            priority
          />
        </motion.div>

        {/* 2. Left Stacked Polaroid Photos (z-10) */}
        {/* Top Polaroid */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="absolute top-[6%] left-[5%] z-10 w-[44%] -rotate-6 rounded-xs bg-white p-2 pb-6 shadow-xl sm:p-2.5 sm:pb-8"
        >
          <div className="relative aspect-square w-full overflow-hidden bg-cream-dark">
            <Image
              src={photo1}
              alt="Couple photo 1"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 160px, 220px"
            />
          </div>
        </motion.div>

        {/* Real rose tucked between polaroids */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="pointer-events-none absolute top-[26%] left-[7%] z-15 h-15 w-15 -rotate-12 drop-shadow-lg sm:h-18 sm:w-18"
        >
          <Image
            src={florals.rose}
            alt="Rose accent"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 60px, 72px"
          />
        </motion.div>

        {/* Bottom Polaroid */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="absolute top-[30%] left-[4%] z-12 w-[45%] -rotate-3 rounded-xs bg-white p-2 pb-7 shadow-xl sm:p-2.5 sm:pb-9"
        >
          <div className="relative aspect-square w-full overflow-hidden bg-cream-dark">
            <Image
              src={photo2}
              alt="Couple photo 2"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 160px, 220px"
            />
          </div>
        </motion.div>

        {/* Soft floral cluster tucked inside envelope pocket */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="pointer-events-none absolute bottom-[30%] left-[36%] z-24 h-20 w-40 rotate-6 opacity-95 drop-shadow-sm sm:h-24 sm:w-48"
        >
          <Image
            src={florals.flower2}
            alt="Pocket floral cluster"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 160px, 192px"
          />
        </motion.div>

        {/* 3. Right-Center Scalloped Invitation Card (z-20) */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="absolute top-[16%] right-[3%] z-20 w-[62%] rotate-6 sm:top-[15%] sm:right-[4%]"
        >
          <TopFloralCluster florals={florals} />

          {/* Scalloped SVG Card Frame */}
          <div className="relative aspect-4/5 w-full drop-shadow-2xl">
            <svg
              viewBox="0 0 320 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-full w-full"
            >
              {/* Outer scalloped shape */}
              <path
                d="M 95,18
                   Q 160,6 225,18
                   Q 265,24 272,62
                   Q 276,88 296,112
                   Q 314,136 298,172
                   Q 284,200 298,232
                   Q 312,265 288,292
                   Q 268,314 264,344
                   Q 258,380 220,384
                   Q 160,392 100,384
                   Q 62,380 56,344
                   Q 52,314 32,292
                   Q 8,265 22,232
                   Q 36,200 22,172
                   Q 6,136 24,112
                   Q 44,88 48,62
                   Q 55,24 95,18 Z"
                fill="#FAF8F3"
                stroke="#8B7368"
                strokeWidth="3"
              />
              {/* Inner scalloped outline */}
              <path
                d="M 98,26
                   Q 160,15 222,26
                   Q 257,32 263,66
                   Q 267,90 286,114
                   Q 302,136 288,170
                   Q 275,200 288,230
                   Q 301,262 279,286
                   Q 260,308 256,338
                   Q 251,370 216,374
                   Q 160,382 104,374
                   Q 69,370 64,338
                   Q 60,308 41,286
                   Q 19,262 32,230
                   Q 45,200 32,170
                   Q 18,136 34,114
                   Q 53,90 57,66
                   Q 63,32 98,26 Z"
                fill="none"
                stroke="#B8A398"
                strokeWidth="1.2"
              />
            </svg>

            {/* Card Content */}
            <div className="relative z-10 flex h-full flex-col items-center px-6 pt-6 pb-10 text-center sm:px-8 sm:pt-8">
              {/* Top-center Wax Seal Stamp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
                className="relative h-13 w-13 sm:h-16 sm:w-16"
              >
                <Image
                  src={stampImage}
                  alt="Wax seal"
                  fill
                  className="object-contain drop-shadow-md"
                  sizes="(max-width: 640px) 52px, 64px"
                />
              </motion.div>

              {/* Calligraphic Script Title */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
                className="mt-2 -rotate-3 text-center leading-none text-foreground sm:mt-3"
              >
                <p className="font-sloop text-5xl sm:text-6xl lg:text-7xl">
                  {titleLine1}
                </p>
                <p className="-mt-2 font-sloop text-5xl sm:text-6xl lg:text-7xl">
                  {titleLine2}
                </p>
              </motion.div>

              {/* Date and Venue */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
                className="mt-3 font-serif text-[8px] uppercase leading-relaxed tracking-[0.22em] text-foreground/85 sm:mt-4 sm:text-[10px]"
              >
                <p className="font-semibold">{date}</p>
                <p className="mx-auto mt-0.5 max-w-36">{venue}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* 4. Front envelope pocket overlay (z-30) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="pointer-events-none absolute bottom-[4%] left-1/2 z-30 w-[94%] -translate-x-1/2 -rotate-3"
        >
          <Image
            src={frontEnvelopeImage}
            alt="Envelope front"
            width={886}
            height={666}
            className="h-auto w-full drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* 5. Vinyl Record Player on front envelope flap (z-40) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
          className="absolute bottom-[16%] left-[20%] z-40 sm:bottom-[17%] sm:left-[22%]"
        >
          <VinylRecord
            isPlaying={isPlaying}
            initials={derivedInitials}
            onClick={onToggleMusic}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
