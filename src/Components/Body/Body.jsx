import React, { useState } from "react";
import "./body.css";
import "./footer.css";
import Demo1 from "../Demo1/Demo1";
import Demo2 from "../Demo2/Demo2";
import { useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Body() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/demo1"); // Replace '/desiredPath' with the actual path you want to navigate to
  };

  const handleButtonClick2 = () => {
    navigate("/demo2"); // Replace '/desiredPath' with the actual path you want to navigate to
  };

  const handleButtonClick3 = () => {
    navigate("/demo3"); // Replace '/desiredPath' with the actual path you want to navigate to
  };

  return (
    <div>
      <div className="body_1">
        <div className="body_1_container">
          <div className="body_1_1">
            <li>
              <a href="#" title="E-mail">
                <MdEmail fontSize={40} color="yellow" /> <h2>E-mail</h2>
              </a>
            </li>
            <li>
              <a href="#" title="Instagram">
                <FaInstagramSquare fontSize={40} color="yellow" />{" "}
                <h2>Instagram</h2>
              </a>
            </li>
            <li>
              <a href="#" title="Linkedin">
                <FaLinkedin fontSize={40} color="yellow" /> <h2>Linkedin</h2>
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <FaTwitter fontSize={40} color="yellow" /> <h2>Twitter</h2>
              </a>
            </li>
            <li>
              <a href="#" title="Youtube">
                <FaYoutube fontSize={40} color="yellow" /> <h2>Youtube</h2>
              </a>
            </li>
            <li>
              <a href="#" title="GitHub">
                <FaGithub fontSize={40} color="yellow" /> <h2>Github</h2>
              </a>
            </li>
          </div>
          <div className="body_1_2">
            <div className="body_1_2_1">
              <p>A Peter Isabu Web Creation...@2024</p>
            </div>
            <div className="body_1_2_2">
              <div className="small-h1">
                <h1>Hello...Welcome To</h1>
              </div>
              <div>
                <h1>Peter's Portfolio</h1>
              </div>
              <div className="p2">
                <p>
                  "I am a passionate and experienced web designer. I bring your
                  imaginative web ideas to Digital Reality."
                </p>
              </div>
              <div className="intro_button">
                <div className="btn_1">
                  <div>
                    <h1>3+</h1>
                  </div>
                  <div>
                    <p>
                      YEARS <br />
                      EXPERIENCE
                    </p>
                  </div>
                </div>

                <div className="btn_1">
                  <div>
                    <h1>20+</h1>
                  </div>
                  <div>
                    <p>
                      SATISFIED <br />
                      CLIENTS
                    </p>
                  </div>
                </div>

                <div className="btn_1">
                  <div>
                    <h1>50+</h1>
                  </div>
                  <div>
                    <p>
                      OPEN-SOURCE <br />
                      CONTRIBUTIONS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body_2">
        <div className="body-2_left">
          <p>
            FrontEnd Skills: <br /> HTML + CSS + JAVA SCRIPT + REACT+DOM
            MANIPULATION + NODE.JS + JSON + PROBLEM SOLVING
          </p>
        </div>
        <div className="body-2_middle body_3_box grey_job">
          <div className="job_p">{/* <h1>WORK_1...</h1> */}</div>
          <div>
            <button onClick={handleButtonClick}>
              <h2>Demo</h2>
            </button>
          </div>
        </div>
        <div className="body-2_right"></div>
      </div>
      <div className="body_3">
        <div className="grey body_3_box"></div>
        <div className="white body_3_box white_job">
          <div className="job_p">{/* <h1>WORK_2...</h1> */}</div>
          <div>
            <button onClick={handleButtonClick2}>
              <h2>Demo</h2>
            </button>
          </div>
        </div>
        <div className="black body_3_box black_job">
          <div className="job_p">{/* <h1>WORK_3...</h1> */}</div>
          <div>
            <button onClick={handleButtonClick3}>
              <h2>Demo</h2>
            </button>
          </div>
        </div>
        <div className="yellow body_3_box"></div>
      </div>
      <div className="body_4">
        <div className="white body_3_box"></div>
        <div className="yellow body_3_box yellow_job">
          <div className="job_p">{/* <h1>WORK_2...</h1> */}</div>
          <div>
            <button>
              <h2>Demo</h2>
            </button>
          </div>
        </div>
        <div className="big_black body_3_box">
          <p>
            "Digital advancement fuels connectivity and innovation, driving the
            need for skilled web developers like myself to craft and maintain
            essential online infrastructure."
          </p>
        </div>
      </div>
      <footer>
        <div class="footer-line"></div>
        <div class="footer-wrapper">
          <section class="footer-top">
            <div class="footer-headline">
              <h2>Subscribe to my newsletter</h2>
              <p>Stay up to date with my latest works and articles</p>
            </div>
            <div class="footer-subscribe">
              <input
                type="email"
                spellcheck="false"
                placeholder="Your Email"
              ></input>
              <button>Sign Up</button>
            </div>
          </section>
          <div class="footer-columns">
            <section className="product">
              <h3>Product</h3>
              <ul>
                <li>
                  <a href="#" title="API">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" title="Pricing">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" title="Documentation">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" title="Release Notes">
                    Release Notes
                  </a>
                </li>
                <li>
                  <a href="#" title="Status">
                    Status
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h3>Resources</h3>
              <ul>
                <li>
                  <a href="#" title="Support">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" title="Sitemap">
                    Sitemap
                  </a>
                </li>
                <li>
                  <a href="#" title="Newsletter">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" title="Help Centre">
                    Help Centre
                  </a>
                </li>
                <li>
                  <a href="#" title="Investor">
                    Investor
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#" title="About Us">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" title="Blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" title="Careers">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" title="Press">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" title="Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <h3>Legal</h3>
              <ul>
                <li>
                  <a href="#" title="Terms and services">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" title="Privacy Policy">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" title="Cookies">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" title="Licenses">
                    License
                  </a>
                </li>
                <li>
                  <a href="#" title="Cookies">
                    Contact
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div class="footer-bottom">
            <div class="social-links">
              <ul>
                <li>
                  <a href="#" title="Instagram">
                    <FaInstagramSquare fontSize={40} color="yellow" />
                  </a>
                </li>
                <li>
                  <a href="#" title="Linkedin">
                    <FaLinkedin fontSize={40} color="yellow" />
                  </a>
                </li>
                <li>
                  <a href="#" title="Twitter">
                    <FaTwitter fontSize={40} color="yellow" />
                  </a>
                </li>
                <li>
                  <a href="#" title="Youtube">
                    <FaYoutube fontSize={40} color="yellow" />
                  </a>
                </li>
                <li>
                  <a href="#" title="GitHub">
                    <FaGithub fontSize={40} color="yellow" />
                  </a>
                </li>
              </ul>
            </div>

            <small>A Peter Isabu's Web Creation...@2024</small>
          </div>
        </div>
      </footer>
      {/* {isDemo1Visible && <Demo1 />} */}
    </div>
  );
}

export default Body;
