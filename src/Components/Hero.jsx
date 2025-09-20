import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-primary-400 font-medium mb-2">Hello, I'm</h2>
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-4">
              Mohamed Esseddyqy
            </h1>
            <div className="relative inline-block">
              <span className="text-2xl lg:text-3xl font-display bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-secondary-400 max-w-xl mx-auto lg:mx-0 mb-8 text-lg"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="/cv.pdf"
              download
              className="primary-button flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Download CV
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Messeddy1"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button flex items-center gap-2 py-2 px-4"
              >
                <FaGithub className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-esseddyqy-640552246/"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button flex items-center gap-2 py-2 px-4"
              >
                <FaLinkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-sm lg:max-w-md"
        >
          <div className="relative z-10">
            <img
              src={profilePic}
              alt="Mohamed Esseddyqy"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-600/20 to-transparent"></div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary-600/20 to-transparent rounded-2xl blur-2xl -z-10"></div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce text-secondary-400 hover:text-primary-400 transition-colors"
        >
          <FaArrowDown className="w-6 h-6" />
        </button>
      </motion.div>
    </div>
  );
  //           </a>
  //         </div>
  //       </div>
  //       <div className="w-full lg:w-1/2 lg:p-8">
  //         <div className="flex justify-center">
  //           <motion.img
  //             initial={{ x: 100, opacity: 0 }}
  //             animate={{ x: 0, opacity: 1 }}
  //             transition={{ duration: 1, delay: 1.2 }}
  //             src={profilePic}
  //             alt="profile"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Hero;
