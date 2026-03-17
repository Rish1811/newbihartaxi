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
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: [0.2, 0, 0, 1] }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
