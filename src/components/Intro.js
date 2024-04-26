"use client";
import React from 'react';
import MotionWrapper from './HigherComponent/MotionWrapper';

function Intro() {
  return (
    <div className=" overflow-hidden pt-28   ">
      <div className="container ">
        <div className="row justify-center ">
          <div className="col-xl-12 bg-gray-900 gradient-border p-4 relative  rounded-lg shadow  invest-card ">
            <div className="section-title intro">
              <MotionWrapper tagName="h2" direction="bottomToTop" className="title ">
          AppIC DAO on IC Ecosystem
              </MotionWrapper>
               {/* <MotionWrapper tagName="p" direction="bottomToTopx" className="sec-text">
               It governs AppIC Terminal, AppIC DeFi, and AppIC Swap, offering users a comprehensive suite of tools and functionalities for managing digital assets, participating in decentralized finance (DeFi) activities, and facilitating cross-chain transactions.
</MotionWrapper> */}
<img src="./assets/images/appic-dao.jpg" alt="AppIC Visual" />
            </div>

          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Intro;