import { FC } from "react";
import { products } from "../Components/ProductDetails";
import ProductCard from "../Components/ProductCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AllProducts: FC = () => {

    const navigate = useNavigate();
    
  return (
    <>
 <section className="bg-gray-50 dark:bg-gray-900 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-6"
    >
      Our Products
    </motion.h1>

    {/* Products Grid */}
    <div className="grid grid-cols-1 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>

    {/* Button Section */}
    <div className="text-center mt-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="bg-green-600 dark:bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 dark:hover:bg-green-400 transition duration-200"
      >
        Home
      </motion.button>
    </div>
  </div>
</section>


    </>
  );
};

export default AllProducts;
