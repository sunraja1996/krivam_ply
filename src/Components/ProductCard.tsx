import { FC, JSX } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  ShieldExclamationIcon,
  SunIcon,
  BeakerIcon,
  BoltIcon,
  SparklesIcon,
  EyeIcon,
  BugAntIcon,
  ScaleIcon,
  CubeIcon,
  StarIcon,
  FingerPrintIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  
} from "@heroicons/react/24/outline";
import { FaEnvira } from "react-icons/fa";
import { BsMoisture } from "react-icons/bs";
import { Product } from "./ProductDetails";
import { IoWaterOutline } from "react-icons/io5";
import { MdHdrStrong } from "react-icons/md";
import { LuBicepsFlexed } from "react-icons/lu";

// Feature Icon Map
const iconMap: { [key: string]: JSX.Element } = {
  "Semi Hardwood": <EyeIcon className="w-6 h-6" />,
  "Termite Resistant": <ShieldExclamationIcon className="w-6 h-6" />,
  "Insect Resistance": <BugAntIcon className="w-6 h-6" />,
  Strong: <ScaleIcon className="w-6 h-6" />,
  "Moisture Resistant": <BsMoisture className="w-6 h-6" />,
  "Eco-Friendly": <FaEnvira className="w-6 h-6" />,
  "Hardwood Core": <CubeIcon className="w-6 h-6" />,
  "Superior Finish": <StarIcon className="w-6 h-6" />,
  "Crack Resistant": <ShieldCheckIcon className="w-6 h-6" />,
  "Smooth Surface": <FingerPrintIcon className="w-6 h-6" />,
  "Cost Effective": <BanknotesIcon className="w-6 h-6" />,
  "Boiling Water Resistant": <ShieldCheckIcon className="w-6 h-6" />,
  "Termite Proof": <ShieldExclamationIcon className="w-6 h-6" />,
  "Long-lasting": <SunIcon className="w-6 h-6" />,
  "High Density": <BoltIcon className="w-6 h-6" />,
  "Chemical Resistant": <BeakerIcon className="w-6 h-6" />,
  "UV Protected": <SparklesIcon className="w-6 h-6" />,
  "Uniform Thickness": <ScaleIcon className="w-6 h-6" />,
  "Surface Smoothness": <FingerPrintIcon className="w-6 h-6" />,
  "Eco Certified": <CheckBadgeIcon className="w-6 h-6" />,
  "Maximum Waterproofing": <IoWaterOutline className="w-6 h-6" />,
  "Superior Waterproofing": <IoWaterOutline className="w-6 h-6" />,
  "Strong & Durable": <LuBicepsFlexed className="w-6 h-6" />,
  "Strong & Sturdy": <LuBicepsFlexed className="w-6 h-6" />,
  "Strong & Rigid": <MdHdrStrong className="w-6 h-6" />,
};

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 items-center">
        <div className="flex justify-center">
          <img
            src={product.image.src}
            alt={product.title}
            className="w-[750px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="max-w-full lg:max-w-lg text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {product.title}
          </h2>
          {/* <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
            {product.subtitle}
          </p> */}
          <p className="text-gray-700 dark:text-gray-400 mb-8">
            {product.description}
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-8">
            {product.details}
          </p>

          <div className="max-w-md w-full space-y-3 p-4 md:p-6 mb-5 rounded-lg">
            {product.features.map((feature, index) => {
              const featureKey = feature.split(" - ")[0];

              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-3 rounded-lg"
                >
                  <div className="text-green-500 flex-shrink-0">
                    {iconMap[featureKey] || (
                      <ShieldCheckIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                    )}
                  </div>
                  <h4 className="text-lg text-left font-medium text-gray-900 dark:text-white">
                    {feature}
                  </h4>
                </div>
              );
            })}
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Applications:
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {product.applications.map((app, index) => (
                <li key={index} className="text-lg text-left">
                  {app}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
