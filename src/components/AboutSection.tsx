import { motion } from "framer-motion";
import { Users, Sparkles, Headphones, BadgeCheck } from "lucide-react";

const stats = [
  { icon: Users, label: "Dedicated Team Members" },
  { icon: Sparkles, label: "Awesome Services" },
  { icon: Headphones, label: "Customer Support" },
  { icon: BadgeCheck, label: "Quality Assurance" },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl" />
            <img
              src="/images/company.png"
              alt="The Company"
              className="relative w-full rounded-2xl"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary glow-primary-sm"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              The Company
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-3 p-4 rounded-2xl shadow-card bg-card border border-border hover:border-glow hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                    <s.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
