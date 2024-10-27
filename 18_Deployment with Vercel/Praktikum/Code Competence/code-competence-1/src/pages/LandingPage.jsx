import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ListItem from "../components/ListItem";
import ContactUs from "../components/ContactUs";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";
import AboutUs from "./AboutUs";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="list">
        <ListItem />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
