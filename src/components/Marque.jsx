import { motion } from 'framer-motion';
function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full py-20 rounded-3xl bg-[#004D43] ">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap ">
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: 'linear', repeat: Infinity, duration: 8 }} className="text-[26vw] leading-none font-['Founders_Grotesk_X'] font-semibold uppercase pt-10 -mb-[6vw] mr-10">
          we are ochi
        </motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: 'linear', repeat: Infinity, duration: 8 }} className="text-[26vw] leading-none font-['Founders_Grotesk_X'] font-semibold uppercase pt-10 -mb-[6vw] mr-10">
          we are ochi
        </motion.h1>
        
    
      </div>
    </div>
  )
}

export default Marque;
