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
                        <div className="col-lg-3">
                            <div className="hero-thumb alltuchtopdown">
                                <img src="./assets/images/hero-1-1.jpg" alt="AppIC Visual" />
                            </div>
                        </div>
                        <div className="col-lg-9">
    <h1 className="hero-title">Explore the DeFi Universe with AppIC DAO</h1>
    <p className="hero-text">
        Dive into a world where asset transfer knows no bounds with <strong>AppIC Transfer</strong>, experience the pinnacle of portfolio management through <strong>AppIC DeFi</strong>, and switch seamlessly between assets using <strong>AppIC Swap</strong>. Each product in our suite is a cornerstone of innovation, designed to elevate your DeFi strategy on the Internet Computer Protocol.
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
