const FeatureSection = () => {
    return (
      <div class="wcu-area-1 pt-130 pb-140 position-relative" id="feature">
        <div class="bg-gradient-1">
            <img src="./assets/images/bg-gradient1-1.jpg" alt="img"  />
        </div>
        <div class="container">
            <div class="mb-25">
                <div class="row gy-5">
                    <div class="col-lg-7">
                        <div class="section-title mb-0">
                            <h2 class="title style2">Why You Choose AppIC</h2>
                            <p class="sec-text">Use the window for the planned investment  and calculate the estimated <br /> Iko price and your monthly dividends at a fixed time
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="wcu-thumb text-center alltuchtopdown">
                            <img src="images/why_1-1.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gy-5 justify-content-between">
                <div class="col-lg-5">
                    <div class="wcu-amount-quantity">
                        <div class="amount">
                            <h5 class="title">Amount invested</h5>
                            <p class="price">50,000 $</p>
                        </div>
                        <div class="quantity">
                            <h5 class="title">Quantity Iko</h5>
                            <p class="price">500,000 Iko</p>
                        </div>
                    </div>
                    <ul class="wcu-price-progress-wrap">
                        <li>
                            <h6 class="progress-wrap-title">Expected FOX price</h6>
                            <p class="progress-wrap-text">0.36 $</p>
                            <div class="skill-feature">
                                <div class="progress">
                                    <div class="progress-bar" style={{width: "70%"}}>
                                    </div>
                                </div>
                                <div class="progress-value">
                                    <span>100 $</span>
                                    <span>100,000 $</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <h6 class="progress-wrap-title">Expected FOX price</h6>
                            <p class="progress-wrap-text">0.36 $</p>
                            <div class="skill-feature">
                                <div class="progress">
                                    <div class="progress-bar" style={{width: "80%"}}>
                                    </div>
                                </div>
                                <div class="progress-value">
                                    <span>100 $</span>
                                    <span>100,000 $</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <h6 class="progress-wrap-title">Calculation time</h6>
                            <p class="progress-wrap-text">Q3 2020</p>
                            <div class="skill-feature">
                                <div class="progress">
                                    <div class="progress-bar" style={{width: "40%"}}>
                                    </div>
                                </div>
                                <div class="progress-value">
                                    <span>100 $</span>
                                    <span>100,000 $</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6">
                    <div class="feature-card">
                        <div class="feature-card-icon">
                            <img src="images/feature-icon1-1.svg" alt="img" />
                        </div>
                        <div class="feature-card-details">
                            <h4 class="feature-card-title">The expected value of your investment</h4>
                            <p class="feature-card-text">180,000 $</p>
                            <p class="feature-card-text">ROI = 360 %</p>
                        </div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-card-icon">
                            <img src="images/feature-icon1-2.svg" alt="img" />
                        </div>
                        <div class="feature-card-details">
                            <h4 class="feature-card-title">Expected monthly dividend</h4>
                            <p class="feature-card-text">3600 FOX = 1296 $</p>
                        </div>
                    </div>
                    <div class="feature-card">
                        <div class="feature-card-icon">
                            <img src="images/feature-icon1-3.svg" alt="img" />
                        </div>
                        <div class="feature-card-details">
                            <h4 class="feature-card-title">Masternode bonus</h4>
                            <p class="feature-card-text">180,000 $</p>
                            <p class="feature-card-text">ROI = 360 %</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
  };
  
  export default FeatureSection;
  