const HeroSection = () => {
    return (
        <div className="hero-wrapper hero-1">
            <div className="hero-bg-gradient"></div>
            <div className="ripple-shape">
                <span className="ripple-1"></span>
                <span className="ripple-2"></span>
                <span className="ripple-3"></span>
                <span className="ripple-4"></span>
                <span className="ripple-5"></span>
            </div>

            <div className="container">
                <div className="hero-style1">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-5">
                        <div className="hero-thumb alltuchtopdown">
                                <img src="./assets/images/hero.png" alt="AppIC Visual" />
                            </div>
                        {/* <div className="hero-thumb ">
  <video autoPlay muted loop className="video-background"  >
    <source src="./assets/images/mascot.MP4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div> */}
                        </div>
                     
                        <div className="col-lg-7">
    <h1 className="hero-title"> Building Epic Dapps on ICP</h1>
    <p className="hero-text">
    Cross-chain token swapping made possible by AppIC DAO! First-ever infrastructure layer built on ICP that allows users and Dapps to transfer and swap tokens between ICP and different blockchains such as Bitcoin, Ethereum, Solana, and EVM chains, completely on-chain.
    </p>
    <div className="btn-wrap">
        <a href="contact.html" className="btn btn2">Embark on Your Journey</a>
        <a href="blog.html" className="btn btn-two">Explore the Tech</a>
    </div>
</div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
