import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Simple Header
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto me-4 gap-4">
              <a
                className="nav-link active btn bg-primary text-white px-3"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a className="nav-link text-primary" href="#">
                Features
              </a>
              <a className="nav-link text-primary" href="#">
                Pricing
              </a>
              <a className="nav-link text-primary" href="#">
                FAQs
              </a>
              <a className="nav-link text-primary" href="#">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
