import React from "react";

const FaqSection = () => {
    return (
        <div className="pt-140 pb-140 overflow-hidden " id="faq" >
            <div className="container">
                <div className="row gy-40 justify-content-between">
                    <div className="col-xl-4 text-xl-start">
                        <div className="section-title mb-50">
                            <h2 className="title ">FAQs</h2>
                            <p className="sec-text">Got questions about AppIC DAO? We're here to clarify.</p>
                        </div>
                        {/* <div className="faq-thumb mt-60">
                            <img src="images/faq_1-1.png" alt="FAQ Visual" />
                        </div> */}
                    </div>
                    <div className="col-xxl-6 col-xl-8">
                        <div className="accordion-area" id="faqAccordion">

                            {/* FAQ 1 */}
                            <div className="accordion-card">
                                <div className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span className="number">1</span> What is AppIC DAO? 
                                    </button>
                                </div>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">
                                        AppIC is a comprehensive platform within the Internet Computer ecosystem designed to enhance the functionality of decentralized finance (DeFi). It integrates several services including AppIC Terminal, AppIC DeFi, and AppIC Swap to provide robust tools for asset management, token swapping, and cross-chain transactions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 2 */}
                            <div className="accordion-card">
                                <div className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span className="number">2</span> Who can use the AppIC platform? 
                                    </button>
                                </div>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">
                                        The AppIC platform is open to anyone interested in DeFi activities. It serves cryptocurrency traders, investors, and blockchain enthusiasts looking to manage assets across various blockchain networks efficiently.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 3 */}
                            <div className="accordion-card">
                                <div className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <span className="number">3</span> What is AppIC Terminal? 
                                    </button>
                                </div>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">
                                        AppIC Terminal is a cross-chain transfer facility that enables the seamless transfer of assets across various blockchains, including major ones like Ethereum and Solana, and Layer 2 solutions such as Base, Arbitrum, and zkSync to ICP.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Add additional FAQ items here if needed */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
