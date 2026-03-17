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
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Drive with <span className="text-primary">Restart!</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tabs.map((tab, i) => (
            <motion.div
              key={tab.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.2, 0, 0, 1] }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <tab.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{tab.title}</h3>
              <p className="text-sm text-background/70 leading-relaxed">{tab.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDriveSection;
