import React from "react";
import "./demo2.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Demo2() {
  return (
    <div>
      <div className="card_container">
        <div className="card">
          <img src="demo2/demo2_1.png" alt="" />
        </div>
        <div className="card">
          <img src="demo2/demo2_2.png" alt="" />
        </div>
        <div className="card">
          <img src="demo2/demo2_3.png" alt="" />
        </div>
        <div className="card">
          <img src="demo2/demo2_4.png" alt="" />
        </div>
        <div className="card">
          <img src="demo2/demo2_5.png" alt="" />
        </div>
        <div className="card">
          <a href="https://peterisabu17.github.io/New-york-times/">
            <h1>
              View Site <FaRegArrowAltCircleRight color="yellow" />
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Demo2;
