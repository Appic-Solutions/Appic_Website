import React from 'react';
import Header from './Header';

const ProposalDetails = () => {
  // Define the background style with the image
  const backgroundStyle = {
    backgroundImage: `url('./assets/images/landing.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section id="proposal" className="" style={backgroundStyle}>
      <Header />
      {/* Adding an overlay div for darkening the background image */}
      <div className="absolute top-0 left-0 w-full   bg-black/40"></div> {/* Adjust the /60 to increase or decrease the darkness */}
      <div className="container mx-auto relative">
        {/* Ensure text is legible over the background image */}
        <div className="bg-black/35 py-10 px-24 rounded-lg my-10">
          <h2 className="text-3xl font-bold text-center text-white">Introducing an L2 to ICP Token Bridge</h2>
          <p className="text-lg leading-relaxed text-center text-white">Building a bridge from layer 2 tokens to ICP, facilitating liquidity and asset movement to the Internet Computer, enhancing community engagement.</p>
        </div>
      </div>
    </section>
  );
};

export default ProposalDetails;
