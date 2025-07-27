"use client";
import { left } from "@popperjs/core";
import Image from "next/image";
import React from "react";

const Hero1 = () => {
  const options = [
    { value: 0, display: "Select insurance type.." },
    { value: 1, display: "Life Insurance" },
    { value: 2, display: "Health insurance" },
    { value: 3, display: "Property insurance" },
    { value: 4, display: "Motor insurance" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <div className="hero-banner-ten position-relative zn2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            <h1 className="hero-heading fw-500">
              <span className="hero-heading">Smarter</span>{" "}
              <span className="text-secondary" style={{ color: "#7D7D7D" }}>Payments</span>
            </h1>
            <h1 className="hero-heading fw-500">
              <span className="text-secondary" style={{ color: "#7D7D7D" }}>Rewards</span>
              <span className="hero-heading">Bigger</span>{" "}
            </h1>

            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
              All your cards. All your rewards. One smart tap.
            </p>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
              Join the Waitlist for Early Access
            </p>

            {/* Added Waitlist Form */}
            <div style={{
              maxWidth: "500px",
              margin: "0 auto",
              fontFamily: "Arial, sans-serif"
            }}>
              <form id = "email"
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: "100%"
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    width: "100%",
                    fontSize: "16px",
                    outline: "none",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                  required
                />
                <button
                  type="submit"
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#7D7D7D",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "16px",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = "#5D5D5D"}
                  onMouseOut={(e) => e.target.style.backgroundColor = "#7D7D7D"}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      <Image
        width={338}
        height={454}
        src="/images/assets/Frame 8 1.png"
        alt="ilustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
      />
      <Image
        width={308}
        height={408}
        src="/images/assets/Frame 7 1.png"
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
      />
    </div>
  );
};

export default Hero1;