import React from "react";
import Image from "next/image";
import Logo from "/public/images/slider1.jpeg";

const Slider = () => {
  return (
    <div class="hero-area">
      <div class="container-fluid" data-cues="slideInUp">
        <div class="hero-content">
          <div class="title">
            <h1>A World-Classes Education For Your Better life</h1>
            <p>
              We are a Top 06 Canadian university and one of the Top 120 in the
              world. Find out what makes our student experience so rich,
              meaningful and life-changing.
            </p>
          </div>
          <ul class="list-unstyled ps-0 mb-0 hero-btn">
            <li class="d-inline-block">
              <a
                class="text-decoration-none default-btn"
                href="university-overview.html"
              >
                Take A Tour
                <i class="flaticon-right-arrow"></i>
              </a>
            </li>
            <li class="d-inline-block">
              <a
                class="text-decoration-none arrow-btn"
                href="program-details.html"
              >
                View Our Programs
                <i class="flaticon-right-arrow"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="hero-reviews">
          <p class="everything">
            “Everything that I learned at Adma University really helped put me
            above the competition”.
          </p>
          <div class="d-flex align-items-center justify-content-between">
            <div class="user d-flex align-items-center">
              <div class="image">
                <img src="assets/img/hero/hero-1.jpg" alt="hero-user" />
              </div>
              <div class="content">
                <h6>John Smith</h6>
                <span>Adma’s student</span>
              </div>
            </div>
            <div class="quote-icon">
              <i class="flaticon-quote"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
