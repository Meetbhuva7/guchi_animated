import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
function Landing() {
  return (
   
  
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className="w-full h-100vh py-20 bg-zinc-9000 pt-1">
      <div className="textstructure my-48 px-20">
        {
          [" we create", "eye - opening", "presentations"].map((item, index) => {
            return (
              <div className="masker" key={index}>
                <div className="w-fit flex items-end">
                  {index === 1 && <motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1}} className="w-[9vw] h-[5.6vw] relative -top-[1vh] me-5 rounded-[6px] bg-cover bg-[url('/content-image.jpg')]"></motion.div>}
                    <h1 className="pt-[2vw] -mb-[1vw] font-['Founders_Grotesk_X'] font-medium flex items-center h-full text-[8vw] uppercase leading-[.65] tracking-[4px]">
                    {item}
                  </h1>
                </div>
              </div>
            );
          })
        }



      </div>
      <div className="border-t-[1px] border-zinc-700 mt32 flex justify-between items-center py-5 px-20">
        {["For Public and Private companies", "From first pitch to IPO"].map((item, index) => (
          <p key={index} className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center justify-between gap-5">
          <div className="px-4 py-2 border-[1px] border-zinc-300 rounded-full font-light text-sm capitalize"> 
          start the project
          </div>
            <div className="w-10 h-10 border-[1px] flex items-center justify-center border-zinc-500 rounded-full">
              <span>
                <MdArrowOutward />
              </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Landing