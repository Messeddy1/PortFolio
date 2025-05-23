import { EDUCATIONS } from "../constants"
import {motion} from "framer-motion"

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
      whileInView={{opacity:1,y:0}}
      initial={{opacity: 0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Éducation</motion.h2>
      <div>
      {EDUCATIONS.map((experince,index)=>(
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
        <motion.div
        whileInView={{opacity: 1,x:0}}
        initial={{opacity: 0,x:-100}}
        transition={{duration:1.5}}
        className="w-full lg:w-1/4">
        <p className="text-sm text-neutral-400 mb-2">{experince.year}</p>
        </motion.div>
        <motion.div 
        whileInView={{opacity: 1,x:0}}
        initial={{opacity: 0,x:100}}
        transition={{duration:1.5}}
        className="w-full max-w-xl lg:w-3/4">
        <h6 className="mb-2 font-semibold">
        {experince.role} - <span className="text-sm text-purple-100">{experince.School}</span>
        </h6>

        </motion.div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Education
