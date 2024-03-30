const HeroSection = () => {
    return (
      <div class="hero-wrapper hero-1">
      <div class="hero-bg-gradient">
      </div>
      <div class="ripple-shape">
          <span class="ripple-1"></span>
          <span class="ripple-2"></span>
          <span class="ripple-3"></span>
          <span class="ripple-4"></span>
          <span class="ripple-5"></span>
      </div>

      <div class="container">
          <div class="hero-style1">
              <div class="row flex-row-reverse">
                  <div class="col-lg-3">
                      <div class="hero-thumb alltuchtopdown">
                          <img src="./assets/images/hero-1-1.jpg" alt="img" />
                      </div>
                  </div>
                  <div class="col-lg-9">
                      <h1 class="hero-title">Introducing an L2 to ICP Token Bridge</h1>
                      <p class="hero-text">Building a bridge from layer 2 tokens to ICP, facilitating liquidity and asset movement to the Internet Computer, enhancing community engagement.</p>
                      <div class="btn-wrap">
                          <a href="contact.html" class="btn btn2">
                              Purchase a Token
                          </a>
                          <a href="blog.html" class="btn btn-two">
                              Read  Documents
                          </a>
                      </div>
                  </div>

              </div>
          </div>
          <div class="hero-countdown-wrap">
              <h2 class="hero-countdown-wrap-title">ICO will start in..</h2>
              <ul class="skill-feature_list">
                  <li><span>Value</span> of technology invested</li>
                  <li><span>Private</span> sale</li>
                  <li><h4>ICO</h4></li>
              </ul>
              <div class="skill-feature">
                  <div class="progress">
                      <div class="progress-bar" style={{width: "80%"}}>
                      </div>
                  </div>
                  <div class="progress-value-max">100 Min $</div>
              </div>
              <ul class="skill-feature_list style2">
                  <li>7.75 Min</li>
                  <li>1.5 Min</li>
                  <li>140,000 $ chosen</li>
              </ul>
              <div class="banner-countdown-wrap">
                  <div class="coming-time" data-countdown="2024/8/29"></div>
              </div>
          </div>
      </div>
  </div>
    );
  };
  
  export default HeroSection;
  