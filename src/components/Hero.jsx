import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, Ideas in Mind?{" "}
            <span className="text-[#915EFF]">Let’s Make Them Real! 💡</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            We guide students and startups to bring ideas to life
            <br />
            websites, web apps, and UI/UX designs{" "}
            <br className="sm:block hidden" />
            All on a budget-friendly plan.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="absolute inset-0 flex justify-end items-center">
        <div className="w-full h-full md:w-1/3">
          <ComputersCanvas />
        </div>
      </div>

      <div className="absolute xs:bottom-5 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
