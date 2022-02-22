import React from "react";
import ReadMoreBtn from "../ReadMoreBtn/ReadMoreBtn";
import "./AboutUs.scss";

const AboutUs = () => {
   return (
      <div className="AboutUsBlock" id="aboutUs">
         <div className="AboutUs">
            <div className="paragraph">
               <div className="line"></div>
               <p>BROMO</p>
               <div className="line"></div>
            </div>
            <h4>
               Steady your steps, we <br />
               will climb together!
            </h4>
            <h5>
               Enjoying the vast expanse of the sea of ​​​​sand, witnessing the
               splendor of Mount Semeru that soars into the <br />
               sky, and gazing at the beauty of the sun moving out of its bed or
               otherwise enjoying the dim twilight from <br />
               the Bromo ridge is an unforgettable experience when visiting
               Bromo.
            </h5>
            <div style={{ marginBottom: "42px" }}>
               <ReadMoreBtn />
            </div>
         </div>
      </div>
   );
};

export default AboutUs;
