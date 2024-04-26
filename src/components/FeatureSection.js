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
    <div className="wcu-area-1 pt-130  position-relative " id="feature">
      <div className="bg-gradient-1">
          {/* <img src="./assets/images/bg-gradient1-1.png" alt="Background" /> */}
      </div>
      <div className="container ">
          <div className="mb-50 ">
              <div className="row gy-5 justify-content-between ">
                  <div className="col-lg-12">
                      <div className="section-title mb-0">
                          {/* <h2 className="title style2">Why Choose Appic Protocol?</h2> */}
                          <MotionWrapper tagName="h2" direction="bottomToTop" className="title  title-gradient">
      Key Features
    </MotionWrapper>

                          {/* <p className="sec-text">
                          AppIC DAO governs AppIC Swap, AppIC Terminal and AppIC DeFi offering users a comprehensive suite of tools and functionalities for managing digital assets, participating in decentralized finance (DeFi) activities, and facilitating cross-chain transactions.
                          </p> */}
                      </div>
                  </div>   

          
              </div>
          </div>
          <div className="row gy-5 justify-content-between  mb-32 px-20 align-items-center " id="appic-swap">
              <div className="col col-md-5">
              <motion.div 
      className="relative  bg-opacity-50 rounded-lg overflow-hidden shadow-lg"
      initial="offscreen" 
      whileInView="onscreen" 
      viewport={{ once: true, amount: 0.5 }} 
      variants={cardVariants}
    >
      {/* This div creates the glow effect on the  */}
     
      <div className="relative z-10  rounded-lg flex flex-col  ">
        {/* Content here */}
        {/* <div className="feature-card-icon mb-4">
          <img src="images/feature-icon1-1.svg" alt="Interoperability" />
        </div> */}
        <div className="feature-card-details flex flex-col items-center  text-justify">
          <h4 className="feature-card-title text-white text-xl font-bold mb-2">
          AppIC Swap
          </h4>
          <p className="feature-card-text text-white">
          AppIC Swap revolutionizes cross-chain token swapping by leveraging the Internet Computer (ICP) as an intermediary. It enables users to seamlessly exchange tokens between different blockchains, enhancing interoperability and liquidity provision within the decentralized ecosystem.
          </p>
        </div>
     
      </div>
    </motion.div>
    </div>
     <div className="col-md-7 flex justify-end" >

     <div className="wcu-thumb text-center alltuchtopdown">
                          <img src="./assets/images/appic-swap.jpg" alt="Appic Protocol" />
                      </div>

              </div>
           
          </div>
          <div className="row gy-5 justify-content-between mb-32 px-20 align-items-center " id="appic-terminal">
          
     <div className="col-md-7 " >

     <div className="wcu-thumb text-center alltuchtopdown">
     <img src="./assets/images/appic-terminal.jpg" alt="Appic Protocol" />
                      </div>

              </div>
              <div className="col col-md-5 flex justify-end">
              <motion.div 
      className="relative  bg-opacity-50 rounded-lg overflow-hidden shadow-lg"
      initial="offscreen" 
      whileInView="onscreen" 
      viewport={{ once: true, amount: 0.5 }} 
      variants={cardVariants}
    >
      {/* This div creates the glow effect on the  */}
  
      <div className="relative z-10  flex flex-col items-end">
        {/* Content here */}
        {/* <div className="feature-card-icon mb-4">
          <img src="images/feature-icon1-1.svg" alt="Interoperability" />
        </div> */}
           <div className="feature-card-details flex flex-col  items-center text-justify">
          <h4 className="feature-card-title text-white text-xl font-bold mb-2">
          AppIC Terminal
          </h4>
          <p className="feature-card-text text-white">
          AppIC Terminal serves as a vital component within the AppIC ecosystem, facilitating seamless asset transfers between the Internet Computer (IC) and other blockchain networks. It addresses the interoperability challenges faced by users and enhances connectivity within the decentralized ecosystem.
          </p>
        </div>
       
      </div>
    </motion.div>
    </div>
          </div>
          <div className="row  gy-5 justify-content-between px-20 mb-32 align-items-center " id="appic-defi">
  <div className="col-md-5  ">
    <motion.div 
      className="relative bg-opacity-50 rounded-lg overflow-hidden shadow-lg"
      initial="offscreen" 
      whileInView="onscreen" 
      viewport={{ once: true, amount: 0.5 }} 
      variants={cardVariants}
    >
      <div className="relative z-10 flex flex-col px-10 items-center text-justify">
        <h4 className="feature-card-title text-white text-xl font-bold mb-2">
          AppIC DeFi
        </h4>
        <p className="feature-card-text text-white">
        AppIC DeFi introduces innovative solutions for decentralized finance (DeFi) activities within the Internet Computer (IC) ecosystem. It comprises two core features: Auto Invest and Multiswap, aimed at enhancing portfolio management, liquidity provision, and trading efficiency.
        </p>
      </div>
    </motion.div>
  </div>
  <div className="col-md-7 flex justify-end">
    <div className="wcu-thumb  ">
      <img src="./assets/images/appic-defi.jpg" alt="Appic Protocol" />
    </div>
  </div>
</div>

          

      </div>
  </div>
  );
};

export default FeatureSection;
