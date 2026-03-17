import { motion } from "framer-motion";
import { Play, Apple } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.2, 0, 0, 1] },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/60 via-background to-background" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance"
          >
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout!
          </motion.h1>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-10"
          >
            {/* User Apps */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">User Apps</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background font-medium text-sm transition-all hover:scale-105 active:scale-95"
                >
                  <Play size={16} /> Play Store
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background font-medium text-sm transition-all hover:scale-105 active:scale-95"
                >
                  <Apple size={16} /> Apple Store
                </a>
              </div>
            </div>

            {/* Driver Apps */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Driver Apps</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background font-medium text-sm transition-all hover:scale-105 active:scale-95"
                >
                  <Play size={16} /> Play Store
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background font-medium text-sm transition-all hover:scale-105 active:scale-95"
                >
                  <Apple size={16} /> Apple Store
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
