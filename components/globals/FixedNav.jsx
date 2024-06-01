import { motion } from 'framer-motion';

export const FixedNav = ({ children }) => {
  return (
    <div className="fixed bottom-8 md:left-1/2 md:-translate-x-1/2 text-center h-12 z-10 py-4">
      <motion.div
        className="cursor-pointer backdrop-blur-2xl bg-white/10 rounded-full px-2 flex flex-row items-center [&>*]:flex [&>*]:items-center [&>*]:cursor-pointer"
       
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      >
        {children}
      </motion.div>
    </div>
  );
};