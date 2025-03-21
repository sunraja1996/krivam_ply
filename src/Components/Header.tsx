import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";

const Header = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 640) { 
        if (window.scrollY > lastScrollY) {
          setIsVisible(false); 
        } else {
          setIsVisible(true); 
        }
        setLastScrollY(window.scrollY);
      } else {
        setIsVisible(true); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      variants={containerVariants}
      className="bg-red-500 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-3 sm:py-4">
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center sm:justify-start mb-2 sm:mb-0"
          >
            <span className="text-amber-50 font-outfit text-sm sm:text-base font-semibold">
              Krivamply | Building Better. Together
            </span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-amber-50"
          >
            <div className="flex items-center gap-2 transition-colors">
              <PhoneIcon className="w-5 h-5" />
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919176606669"
                className="text-sm font-medium"
              >
                +91 91766 06669
              </motion.a>
            </div>
            <div className="flex items-center gap-2 transition-colors">
              <EnvelopeIcon className="w-5 h-5" />
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:krivamply@gmail.com"
                className="text-sm font-medium"
              >
                krivamply@gmail.com
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;