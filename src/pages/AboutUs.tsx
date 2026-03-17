import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Target, Heart, Shield, Award, Clock, MapPin, Phone } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.2, 0, 0, 1] as [number, number, number, number] },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const values = [
  { icon: Shield, title: "Safety First", desc: "Your safety is our top priority. All drivers are verified and vehicles are regularly inspected." },
  { icon: Award, title: "Quality Service", desc: "We ensure premium quality rides with well-maintained vehicles and professional drivers." },
  { icon: Clock, title: "24/7 Availability", desc: "Our service runs round the clock. Whenever you need a ride, we're here for you." },
  { icon: MapPin, title: "Wide Coverage", desc: "We cover all major cities and towns across Bihar, ensuring connectivity everywhere." },
  { icon: Users, title: "Customer Focused", desc: "Every decision we make revolves around providing the best experience for our riders." },
  { icon: Phone, title: "Easy Booking", desc: "Book your ride in seconds through our app. Simple, fast, and reliable." },
];

const timeline = [
  { year: "2020", title: "Founded", desc: "BiharTaxi was born with a vision to revolutionize transportation in Bihar." },
  { year: "2021", title: "App Launch", desc: "Launched our mobile apps on both Play Store and Apple Store." },
  { year: "2022", title: "Expansion", desc: "Expanded services to 10+ cities across Bihar." },
  { year: "2023", title: "Growing Strong", desc: "Crossed 50,000+ rides and 5,000+ registered drivers." },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
          {/* Animated particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
              style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
              animate={{
                y: [0, -30, 0],
                x: [0, i % 2 === 0 ? 15 : -15, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
              className="w-20 h-20 rounded-2xl bg-primary/20 glow-primary-sm flex items-center justify-center mx-auto mb-8"
            >
              <Users size={36} className="text-primary" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              About <span className="text-gradient">BiharTaxi</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
              },
              {
                icon: Heart,
                title: "Our Vision",
                text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...stagger}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative group p-8 rounded-3xl bg-card border border-border hover:border-glow shadow-card hover:shadow-card-hover transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-6"
                  >
                    <item.icon size={28} className="text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Our Core Values</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-glow shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: -10 }}
                    className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:glow-primary-sm transition-all duration-300"
                  >
                    <v.icon size={22} className="text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">How We Got Here</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start gap-6 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                    <span className="text-sm font-bold text-primary">{item.year}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
                  className="hidden md:flex shrink-0 w-4 h-4 rounded-full bg-primary glow-primary-sm mt-8"
                />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary/15 via-card to-card border border-border overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-gradient-shift" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Ride with <span className="text-gradient">BiharTaxi</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Download our app and experience the best taxi service in Bihar.
              </p>
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold transition-all glow-primary-sm hover:glow-primary"
              >
                Go to Home
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
