
"use client"

import { AnimatePresence, motion } from 'framer-motion'
// Componente de transição de página
export default function Template ({ children }: any) {

  return (
    <AnimatePresence mode="wait">
    {children}
    <motion.div
      className="bg-neutral-900 absolute top-0 left-0 w-full h-screen origin-bottom z-50"
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      initial={{scaleY: 0}}    
      animate={{scaleY: 0}}
      exit={{scaleY: 1}}
      ></motion.div>
    <motion.div
      className="bg-neutral-900 absolute top-0 left-0 w-full h-screen origin-top z-50"
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      initial={{scaleY: 1}}    
      animate={{scaleY: 0}}
      exit={{scaleY: 0}}
      ></motion.div>
    </AnimatePresence>
  );
};
