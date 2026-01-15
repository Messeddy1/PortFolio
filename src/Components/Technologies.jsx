import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
// import { RiReactjsLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { TECHNOLOGIES } from "../constants";

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
const getIconComponent = (iconName) => {
  if (iconName.startsWith("Ri")) return RiIcons[iconName];
  if (iconName.startsWith("Si")) return SiIcons[iconName];
  if (iconName.startsWith("Tb")) return TbIcons[iconName];
  return null;
};
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
{TECHNOLOGIES.map((tech) => {
  const Icon = getIconComponent(tech.icon);

  return (
    <motion.div
      key={tech.name}
      variants={iconmotion(tech.variants)}
      initial="initial"
      animate="animate"
      className="rounded-2xl flex flex-col justify-center items-center  border-4 border-neutral-800 p-4"
    >
      {Icon && (
        <Icon
          className="text-7xl"
          style={{ color: tech.color }}
        />
      )}

      <div className="mt-2 text-center text-lg font-semibold">
        {tech.name}
      </div>
    </motion.div>
  );
})}
      </motion.div>
    </div>
  );
};

export default Technologies;
