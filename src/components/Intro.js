"use client";
import React from 'react';
import MotionWrapper from './HigherComponent/MotionWrapper';

function Intro() {
  return (
    <div className=" overflow-hidden pt-28   ">
      <div className="container ">
        <div className="row justify-center ">
          <div className="col-xl-10 bg-gray-900 gradient-border p-4 relative  rounded-lg shadow  invest-card ">
            <div className="section-title mb-45 text-center">
              {/* <MotionWrapper tagName="h2" direction="bottomToTop" className="title style2">
                Unlock DeFi's Potential with AppIC DAO
              </MotionWrapper> */}
              {/* <MotionWrapper tagName="p" direction="bottomToTopx" className="sec-text">
  Seamlessly bridge any blockchain with Internet Computer, facilitating frictionless asset transfers.
</MotionWrapper> */}
<img src="./assets/images/Appic_dao.png" alt="AppIC Visual" />
            </div>

          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Intro;