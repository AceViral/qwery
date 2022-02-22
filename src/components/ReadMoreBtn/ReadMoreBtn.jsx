import React from "react";
import "./ReadMoreBtn.scss";

const ReadMoreBtn = () => {
   return (
      <div className="read-more">
         <a href="@">
            read more
            <img src="/img/arrow-right.svg" alt="arrow" />
         </a>
      </div>
   );
};

export default ReadMoreBtn;
