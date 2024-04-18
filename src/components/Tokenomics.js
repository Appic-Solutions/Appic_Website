const Tokenomics = () => {
    return (
        <div className=" overflow-hidden pt-28 bg-black2  ">
            <div className="container">
                <div className="section-title mb-45 ">
                <h1  className=" title style2" >Tokenomics</h1></div>
                <div className="tokenomics-chart" style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./assets/images/tokenomics.png" alt="Tokenomics Pie Chart" style={{ maxWidth: "100%", height: "auto" }} />
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;
