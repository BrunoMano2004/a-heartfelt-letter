import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Lo-fi ambient music - royalty free
    audioRef.current = new Audio(
      "https://cdn.pixabay.com/audio/2024/11/01/audio_4956b5a51e.mp3"
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    audioRef.current.addEventListener('canplaythrough', () => {
      setIsLoaded(true);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      onClick={toggleMusic}
      className="music-toggle font-serif text-sm"
      aria-label={isPlaying ? "Desativar música" : "Ativar música"}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.span
            key="playing"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2"
          >
            <Volume2 className="w-4 h-4 text-primary animate-pulse-soft" />
            <span className="text-muted-foreground">Tocando...</span>
          </motion.span>
        ) : (
          <motion.span
            key="paused"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-2"
          >
            <VolumeX className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              {isLoaded ? "🎵 Ativar música" : "Carregando..."}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default MusicToggle;
