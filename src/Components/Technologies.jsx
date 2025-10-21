import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss, SiMysql, SiLaravel, SiBootstrap } from "react-icons/si";
import { TbBrandPhp } from "react-icons/tb";
// import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const iconmotion = (duration) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border border-neutral-800 pb-24">
      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Compétences principales
      </motion.h3>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        <motion.div
          variants={iconmotion(0.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <div className="mt-2 text-center text-lg font-semibold">React.js</div>
        </motion.div>
        <motion.div
          variants={iconmotion(0.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiLaravel className="text-7xl text-[#F53003]" />
          <div className="mt-2 text-center text-lg font-semibold">Laravel</div>
        </motion.div>
        <motion.div
          variants={iconmotion(0.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiBootstrap className="text-7xl text-[#8011F5]" />
          <div className="mt-2 text-center text-lg font-semibold">
            Bootstrap
          </div>
        </motion.div>
        <motion.div
          variants={iconmotion(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-[#38BDF8]" />
          <div className="mt-2 text-center text-lg font-semibold">
            Tailwind
          </div>
        </motion.div>
        <motion.div
          variants={iconmotion(1.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandPhp className="text-7xl text-[#3578B6]" />
          <div className="mt-2 text-center text-lg font-semibold">PHP</div>
        </motion.div>
        <motion.div
          variants={iconmotion(1.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-[#0875a4]" />
          <div className="mt-2 text-center text-lg font-semibold">MySQL</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
