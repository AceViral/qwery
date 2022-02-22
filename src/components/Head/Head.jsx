import React from "react";
import "./Head.scss";

const Head = () => {
   return (
      <div>
         <header>
            <p>QWERy</p>
            <ul>
               <li>
                  <a href="#information">Information</a>
               </li>
               <li>
                  <a href="#aboutUs">About us</a>
               </li>
               <li>
                  <a href="#culture">Culture</a>
               </li>
            </ul>
            <div className="searchBlock">
               <img src="/img/search.svg" alt="Search" />
               <input type="text" placeholder="Search" />
            </div>
         </header>
         <div className="content">
            <div className="social">
               <p>Follow us</p>
               <div className="social-block">
                  <img src="/img/instagram.svg" alt="instagram" />
                  <img src="/img/twitter.svg" alt="twitter" />
                  <img src="/img/facebook.svg" alt="facebook" />
               </div>
            </div>
            <div className="main-content">
               <div className="paragraph">
                  <div className="line"></div>
                  <p>EXPLORE THE NATURE BEAUTY</p>
               </div>

               <h1>Discover</h1>
               <h2> Wonderful Indonesia</h2>
               <div className="scroll-down">
                  <a href="#information">
                     Scroll down
                     <img src="/img/arrow.svg" alt="arrow" />
                  </a>
               </div>
            </div>
            <div></div>
         </div>
      </div>
   );
};

export default Head;
