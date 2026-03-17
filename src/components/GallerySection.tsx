import { motion } from "framer-motion";

const gallery = [
  {
    img: "/images/gallery-1.png",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots",
  },
  {
    img: "/images/gallery-2.jpg",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical",
  },
  {
    img: "/images/gallery-3.jpg",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text",
  },
];

const GallerySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Our Fleet</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.2, 0, 0, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover bg-card border border-border hover:border-glow transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
