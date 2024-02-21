import { motion, useAnimation } from "framer-motion";

function Featured() {
    const cards = [useAnimation(), useAnimation()];

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    };

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

    return (
        <div className="w-full py-20">
            <div className="w-full px-10 text-8xl border-b-[1px] border-zinc-100 pb-20">
                <h1 className="text-7xl tracking-tight font-['Neue_Montreal_Regular']">Featured Projects</h1>
            </div>

            <div className="px-20">
               
                <div className="cards w-full flex gap-10 mt-20 ">
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer card relative w-1/2 h-[80vh] bg-red-500 rounded-xl bg-cover bg-[url('/Fyde.png')] font-bold flex items-center justify-center"
                    > <div className="absolute flex items-center gap-4 -top-[40px] left-[20px] font-light text-2xl">
                            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>  <h3>FYDE</h3>
                        </div>
                        <h1 className="absolute flex text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9]  text-8xl tracking-tighter overflow-hidden">
                            {"FYDE".split("").map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "0" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>

                    </motion.div>
                  

                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="cardcontainer card relative w-1/2 h-[80vh] bg-red-500 rounded-xl bg-cover bg-[url('/Vise_front.jpg')] font-bold flex items-center justify-center"
                    >
                        <div className="absolute flex items-center gap-4 -top-[40px] left-[20px] font-light text-2xl">
                            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div> <h3>VISE</h3>
                        </div>
                        <h1 className="absolute flex text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9]  text-8xl tracking-tighter overflow-hidden">
                            {"VISE".split("").map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "0" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>

                    </motion.div>
                </div>
          
            </div>

            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-20 ">

                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer card relative w-1/2 h-[80vh] bg-red-500 rounded-xl bg-cover bg-[url('/trawa1.jpg')] font-bold flex items-center justify-center"
                    ><div className="absolute flex items-center gap-4 -top-[40px] left-[20px] font-light text-2xl">
                            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div> <h3>TRAWA</h3>
                        </div>
                        <h1 className="absolute flex text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9]  text-8xl tracking-tighter overflow-hidden">
                            {"TRAWA".split("").map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "0" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>

                        <div className="scale-50 w-full h-full rounded-xl overflow-hidden"></div>
                    </motion.div>
                    
                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="cardcontainer card relative w-1/2 h-[80vh] bg-red-500 rounded-xl bg-cover bg-[url('/bean.png')] font-bold flex items-center justify-center"
                    ><div className="absolute flex items-center gap-4 -top-[40px] left-[20px] font-light text-2xl">
                            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div> <h3>PREMIUM BLEND</h3>
                        </div>
                        <h1 className="absolute flex text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9]  text-8xl tracking-tighter overflow-hidden">
                            {"PREMIUM BLEND".split("").map((item, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ y: "0" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                                    className="inline-block"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                       
                    </motion.div>
                </div>
    
            </div>
        </div>
    );
}

export default Featured;
