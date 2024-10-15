import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb,SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import {motion} from "framer-motion"

const iconmotion =(duration)=> ({
  initial:{
    y:-10
  },
  animate:{
    y:[10,-10],
    transition:{
      duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
})
const Technologies = () => {
  return (
    <div className="border border-neutral-800 pb-24">
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity: 0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
      whileInView={{opacity: 1,x:0}}
      initial={{opacity: 0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap justify-center items-center gap-4">
      <motion.div
      variants={iconmotion(2.2)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
      <SiMongodb className="text-7xl text-green-500" />
      </motion.div>
      <motion.div
      variants={iconmotion(2)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiExpress className="text-7xl text-[#333333]" />
      </motion.div>
      <motion.div
      variants={iconmotion(1.4)}
      initial="initial"
      animate="animate"
       className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400" />
      </motion.div>
      <motion.div 
      variants={iconmotion(1)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
      <FaNodeJs className="text-7xl text-green-500"/>
      </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
