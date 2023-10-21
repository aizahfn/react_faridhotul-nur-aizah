import React from "react";
import "../styles/landingPage.css";
import landing from "../assets/hero-img.png.png";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <>
        <title>Landing Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Landing Page" />
        <link rel="stylesheet" href="assets/css/landingPage.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost&family=Open+Sans&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n            body {\n                margin : 0;\n                width: 100vw;\n                height: 100vh;\n                overflow: auto;\n                background-color: white;\n            }\n        ",
          }}
        />

        <div className="hero-container">
          <div style={{ width: "50%" }}>
            <h2 className="hero-header">Better Solutions For Your Business</h2>
            <h2 className="hero-paragraph">
              We are team of talented designer making websites with Bootstrap
            </h2>
            <br />
            <div>
              <div className="d-grid gap-2 d-md-block">
                <button
                  className="btn btn-primary  border border-primary rounded-pill"
                  type="button"
                  style={{ fontFamily: '"Jost", sans-serif' }}
                  background="#47B2E4"
                >
                  Get Started
                </button>
                <button
                  className="btn btn-primary  border border-primary rounded-pill"
                  type="button"
                  style={{
                    fontFamily: '"Open Sans", sans-serif',
                    backgroundColor: "transparent",
                  }}
                >
                  Watch Video
                </button>
              </div>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <img
              src={landing}
              alt="landing image"
              style={{ height: 300, width: 300 }}
            />
          </div>
        </div>
        <div className="hero-sub-container ">
          <div>
            <h2 style={{ color: "#37517E" }}>Join Our NewsLetter</h2>
            <p style={{ size: 24, color: "#444" }}>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <br />
            <div className="d-grid gap-2 d-md-block">
              <input className="hero-button border border-primary rounded-pill" />
              <button
                className="btn btn-primary  border border-primary rounded-pill"
                type="button"
                style={{ fontFamily: '"Jost", sans-serif' }}
                background="#47B2E4"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="footer-1-container">
          <div>
            <strong style={{ fontSize: "larger", color: "#37517E" }}>
              ARSHA
            </strong>
            <div className="footer-paragraph">
              <a>A108 Adam Street</a>
              <br />
              <a>New York, NY 535022</a>
              <br />
              <a>United States</a>
              <br />
              <br />
              <strong style={{ color: "#5E5E5E" }}>Phone: </strong>
              <a> +1 5589 55488 55</a>
              <br />
              <strong style={{ color: "#5E5E5E" }}>Email: </strong>
              <a>info@example.com</a>
            </div>
          </div>
          <div>
            <strong style={{ color: "#37517E" }}>Useful Links</strong>
            <div className="footer-paragraph">
              <a>Home</a>
              <br />
              <a>About us</a>
              <br />
              <a>Services</a>
              <br />
              <a>Terms of service</a>
              <br />
              <a>Privacy policy</a>
              <br />
            </div>
          </div>
          <div>
            <strong style={{ color: "#37517E" }}>Our Services</strong>
            <div className="footer-paragraph">
              <a>Web Design</a>
              <br />
              <a>Web Development</a>
              <br />
              <a>Product Management</a>
              <br />
              <a>Marketing</a>
              <br />
              <a>Graphic Design</a>
              <br />
            </div>
          </div>
          <div>
            <strong style={{ color: "#37517E" }}>Our Social Networks</strong>
            <div className="footer-paragraph">
              <a>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </a>
            </div>
          </div>
        </div>
        <br />
        <br />
        <footer className="footer-sub">
          <div className="copyright">
            <p>© Copyright Arsha. All Rights Reserved</p>
          </div>
          <div className="bootstrapmade">
            <p style={{ color: "white" }}>
              Designed by <a style={{ color: "#47B2E4" }}>BootstrapMade</a>
            </p>
          </div>
        </footer>
      </>
    </div>
  );
}

export default LandingPage;
