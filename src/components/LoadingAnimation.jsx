// LoadingAnimation.jsx
import { useEffect, useState } from 'react';
import './LoadingAnimation.css'; // Add CSS for styling

const LoadingAnimation = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Simulate loading progress
            setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : prevProgress));
        }, 16);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-around">
            {/* Your loading animation content goes here */}
            <div className="loading-animation">Loading {progress}%</div>

            <div className="w-full h-100vh py-20 bg-zinc-900 pt-1">
                <div className="textstructure my-48 px-20">
                    {
                        [" we create", "eye - opening", "presentations"].map((item, index) => {
                            return (
                                <div className="masker" key={index}>
                                    <div className="w-fit flex items-end">
                                        {index === 1 && <div className="w-[9vw] h-[5.6vw] relative -top-[1vh] rounded-[6px] ]"></div>}
                                        <h1 className="pt-[2vw] -mb-[1vw] font-['Founders_Grotesk_X'] font-medium flex items-center h-full text-[8vw] uppercase leading-[.65] tracking-[4px]">
                                            {item}
                                        </h1>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

            </div>

        </div>
    );
};

export default LoadingAnimation;
