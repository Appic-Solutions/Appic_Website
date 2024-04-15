"use client";
import React from 'react';
import MotionWrapper from './HigherComponent/MotionWrapper';

function Intro() {
  return (
    <div className=" overflow-hidden pt-28 bg-black2  ">
      <div className="container ">
        <div className="row justify-center  ">
          <div className="col-xl-10 bg-gray-900 pt-20 rounded-xl ">
            <div className="section-title mb-45 text-center">
              <MotionWrapper tagName="h2" direction="bottomToTop" className="title style2">
                Unlocking DeFi's Potential with AppIC DAO
              </MotionWrapper>
              <MotionWrapper tagName="p" direction="bottomToTop" className="sec-text">
  Seamlessly bridge any blockchain with Internet Computer, facilitating frictionless asset transfers.
</MotionWrapper>
            </div>

          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Intro;