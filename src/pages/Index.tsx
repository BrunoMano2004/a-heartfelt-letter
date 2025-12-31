import { motion } from "framer-motion";
import LetterContent from "@/components/LetterContent";
import Polaroid from "@/components/Polaroid";
import MusicToggle from "@/components/MusicToggle";

import polaroid1 from "@/assets/polaroid-1.jpg";
import polaroid2 from "@/assets/polaroid-2.jpg";
import polaroid3 from "@/assets/polaroid-3.jpg";
import polaroid4 from "@/assets/polaroid-4.jpg";

const polaroids = [
  { src: polaroid1, alt: "No restaurante ✨", rotation: -4 },
  { src: polaroid2, alt: "Sorvete! 🍦", rotation: 3 },
  { src: polaroid3, alt: "Nossa viagem 🌅", rotation: -2 },
  { src: polaroid4, alt: "Maratona de série 📺", rotation: 5 },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background py-8 md:py-16 px-4 overflow-x-hidden">
      {/* Music Toggle */}
      <MusicToggle />

      {/* Main container with polaroids on sides */}
      <div className="max-w-7xl mx-auto relative">
        {/* Desktop: Left Polaroids */}
        <aside 
          className="hidden lg:flex flex-col gap-6 fixed left-8 xl:left-16 top-1/2 -translate-y-1/2 z-10"
          aria-label="Fotos à esquerda"
        >
          {polaroids.slice(0, 2).map((photo, index) => (
            <Polaroid
              key={index}
              src={photo.src}
              alt={photo.alt}
              rotation={photo.rotation}
              delay={1 + index * 0.3}
              direction="left"
              className="w-32 xl:w-40"
            />
          ))}
        </aside>

        {/* Desktop: Right Polaroids */}
        <aside 
          className="hidden lg:flex flex-col gap-6 fixed right-8 xl:right-16 top-1/2 -translate-y-1/2 z-10"
          aria-label="Fotos à direita"
        >
          {polaroids.slice(2, 4).map((photo, index) => (
            <Polaroid
              key={index}
              src={photo.src}
              alt={photo.alt}
              rotation={photo.rotation}
              delay={1.2 + index * 0.3}
              direction="right"
              className="w-32 xl:w-40"
            />
          ))}
        </aside>

        {/* Letter Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="letter-sheet max-w-2xl mx-auto px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20"
        >
          {/* Mobile: Top Polaroids */}
          <div className="lg:hidden flex justify-center gap-4 mb-10 -mt-4">
            {polaroids.slice(0, 2).map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: photo.rotation - 5 }}
                animate={{ opacity: 1, scale: 1, rotate: photo.rotation }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              >
                <Polaroid
                  src={photo.src}
                  alt={photo.alt}
                  rotation={photo.rotation}
                  delay={0}
                  direction="left"
                  className="w-28 sm:w-32"
                />
              </motion.div>
            ))}
          </div>

          {/* Letter Content */}
          <LetterContent />

          {/* Mobile: Bottom Polaroids */}
          <div className="lg:hidden flex justify-center gap-4 mt-12">
            {polaroids.slice(2, 4).map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: photo.rotation + 5 }}
                animate={{ opacity: 1, scale: 1, rotate: photo.rotation }}
                transition={{ delay: 2 + index * 0.2, duration: 0.6 }}
              >
                <Polaroid
                  src={photo.src}
                  alt={photo.alt}
                  rotation={photo.rotation}
                  delay={0}
                  direction="right"
                  className="w-28 sm:w-32"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 3, duration: 2 }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 3.5, duration: 2 }}
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
        />
      </div>
    </main>
  );
};

export default Index;
