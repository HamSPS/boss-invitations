"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface EnvelopeProps {
  names: string;
  envelopeImage: string;
  lilyImage: string;
  stampImage: string;
  onOpen: () => void;
}

export default function Envelope({
  names = "",
  envelopeImage,
  lilyImage,
  stampImage,
  onOpen,
}: EnvelopeProps) {
  const displayNames = names || "A & B";

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream px-4"
    >
      <div className="relative flex w-full max-w-lg flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-serif text-base uppercase tracking-[0.35em] text-foreground/80 sm:text-lg"
        >
          You have mail from
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-4 max-w-full wrap-break-word font-sloop text-3xl leading-none text-foreground sm:text-5xl lg:text-7xl"
        >
          {displayNames}
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45, ease: "easeOut" }}
          onClick={onOpen}
          className="group relative mt-12 cursor-pointer focus:outline-none"
          aria-label="Open invitation"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <div className="relative w-85 sm:w-110 lg:w-130">
              <Image
                src={envelopeImage}
                alt="Wedding envelope"
                width={1040}
                height={780}
                className="h-auto w-full drop-shadow-2xl"
                priority
              />
              {/* Stamp overlay */}
              <div className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 sm:h-24 sm:w-24">
                <Image
                  src={stampImage}
                  alt="Wax seal stamp"
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="(max-width: 640px) 80px, 96px"
                  loading="eager"
                />
              </div>
            </div>

            {/* Calla lily image accent */}
            <div className="pointer-events-none absolute -right-8 -bottom-10 h-40 w-32 drop-shadow-lg sm:-right-8 sm:-bottom-14 sm:h-52 sm:w-40">
              <Image
                src={lilyImage}
                alt="Calla lily"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 128px, 160px"
                loading="eager"
              />
            </div>
          </motion.div>
        </motion.button>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
          className="mt-12 font-serif text-sm uppercase tracking-[0.3em] text-foreground/70 sm:text-base"
        >
          Click envelope to open
        </motion.p>
      </div>
    </motion.div>
  );
}
