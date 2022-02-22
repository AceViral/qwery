import React from "react";
import "./Culture.scss";
import ReadMoreBtn from "../ReadMoreBtn/ReadMoreBtn";

const Culture = () => {
   return (
      <div className="cultureBlock" id="culture">
         <div className="culture">
            <div className="description">
               <div className="paragraph">
                  <div className="line"></div>
                  <p>INDONESIAN CULTURE</p>
               </div>
               <h5>
                  Our culture here <br />
                  is very friendly <br />
                  to people
               </h5>
               <h6>
                  known for his politeness, manners and gentleness. This becomes
                  a <br />
                  characteristic when they mingle with other tribes and become
                  basic traits <br />
                  that are passed down by their ancestors.
               </h6>
               <ReadMoreBtn />
            </div>
            <img src="./img/information2.png" alt="" />
         </div>
      </div>
   );
};

export default Culture;
