import { motion } from "framer-motion";
import { Info, Target, Heart } from "lucide-react";

const tabs = [
  {
    icon: Info,
    title: "About Us",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,",
  },
  {
    icon: Target,
    title: "Our Mission",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney",
  },
  {
    icon: Heart,
    title: "Driver Commitment",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
  },
];

const WhyDriveSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-card via-background to-card">
      {/* Animated background orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-60 h-60 bg-primary/3 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Why Drive with <span className="text-gradient">Restart!</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tabs.map((tab, i) => (
            <motion.div
              key={tab.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.2, 0, 0, 1] }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-glow shadow-card hover:shadow-card-hover transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4"
                >
                  <tab.icon size={22} className="text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{tab.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tab.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDriveSection;
