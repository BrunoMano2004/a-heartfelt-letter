import { motion } from "framer-motion";
import LetterContent from "@/components/LetterContent";
import Polaroid from "@/components/Polaroid";
import MusicToggle from "@/components/MusicToggle";

import foto1 from "@/assets/foto-1.png";
import foto2 from "@/assets/foto-2.png";
import foto3 from "@/assets/foto-3.png";
import foto4 from "@/assets/foto-4.png";
import foto5 from "@/assets/foto-5.png";
import foto6 from "@/assets/foto-6.png";
import foto7 from "@/assets/foto-7.png";
import foto8 from "@/assets/foto-8.png";

const polaroidsLeft = [
  { src: foto1, alt: "No museu ✨", rotation: -4 },
  { src: foto3, alt: "Passeio de teleférico 🚡", rotation: 3 },
  { src: foto5, alt: "Mirante 🌙", rotation: -2 },
  { src: foto7, alt: "No templo 🏯", rotation: 4 },
];

const polaroidsRight = [
  { src: foto2, alt: "Explorando juntos 🏛️", rotation: 3 },
  { src: foto4, alt: "Vista incrível 🌅", rotation: -3 },
  { src: foto6, alt: "Na praia 🏖️", rotation: 2 },
  { src: foto8, alt: "No café ☕", rotation: -4 },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background py-8 md:py-16 px-4 overflow-x-hidden">
      {/* Music Toggle */}
      <MusicToggle />

      {/* Main layout with polaroids on sides */}
      <div className="flex justify-center gap-8 xl:gap-12 2xl:gap-16">
        {/* Desktop: Left Polaroids - scrolls with page */}
        <aside 
          className="hidden xl:flex flex-col gap-12 pt-24"
          aria-label="Fotos à esquerda"
        >
          {polaroidsLeft.map((photo, index) => (
            <Polaroid
              key={index}
              src={photo.src}
              alt={photo.alt}
              rotation={photo.rotation}
              delay={1 + index * 0.2}
              direction="left"
              className="w-44 2xl:w-52"
            />
          ))}
        </aside>

        {/* Center content */}
        <div className="relative">

        {/* Letter Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="letter-sheet max-w-2xl mx-auto px-6 py-10 md:px-12 md:py-16 lg:px-16 lg:py-20"
        >
          {/* Mobile: Top Polaroids */}
          <div className="xl:hidden grid grid-cols-2 gap-3 mb-10 -mt-2">
            {[polaroidsLeft[0], polaroidsRight[0]].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: photo.rotation - 5 }}
                animate={{ opacity: 1, scale: 1, rotate: photo.rotation }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                className="flex justify-center"
              >
                <Polaroid
                  src={photo.src}
                  alt={photo.alt}
                  rotation={photo.rotation}
                  delay={0}
                  direction="left"
                  className="w-32 sm:w-36"
                />
              </motion.div>
            ))}
          </div>

          {/* Letter Content */}
          <LetterContent />

          {/* Mobile: Middle Polaroids */}
          <div className="xl:hidden grid grid-cols-2 gap-3 my-10">
            {[polaroidsLeft[1], polaroidsRight[1]].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: photo.rotation + 5 }}
                animate={{ opacity: 1, scale: 1, rotate: photo.rotation }}
                transition={{ delay: 2 + index * 0.2, duration: 0.6 }}
                className="flex justify-center"
              >
                <Polaroid
                  src={photo.src}
                  alt={photo.alt}
                  rotation={photo.rotation}
                  delay={0}
                  direction="right"
                  className="w-32 sm:w-36"
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile: More Polaroids */}
          <div className="xl:hidden grid grid-cols-2 gap-3 my-10">
            {[polaroidsLeft[2], polaroidsRight[2]].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: photo.rotation - 3 }}
                animate={{ opacity: 1, scale: 1, rotate: photo.rotation }}
                transition={{ delay: 2.5 + index * 0.2, duration: 0.6 }}
                className="flex justify-center"
              >
                <Polaroid
                  src={photo.src}
                  alt={photo.alt}
                  rotation={photo.rotation}
                  delay={0}
                  direction="left"
                  className="w-32 sm:w-36"
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile: Bottom Polaroids */}
          <div className="xl:hidden grid grid-cols-2 gap-3 mt-10">
            {[polaroidsLeft[3], polaroidsRight[3]].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: photo.rotation + 3 }}
                animate={{ opacity: 1, scale: 1, rotate: photo.rotation }}
                transition={{ delay: 3 + index * 0.2, duration: 0.6 }}
                className="flex justify-center"
              >
                <Polaroid
                  src={photo.src}
                  alt={photo.alt}
                  rotation={photo.rotation}
                  delay={0}
                  direction="right"
                  className="w-32 sm:w-36"
                />
              </motion.div>
            ))}
          </div>
          </motion.div>
        </div>

        {/* Desktop: Right Polaroids - scrolls with page */}
        <aside 
          className="hidden xl:flex flex-col gap-12 pt-24"
          aria-label="Fotos à direita"
        >
          {polaroidsRight.map((photo, index) => (
            <Polaroid
              key={index}
              src={photo.src}
              alt={photo.alt}
              rotation={photo.rotation}
              delay={1.2 + index * 0.2}
              direction="right"
              className="w-44 2xl:w-52"
            />
          ))}
        </aside>
      </div>

      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ delay: 3, duration: 2 }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 3.5, duration: 2 }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
        />
      </div>
    </main>
  );
};

export default Index;
