

function About() {
  return (
    <div className="w-full z-10 p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tl-3xl text-black">
          <h1 className="font-[Neue_Montreal] text-[3.8vw] leading-[4.2vw] tracking-tight">
          Ochi is a strategic partner for fast-grow­ing tech 
          businesses that need to raise funds, sell prod­ucts, 
          <p>ex­plain com­plex ideas, and hire great peo­ple.</p>
          </h1>
          <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
            <div className="w-1/2">
              <h1 className="text-7xl" >Our Approach</h1>
              <button className="flex gap-10 items-center  px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">Read More
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div></button>
            </div>
            <div className="w-1/2 h-[60vh] bg-cover bg-[url('/Homepage-Photo.jpg')] rounded-3xl" ></div>
          </div>
    </div>
  )
}

export default About