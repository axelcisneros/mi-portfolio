import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import styles from "./ContactModal.module.css";
import { IoClose } from "react-icons/io5";

// Reutilizamos las mismas variantes de animación del ProjectModal
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.2 } },
};

const modalVariants = {
  hidden: { y: -50, opacity: 0, scale: 0.9 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 250, damping: 25, delay: 0.1 } },
  exit: { y: 50, opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

const ContactModal = ({ onClose }) => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // 'idle', 'sending', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Usamos las variables de entorno que configuraste
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setStatus("success");
      }, (err) => {
        setStatus("error");
        console.error("FAILED...", err);
      });
  };

  return (
    <motion.div
      className={styles.modalBackdrop}
      onClick={onClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
      >
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Contacto</h2>
          <button onClick={onClose} className={styles.closeButton} aria-label="Cerrar modal">
            <IoClose size={30} />
          </button>
        </div>

        {status === "success" ? (
          <div className={styles.successMessage}>
            <h3>¡Mensaje enviado!</h3>
            <p>Gracias por contactarme, te responderé pronto.</p>
            <button onClick={onClose} className={styles.formButton}>Cerrar</button>
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
            <label htmlFor="from_name">Nombre</label>
            <input type="text" id="from_name" name="from_name" required />

            <label htmlFor="from_email">Tu Correo</label>
            <input type="email" id="from_email" name="from_email" required />

            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" required />

            <button type="submit" className={styles.formButton} disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            {status === 'error' && <p className={styles.errorMessage}>Hubo un error. Inténtalo de nuevo.</p>}
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;