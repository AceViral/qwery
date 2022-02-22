import React from "react";
import ReadMoreBtn from "../ReadMoreBtn/ReadMoreBtn";
import "./Information.scss";

const Information = () => {
   return (
      <div className="information" id="information">
         <img src="./img/information.png" alt="" />
         <div className="description">
            <div className="paragraph">
               <div className="line"></div>
               <p>EAST NUSA TENGGARA</p>
            </div>

            <h3>
               Have you <br />
               enjoyed your holiday?
            </h3>
            <h4>
               You will be amazed if you take part in this sailing Komodo island
               tour package. So it is also mandatory for you, besides enjoying
               Komodo tourism on Komodo Island, you also have to taste the
               marine tourism. The beautiful waters of Komodo will make you meet
               many travelers from other countries.
            </h4>
            <ReadMoreBtn />
         </div>
      </div>
   );
};

export default Information;
