import { CONTACT } from "../constants";
import { motion } from "framer-motion";
const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h3
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl "
      >
        Contact
      </motion.h3>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          <span className="font-semibold">Adresse :</span> {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          <span className="font-semibold">Téléphone :</span> {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.gmailLink}&su=Hello&body=I want to contact you`}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b text-blue-400 hover:text-blue-600"
          aria-label="Envoyer un email via Gmail"
        >
          <span className="font-semibold">Email :</span> {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contacts;
