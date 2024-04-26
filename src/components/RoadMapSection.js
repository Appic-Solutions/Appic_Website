const RoadMapSection = () => {
    return (
      <div class="pt-130  overflow-hidden  position-relative z-index-common" id="roadMap">
      <div class="bg-gradient-2">
          <img src="images/bg-gradient1-1.jpg" alt="img" />
      </div>
      <div class="container ">
          <div class="row justify-content-between">
              <div class="col-lg-6 col-sm-8">
                  <div class="section-title mb-50">
                      <h2 class="title ">Our Roadmap</h2>
                  </div>
              </div>
              {/* <div class="col-sm-auto">
                  <div class="icon-box">
                      <button class="slider-arrow prev-btn default"><i class="fas fa-arrow-left"></i></button>
                      <button class="slider-arrow next-btn default"><i class="fas fa-arrow-right"></i></button>
                  </div>
              </div> */}
          </div>
      </div>
      <div class="container ">
          <div class=" position-relative">
              <div class="row roadMap-active2  justify-center">
              <div class="col-lg-4">
                      <div class="roadmap-item">
                          <span class="roadmap-title">Q4 2023</span>
                          <div class="roadmap-content">
                              <h4 class="title"><span class="dot"></span>ICP Developer Grant</h4>
                              <p>- ICP grant approval</p>
                              <p>- PoC and conceptual designing on auto invest </p>
                           
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="roadmap-item">
                          <span class="roadmap-title">Q1 2024</span>
                          <div class="roadmap-content">
                              <h4 class="title"><span class="dot"></span>AppIC DeFi ( Auto Invest )</h4>
                              <p>- User Interface development </p>
                              <p>- Design and develop functionality canister</p>
                              <p>- Integrating, Testing and deployment of frontend and backend canister</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="roadmap-item">
                          <span class="roadmap-title">Q2 2024</span>
                          <div class="roadmap-content">
                              <h4 class="title"><span class="dot"></span>AppIC Governance </h4>
                              <p>- Initiate AppIC DAO SNS</p>
                              <p>- Cross Chain Communication & Minting Canister development and integration with EVM RPC Canister for native tokens
</p>
                              <p>- Helper Smart Contract Development and Testing on EVM compatible chains on Testnet</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="roadmap-item">
                          <span class="roadmap-title">Q3 2024</span>
                          <div class="roadmap-content">
                              <h4 class="title"><span class="dot"></span>AppIC Terminal </h4>
                              <p>- UI Design and development </p>
<p>- Testing the event logs and on chain transaction verification</p>
<p>- Testing the backend functionality of AppIC Terminal by transferring native token from EVM chain to IC</p>
<p>- Deployment and Auditing</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="roadmap-item">
                          <span class="roadmap-title">Q4 2024</span>
                          <div class="roadmap-content">
                              <h4 class="title"><span class="dot"></span>AppIC Swap (1st Phase) </h4>
                              <p>- Swap between Non IC tokens to ICP tokens and vice versa</p>
<p>- Dex integration for AppIC Swap</p>
<p>- User Interface development</p>
<p>- Testing, auditing and deployment of AppIC Swap</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 ">
                      <div class="roadmap-item">
                          <span class="roadmap-title">Q1 2025</span>
                          <div class="roadmap-content">
                              <h4 class="title"><span class="dot"></span>AppIC Swap (2nd Phase)</h4>
                              <p>- Development for swapping between Non IC tokens to Non IC ICP tokens</p>
                              <p>- Testing and auditing of canisters</p>
                              <p>- Deployment</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
  };
  
  export default RoadMapSection;
  