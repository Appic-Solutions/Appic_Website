"use client";
import React from 'react';
import { motion } from 'framer-motion';
import MotionWrapper from './HigherComponent/MotionWrapper';
import Image from 'next/image';
const FeatureSection = () => {

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  return (
    <div className="wcu-area-1 pt-130 pb-40 position-relative" id="feature">
      <div className="bg-gradient-1">
          <img src="./assets/images/bg-gradient1-1.jpg" alt="Background" />
      </div>
      <div className="container">
          <div className="mb-25">
              <div className="row gy-5 justify-content-between ">
                  <div className="col-lg-7">
                      <div className="section-title mb-0">
                          {/* <h2 className="title style2">Why Choose Appic Protocol?</h2> */}
                          <MotionWrapper tagName="h2" direction="bottomToTop" className="title style2">
      Why Choose Appic Protocol?
    </MotionWrapper>

                          <p className="sec-text">
                            Discover the gateway to seamless interoperability between Layer 2 Ethereum and the Internet Computer.
                          </p>
                      </div>
                  </div>   
              <div className="col-lg-5">
                      <div className="wcu-thumb text-center alltuchtopdown">
                          <img src="images/why_1-1.png" alt="Appic Protocol" />
                      </div>
             </div>
              </div>
          </div>
          <div className="row gy-5 justify-content-between mb-40">
              <div className="col col-md-5">
              <motion.div 
      className="relative p-6  bg-opacity-50 rounded-lg overflow-hidden shadow-lg"
      initial="offscreen" 
      whileInView="onscreen" 
      viewport={{ once: true, amount: 0.5 }} 
      variants={cardVariants}
    >
      {/* This div creates the glow effect on the border */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-transparent to-indigo-500 blur-none opacity-75 "></div>
      <div className="relative z-10 rounded-lg flex flex-col items-center ">
        {/* Content here */}
        {/* <div className="feature-card-icon mb-4">
          <img src="images/feature-icon1-1.svg" alt="Interoperability" />
        </div> */}
        <div className="feature-card-details text-center">
          <h4 className="feature-card-title text-white text-xl font-bold mb-2">
          AppIC Terminal
          </h4>
          <p className="feature-card-text text-white">
          It enables the transfer of any asset across any network, including major blockchains such as Ethereum and Solana, as well as various Layer 2 solutions such as Base, Arbitrum and zkSync to IC network. 
          </p>
        </div>
      </div>
    </motion.div>
    </div>
     <div className="col-md-7" >

     <div className="wcu-thumb text-center alltuchtopdown">
                          <img src="./assets/images/Appic_Terminal.png" alt="Appic Protocol" />
                      </div>

              </div>
           
          </div>
          <div className="row gy-5 justify-content-between mb-40">
          
     <div className="col-md-7 " >

     <div className="wcu-thumb text-center alltuchtopdown">
     <img src="./assets/images/Appic_Terminal.png" alt="Appic Protocol" />
                      </div>

              </div>
              <div className="col col-md-5">
              <motion.div 
      className="relative p-6 bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg"
      initial="offscreen" 
      whileInView="onscreen" 
      viewport={{ once: true, amount: 0.5 }} 
      variants={cardVariants}
    >
      {/* This div creates the glow effect on the border */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-900 via-transparent to-indigo-500 blur-none opacity-75"></div>
      <div className="relative z-10 flex flex-col items-center">
        {/* Content here */}
        {/* <div className="feature-card-icon mb-4">
          <img src="images/feature-icon1-1.svg" alt="Interoperability" />
        </div> */}
        <div className="feature-card-details text-center">
          <h4 className="feature-card-title text-white text-xl font-bold mb-2">
          AppIC DeFi
          </h4>
          <p className="feature-card-text text-white">
          AppIC DeFi introduces innovative features that empower users to efficiently manage their portfolios on the Internet Computer network. With functionalities like Multiswap and Auto Invest, users can optimize their investment strategies and streamline their portfolio management process.
          </p>
        </div>
      </div>
    </motion.div>
    </div>
          </div>
          <div className="row gy-5 justify-content-between mb-40">
              <div className="col col-md-5">
              <motion.div 
      className="relative p-6 bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg"
      initial="offscreen" 
      whileInView="onscreen" 
      viewport={{ once: true, amount: 0.5 }} 
      variants={cardVariants}
    >
      {/* This div creates the glow effect on the border */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-900 via-transparent to-indigo-500 blur-none opacity-75"></div>
      <div className="relative z-10 flex flex-col items-center">
        {/* Content here */}
        {/* <div className="feature-card-icon mb-4">
          <img src="images/feature-icon1-1.svg" alt="Interoperability" />
        </div> */}
        <div className="feature-card-details text-center">
          <h4 className="feature-card-title text-white text-xl font-bold mb-2">
          AppIC Swap
          </h4>
          <p className="feature-card-text text-white">
          GPT
AppIC Swap offers a pioneering protocol for easy and secure asset transfers across many networks, including major blockchains like Ethereum and Solana, plus Layer 2 platforms like Base, Arbitrum, and zkSync. It streamlines asset transfers, improving DeFi space accessibility.
          </p>
        </div>
      </div>
    </motion.div>
    </div>
     <div className="col-md-7" >

     
     <div className="wcu-thumb text-center ">
     <img src="./assets/images/Appic_Swap.png" alt="Appic Protocol" />
                      </div>
              </div>
           
          </div>
          

      </div>
  </div>
  );
};

export default FeatureSection;
