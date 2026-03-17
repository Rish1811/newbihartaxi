import { motion } from "framer-motion";

const LocationsSection = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Coverage</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Service Locations
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
          className="max-w-4xl mx-auto relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src="/images/locations.png"
            alt="Service Locations"
            className="relative w-full rounded-2xl shadow-card group-hover:shadow-card-hover transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
