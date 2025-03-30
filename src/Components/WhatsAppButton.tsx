import { motion } from "framer-motion";
import { RiWhatsappFill } from "react-icons/ri";

const WhatsAppButton = () => {
  const phoneNumber = "+919176606669";
  const message = "Hello! I'm interested in Krivam Ply products.";

  return (
    <motion.div
    className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50"
    initial={{ scale: 0 }}
    animate={{ 
      scale: [0, 1, 1.05, 1],
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    >
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-500 
                   rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <RiWhatsappFill className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;