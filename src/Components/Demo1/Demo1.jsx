import React from "react";
import "./demo1.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Demo1() {
  return (
    <div className="cb">
      <div className="card_container">
        <div className="card">
          <img src="demo1/demo1_1.png" alt="" />
        </div>
        <div className="card">
          <img src="demo1/demo1_2.png" alt="" />
        </div>
        <div className="card">
          <img src="demo1/demo1_3.png" alt="" />
        </div>
        <div className="card">
          <img src="demo1/demo1_4.png" alt="" />
        </div>
        <div className="card">
          <img src="demo1/demo1_5.png" alt="" />
        </div>
        <div className="card">
          <a href="https://peterisabu17.github.io/Test-Site/">
            <h1>
              View Site <FaRegArrowAltCircleRight color="yellow" />
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Demo1;
