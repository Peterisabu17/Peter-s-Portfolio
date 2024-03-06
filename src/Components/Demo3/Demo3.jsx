import React from "react";
import "./demo3.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Demo3() {
  return (
    <div>
      <div className="card_container">
        <div className="card">
          <img src="demo3/demo3_1.png" alt="" />
        </div>
        <div className="card">
          <img src="demo3/demo3_2.png" alt="" />
        </div>
        <div className="card">
          <img src="demo3/demo3_3.png" alt="" />
        </div>
        <div className="card">
          <img src="demo3/demo3_4.png" alt="" />
        </div>
        <div className="card">
          <img src="demo3/demo3_5.png" alt="" />
        </div>
        <div className="card">
          <a href="https://peterisabu17.github.io/Color-widget/">
            <h1>
              View Site <FaRegArrowAltCircleRight color="yellow" />
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Demo3;
