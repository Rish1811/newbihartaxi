import { motion } from "framer-motion";
import { Download, Upload, Car, CheckCircle, Smartphone, FileText, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  { num: 1, label: "Get the App" },
  { num: 2, label: "Apply to drive" },
  { num: 3, label: "Get Approved" },
  { num: 4, label: "Open App" },
  { num: 5, label: "Accept" },
  { num: 6, label: "Pickup" },
  { num: 7, label: "Drop off" },
];

const howItWorksDetails = [
  {
    title: "Get the App from Google Play",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
  },
  {
    title: "You can apply to drive through the App",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
  },
  {
    title: "After approval you're ready to hit the road and start earning.",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
  },
  {
    title: "Open the app and switch to driver mode",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
  },
  {
    title: "Accept the ride request.",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
  },
  {
    title: "Pick up the rider at pickup location",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
  },
  {
    title: "Drop off the rider at their destination.",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
  },
];

const featureCards = [
  {
    icon: Download,
    title: "Download",
    desc: "Download the app from Google Play or App Store on your smartphone.",
  },
  {
    icon: Upload,
    title: "Upload",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
  },
  {
    icon: Car,
    title: "Drive",
    desc: "Drive and earn as much. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots a trip plus tips.",
  },
];

const requirements = [
  "You must have a valid driver's license.",
  "You must pass our background check.",
  "You consent to our driver screening and background check.",
  "You must own an iPhone or Android smartphone to download and run the app.",
];

const vehicleReqs = [
  "2008 or newer model car",
  "4-door vehicle in good condition",
  "Valid vehicle registration",
  "Vehicle insurance up to date",
];

const documentReqs = [
  "Driver profile photo",
  "Vehicle registration",
  "Vehicle inspection",
  "Vehicle insurance",
];

const fadeUp = (i: number = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: i * 0.1, duration: 0.6, ease: [0.2, 0, 0, 1] as [number, number, number, number] },
});

const Driver = () => {
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
            style={{ left: `${10 + i * 16}%`, top: `${15 + (i % 3) * 25}%` }}
            animate={{ y: [0, -25, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="text-gradient">DRIVER</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 w-24 bg-primary mx-auto rounded-full"
          />
        </div>
      </section>

      {/* Be Your Own Boss */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 {...fadeUp()} className="text-3xl md:text-4xl font-bold mb-3">
            Be your own <span className="text-primary">boss</span>
          </motion.h2>
          <motion.p {...fadeUp(1)} className="text-muted-foreground max-w-2xl mx-auto mb-12">
            HOURS ARE flexible. Drive whenever you want — weekdays or weekends.
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

      {/* How It Works - Steps */}
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

          {/* Step details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {howItWorksDetails.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i)}
                whileHover={{ y: -6 }}
                className="glass rounded-xl p-6 border border-border/50 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold">{i + 1}</span>
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Driver Requirements */}
            <motion.div {...fadeUp()} className="glass rounded-2xl p-8 border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Requirements for Drive</h3>
                  <p className="text-muted-foreground text-sm">What you will need to apply with us</p>
                </div>
              </div>
              <ul className="space-y-4">
                {requirements.map((req, i) => (
                  <motion.li
                    key={i}
                    {...fadeUp(i)}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Vehicle Requirements */}
            <motion.div {...fadeUp(1)} className="glass rounded-2xl p-8 border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Car className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Vehicle Requirements</h3>
              </div>
              <ul className="space-y-4">
                {vehicleReqs.map((req, i) => (
                  <motion.li
                    key={i}
                    {...fadeUp(i)}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Document Requirements */}
          <motion.div {...fadeUp()} className="max-w-5xl mx-auto mt-8">
            <div className="glass rounded-2xl p-8 border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Document Requirements</h3>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {documentReqs.map((doc, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp(i)}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="rounded-xl bg-secondary/50 p-4 text-center border border-border/30"
                  >
                    <Smartphone className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium">{doc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Driver;
