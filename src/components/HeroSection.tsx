import { motion } from "framer-motion";
import { Play, Apple } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0, 0, 1] as [number, number, number, number] },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-background" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-3xl" />
      
      {/* Animated particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/50"
          style={{ left: `${10 + i * 12}%`, top: `${15 + (i % 4) * 20}%` }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
          >
            <motion.h1
              {...fadeInUp}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance"
            >
              It is a long established fact that a reader will be distracted by the{" "}
              <span className="text-gradient">readable content</span> of a page when looking at its layout!
            </motion.h1>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-10"
          >
            {/* User Apps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-primary mb-4">User Apps</h3>
              <div className="flex gap-3">
                {[{ icon: Play, label: "Play Store" }, { icon: Apple, label: "Apple Store" }].map((btn) => (
                  <motion.a
                    key={btn.label}
                    href="#"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-foreground font-medium text-sm transition-all hover:border-glow hover:shadow-card-hover"
                  >
                    <btn.icon size={16} /> {btn.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Driver Apps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-primary mb-4">Driver Apps</h3>
              <div className="flex gap-3">
                {[{ icon: Play, label: "Play Store" }, { icon: Apple, label: "Apple Store" }].map((btn) => (
                  <motion.a
                    key={btn.label}
                    href="#"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-foreground font-medium text-sm transition-all hover:border-glow hover:shadow-card-hover"
                  >
                    <btn.icon size={16} /> {btn.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
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
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
