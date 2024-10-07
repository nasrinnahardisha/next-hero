import AboutContents from '@/Components/AboutContents';
import React from 'react';
import { Headland_One } from "next/font/google";

const getTime = async () => {
    const res = await fetch("http://localhost:3000/time", { cache : 'no-store'});
    const data = await res.json()
    console.log(data);
    return data.currentTime;
  };
  
       
const headland = Headland_One({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
    title: "About",
    description: " About Page",
    Keywords: ["about", "about page"]
};

const AboutPage =async () => {
    const currentTime =await getTime();
    return (
        <div className={`${headland.className} min-h-screen px-12 py-24`}>
             <h3 className="text-3xl text-red-400 mt-12">Time : {currentTime}</h3>
            <h2 className="text-3xl"> about page</h2>
            <AboutContents></AboutContents>
        </div>
    );
};

export default AboutPage;