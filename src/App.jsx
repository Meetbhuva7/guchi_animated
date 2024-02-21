// import About from "./components/About"
// import Cards from "./components/Cards"
// import Eyes from "./components/Eyes"
// import Featured from "./components/Featured"
// import Footer from "./components/Footer"
// import Landing from "./components/Landing"
// import Marque from "./components/Marque"
// import Navbar from "./components/Navbar"
// import LocomotiveScroll from 'locomotive-scroll';


// const App = () => {
//   const locomotiveScroll = new LocomotiveScroll();
//   return (
//     <div className="w-full min-h-screen bg-zinc-900 text-white">
     
//         <Navbar/>
//         <Landing/>
//         <Marque/>
//         <About/>
//         <Eyes/>
//         <Featured/>
//         <Cards/>
//         <Footer/>
//     </div>
//   )
// }

// export default App

import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useState } from 'react';
import About from "./components/About";
import Cards from "./components/Cards";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import LoadingAnimation from './components/LoadingAnimation'; // Import your custom loading animation
import Marque from "./components/Marque";
import Navbar from "./components/Navbar";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Your asynchronous logic here

      // Simulate a delay (e.g., API call)
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  // Initialize Locomotive Scroll
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      {isLoading ? (
        // Display the loading animation while data is being fetched
        <LoadingAnimation />
      ) : (
        // Render your main content when loading is complete
        <>
          <Navbar />
          <Landing />
          <Marque />
          <About />
          <Eyes />
          <Featured />
          <Cards />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
