import { motion } from "framer-motion";

interface PolaroidProps {
  src: string;
  alt: string;
  rotation?: number;
  className?: string;
  delay?: number;
  direction?: "left" | "right";
}

const Polaroid = ({ 
  src, 
  alt, 
  rotation = 0, 
  className = "", 
  delay = 0,
  direction = "left"
}: PolaroidProps) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: direction === "left" ? -40 : 40,
        rotate: direction === "left" ? rotation - 10 : rotation + 10
      }}
      animate={{ 
        opacity: 1, 
        x: 0,
        rotate: rotation
      }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 0,
        zIndex: 10,
        transition: { duration: 0.3 }
      }}
      className={`polaroid cursor-pointer ${className}`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="relative overflow-hidden rounded-sm">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover aspect-square"
          loading="lazy"
        />
      </div>
      <p className="mt-2 text-center text-xs text-muted-foreground font-handwritten">
        {alt}
      </p>
    </motion.div>
  );
};

export default Polaroid;
