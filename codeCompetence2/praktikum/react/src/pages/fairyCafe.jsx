import React from "react";
import "../styles/fairyCafe.css";
import ContactUs from "../components/ContactUs";

export default function FairyCafe() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Bootstrap */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      />
      <title>Fairy Cafe</title>
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost&family=Open+Sans&family=Poppins:wght@100;300;400;700&family=Roboto:ital@1&display=swap"
        rel="stylesheet"
      />
      {/* Feather Icons */}
      {/* Stylesheet */}
      <link rel="stylesheet" href="project/assets/css/style.css" />
      {/* NAVBAR START */}
      <nav className="navbar">
        <a href="#" className="navbar-logo">
          FAIRY CAFE
        </a>
        <div className="d-flex">
          <ul className="navbar-nav me-auto mb-4 mb-lg-2 d-flex flex-row gap-2">
            <li className="nav-item">
              <a className="nav-link btn btn-light" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-light" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-light" href="#menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-light" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-extra">
          <a href="#" id="search">
            <i data-feather="search" />
          </a>
          <a href="#" id="shopping-cart">
            <i data-feather="shopping-cart" />
          </a>
          <a href="#" id="hamburger-menu">
            <i data-feather="menu" />
          </a>
        </div>
      </nav>
      {/* NAVBAR END */}
      {/* Hero Section */}
      <section className="hero" id="home">
        <main className="content">
          <h1>BOOK A TABLE</h1>
          <p>Opening Hour 8:00 AM - 01:00 AM, every day on week.</p>
          <a href="#" className="cta">
            Book Now
          </a>
        </main>
      </section>
      {/* Hero Section */}
      {/* Contact Section */}
      <section id="contact" className="contact">
        <ContactUs />
        {/* <h2>Contact Us</h2>
        <p>Lets Get In Touch With Us</p>
        <div className="row">
          <form className="contact" action="">
            <div id="first-name" className="input-group">
              <i data-feather="user" />
              <input type="text" name="firstName" placeholder="First Name" />
            </div>
            <div id="last-name" className="input-group">
              <i data-feather="user" />
              <input type="text" name="lastName" placeholder="Last Name" />
            </div>
            <div id="email" className="input-group">
              <i data-feather="mail" />
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div id="message" className="input-group">
              <i data-feather="send" />
              <input type="text-area" name="message" placeholder="Message" />
            </div>
            <div
              className="d-grid gap-2"
              style={{
                height: "7vh",
                width: "50%",
                padding: "6px 86px 6px 10px",
              }}
            >
              <button
                className="btn btn-primary"
                onclick="checkForm()"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div> */}
      </section>
      {/* Contact Section */}
      {/* Footer */}
      <footer>
        <div className="row">
          <div
            className="col-sm"
            style={{ fontSize: "x-large", fontStyle: "italic" }}
          >
            FAIRY CAFE
          </div>
          <div className="col-sm" style={{ fontSize: "medium" }}>
            FIND US
            <div>
              <br />
              <a href="#">
                <i data-feather="phone" /> 081392027175{" "}
              </a>
              <br />
              <a href="#">
                <i data-feather="map-pin" /> Sekaran, Gunung Pati, Semarang{" "}
              </a>
              <br />
              <a href="#">
                <i data-feather="mail" /> aizahfn22@gmail.com{" "}
              </a>
              <br />
            </div>
          </div>
          <div className="col-sm" style={{ fontSize: "medium" }}>
            SOCIAL MEDIA
            <div>
              <br />
              <a href="#">
                <i data-feather="instagram" />
              </a>
              <a href="#">
                <i data-feather="twitter" />
              </a>
              <a href="#">
                <i data-feather="linkedin" />
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="col-sm">
          <div>
            Created by <a href="">Faridhotul Nur Aizah</a> | © Fairy Cafe 2023
          </div>
        </div>
      </footer>
    </>
  );
}
