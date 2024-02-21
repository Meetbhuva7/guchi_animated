
function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center px-20 gap-5">
          <div className="cardcontainer h-[50vh] w-1/2">
              <div className="card w-full relative flex items-center justify-center h-full rounded-xl bg-[#004D43] ">
                  <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className="absolute rounded-full px-5 py-1 border-[#CDEA68] left-10 bottom-10 border-2 text-[#CDEA68]">&copy;2019-2020</button>

              </div>
        </div>
          <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
              <div className="card flex relative items-center justify-center w-1/2 h-full rounded-xl bg-[#192826] ">
                  <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                  <button className="absolute rounded-full px-5 py-1 left-10 bottom-10 border-2">RATING 5.0 ON CLUTCH</button>
              </div>
        <div className="card flex relative items-center justify-center w-1/2 h-full h-[50vh] rounded-xl bg-[#192826] ">
                  <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                  <button className="absolute rounded-full px-5 py-1 left-10 bottom-10 border-2">BUISNESS BOOTCAMP ALUMINI</button>

              </div>
          </div>
    </div>
  )
}

export default Cards
{/* <div className="card w-full h-96  bg-cover bg-[url('/trawa1.jpg')] "></div>
              <div className="card w-full h-96  bg-cover bg-[url('/bean.png')] "></div> */}