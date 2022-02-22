import React from "react";
import "./Foot.scss";

const Foot = () => {
   return (
      <div className="footBlock">
         <div className="foot">
            <div className="foothead">
               <div className="head">QWERy</div>
               <div className="start">
                  <p>Ready to explore?</p>
                  <button>Get started</button>
               </div>
            </div>
            <div className="whiteLine"></div>
            <footer>
               <div
                  style={{ display: "flex", justifyContent: "space-between" }}
               >
                  <div>
                     <h1>
                        Let's go on vacation,
                        <br /> Make your day
                     </h1>
                     <div className="emailBtn">
                        <input type="text" placeholder="Email address" />
                        <button>
                           <img src="/img/black-arrow.svg" alt="black-arrow" />
                        </button>
                        <div className="whiteLine"></div>
                     </div>
                  </div>
                  <div
                     style={{
                        display: "flex",
                     }}
                  >
                     <ul>
                        <li style={{ color: "#ffd1a0" }}>Services</li>
                        <li>Email Marketing</li>
                        <li>Campaigns</li>
                        <li>Branding</li>
                        <li>Offline</li>
                     </ul>
                     <ul>
                        <li style={{ color: "#ffd1a0" }}>About</li>
                        <li>Our Story</li>
                        <li>Benefits</li>
                        <li>Team</li>
                        <li>Careers</li>
                     </ul>
                     <ul>
                        <li style={{ color: "#ffd1a0" }}>Help</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                     </ul>
                  </div>
               </div>
               <div className="policy">
                  <div style={{ display: "flex" }}>
                     <p>Terms & Conditions</p>
                     <p>Privacy Policy</p>
                  </div>
                  <div className="social">
                     <div>
                        <img src="/img/facebook.svg" alt="facebook" />
                        <img src="/img/twitter.svg" alt="twitter" />
                        <img src="/img/instagram.svg" alt="instagram" />
                     </div>
                  </div>
               </div>
               <div className="end">
                  <p>Copyright 2021 QWERy</p>
               </div>
            </footer>
         </div>
      </div>
   );
};

export default Foot;
