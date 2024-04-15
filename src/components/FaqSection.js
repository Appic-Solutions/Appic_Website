import React from "react";

const FaqSection = () => {
    return (
        <div className="pt-140 pb-140 overflow-hidden">
            <div className="container">
                <div className="row gy-40 justify-content-between">
                    <div className="col-xl-4 text-xl-start">
                        <div className="section-title mb-50">
                            <h2 className="title style2">Frequently Asked Questions</h2>
                            <p className="sec-text">Got questions about AppIC DAO? We're here to clarify.</p>
                        </div>
                        <div className="faq-thumb mt-60">
                            <img src="images/faq_1-1.png" alt="FAQ Visual" />
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-8">
                        <div className="accordion-area" id="faqAccordion">

                            {/* FAQ 1 */}
                            <div className="accordion-card">
                                <div className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <span className="number">1</span> What is AppIC Transfer and how does it work?
                                    </button>
                                </div>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">
                                            AppIC Transfer is a cutting-edge protocol that allows you to move assets across various networks including major blockchains and Layer 2 solutions with ease and high security, all on the Internet Computer platform.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 2 */}
                            <div className="accordion-card">
                                <div className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <span className="number">2</span> Can you tell me more about AppIC DeFi features?
                                    </button>
                                </div>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">
                                            AppIC DeFi offers features like Multiswap for managing your digital assets and Auto Invest for automating your investment strategy, both designed to help optimize and streamline your portfolio on the ICP network.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ 3 */}
                            <div className="accordion-card">
                                <div className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <span className="number">3</span> How does AppIC Swap enhance my trading experience?
                                    </button>
                                </div>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">
                                            AppIC Swap streamlines the process of swapping assets between various networks by providing a user-friendly and secure platform, supporting a broad range of blockchains and enhancing DeFi accessibility.
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
