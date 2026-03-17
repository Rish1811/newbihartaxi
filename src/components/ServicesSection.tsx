import { motion } from "framer-motion";
import { Shield, Headphones, BadgeCheck, Sparkles } from "lucide-react";

const features = [
  { icon: Shield, label: "Data Protection" },
  { icon: Headphones, label: "Customer Support" },
  { icon: BadgeCheck, label: "Quality Assurance" },
  { icon: Sparkles, label: "Awesome Services" },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Digital Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              A complete solution for your Taxi Service.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:border-border hover:bg-card/50 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center">
                    <f.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl" />
            <motion.img
              src="/images/service.png"
              alt="Digital Services"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
