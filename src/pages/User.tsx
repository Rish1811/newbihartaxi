import { motion } from "framer-motion";
import { Download, LogIn, Car, MapPin, Navigation, Star, CreditCard } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const featureCards = [
  {
    icon: Download,
    title: "Download",
    desc: "Download the app from Google Play or App Store on your smartphone.",
  },
  {
    icon: LogIn,
    title: "Sign In",
    desc: "It is a long established fact that a reader will be distracted by the readable.",
  },
  {
    icon: Car,
    title: "Ride",
    desc: "It is a long established fact that a reader will be distracted by the readable!",
  },
];

const steps = [
  { num: 1, label: "Get the App", icon: Download },
  { num: 2, label: "Signup to Ride", icon: LogIn },
  { num: 3, label: "Select Location", icon: MapPin },
  { num: 4, label: "Select Vehicle", icon: Car },
  { num: 5, label: "Ride", icon: Navigation },
  { num: 6, label: "Pay & Rating", icon: Star },
];

const howItWorksDetails = [
  {
    icon: Download,
    title: "Get the App",
    desc: "It is a long established fact that a reader will be distracted by the readable.",
  },
  {
    icon: LogIn,
    title: "Signup to Ride",
    desc: "It is a long established fact that a reader will be distracted by the readable.",
  },
  {
    icon: MapPin,
    title: "Select Location",
    desc: "It is a long established fact that a reader will be distracted by the readable.",
  },
  {
    icon: Car,
    title: "Select Vehicle",
    desc: "It is a long established fact that a reader will be distracted by the readable.",
  },
  {
    icon: Navigation,
    title: "Ride",
    desc: "It is a long established fact that a reader will be distracted by the readable!",
  },
  {
    icon: CreditCard,
    title: "Pay & Rating",
    desc: "It is a long established fact that a reader will be distracted by the readable!",
  },
];

const fadeUp = (i: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: i * 0.1, duration: 0.6, ease: [0.2, 0, 0, 1] as [number, number, number, number] },
});

const User = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{ left: `${12 + i * 15}%`, top: `${20 + (i % 3) * 20}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="text-gradient">USER</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 w-24 bg-primary mx-auto rounded-full"
          />
        </div>
      </section>

      {/* Be Your Own Ride */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 {...fadeUp()} className="text-3xl md:text-4xl font-bold mb-3">
            Be your own <span className="text-primary">ride</span>
          </motion.h2>
          <motion.p {...fadeUp(1)} className="text-muted-foreground max-w-2xl mx-auto mb-12">
            HOURS ARE It is a long established fact that a reader will be distracted by the readable WEEKDAYS, OR WEEKENDS.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {featureCards.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp(i)}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-8 border border-border/50 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeUp()} className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It <span className="text-primary">Works</span>
          </motion.h2>

          {/* Step indicators */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeUp(i)}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 glass rounded-full px-4 py-2 border border-border/50 cursor-default"
              >
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                  {step.num}
                </span>
                <span className="text-sm font-medium">{step.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Step detail cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {howItWorksDetails.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i)}
                whileHover={{ y: -6 }}
                className="glass rounded-xl p-6 border border-border/50 group relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary/60">Step {i + 1}</span>
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default User;
