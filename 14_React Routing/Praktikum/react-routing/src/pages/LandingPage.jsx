import React from "react";
import "../styles/LandingPage.css";
import Navbar from "../components/Navbar";
import HeroImage from "../assets/hero-img.png";

export default function LandingPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <h2>Better Solutions For Your Business</h2>
            <p>
              We are a team of talented designers making websites with
              Bootstrap.
            </p>
            <div className="button-cta">
              <a href="CreateProduct.html">
                <button className="started">Get Started</button>
              </a>
              <a href="#">
                <button className="wvideo">Watch Video</button>
              </a>
            </div>
          </div>
          <div className="hero-img">
            <img src={HeroImage} alt="Hero" />
          </div>
        </div>
      </section>

      <footer>
        <div className="newsletter">
          <div className="news-content">
            <h3>Join Our Newsletter</h3>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna.
            </p>
            <div className="news-form">
              <input
                name="join-newsletter"
                type="text"
                placeholder="Enter your email"
              />
              <a href="#">
                <button className="subs">Subscribe</button>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="address">
            <h3>ARSHA</h3>
            <p>A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p>United States</p>
            <div className="phone">
              <p>
                <span>Phone:</span> +1 5589 55488 55
              </p>
              <p>
                <span>Email:</span> info@example.com
              </p>
            </div>
          </div>
          <div className="useful-link">
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Terms Of Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="our-service">
            <h3>Our Services</h3>
            <ul>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Product Management</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="social">
            <h3>Our Social Network</h3>
            <p>
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies.
            </p>
            <div className="social-circle">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            © Copyright <strong>Arsha</strong>. All Rights Reserved.
          </p>
          <p>
            Designed by <span>BootstrapMade</span>
          </p>
        </div>
      </footer>
    </>
  );
}
