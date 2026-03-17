import { motion } from "framer-motion";
import { Smartphone, Clock, CreditCard, Star } from "lucide-react";

const advantages = [
  {
    icon: Smartphone,
    title: "Tap a button, get a ride",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
  },
  {
    icon: Clock,
    title: "Always on, always available",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    icon: CreditCard,
    title: "Ride and Pay",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
  },
  {
    icon: Star,
    title: "You rate, we listen",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Advantage of using our Apps
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.2, 0, 0, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-glow shadow-card hover:shadow-card-hover transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex gap-4">
                <motion.div
                  whileHover={{ rotate: -10 }}
                  className="shrink-0 w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:glow-primary-sm transition-all duration-300"
                >
                  <item.icon size={22} className="text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
