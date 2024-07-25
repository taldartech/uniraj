import React from "react";
import Image from "next/image";
import Logo from "/public/images/universityImg.jpeg";

const AboutSection = () => {
  return (
    <div class="about-area pt-100 pb-75">
      <div class="container">
        <div class="row align-items-center" data-cues="slideInUp">
          <div class="col-lg-6">
            <div class="about-image">
              <Image src={Logo} alt="University of Rajasthan" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-content">
              <div class="title">
                <h2 class="d-flex align-items-center">
                  {/* <img src="assets/img/title-shape.svg" alt="title-shape" /> */}
                  About University of Rajasthan
                </h2>
                <p>
                  At University of Rajasthan, we believe in providing an exceptional educational
                  experienc that prepares students for success in an
                  ever-changing world. As a leading institution of higher
                  learning, we are committed to fostering a vibrant academic
                  community and empowering our students to reach their full
                  potential. We are committed to fostering a vibrant academic
                  community and empowering our students to reach their full
                  potential.
                </p>
              </div>
              <a
                class="text-decoration-none arrow-btn"
                href="university-overview.html"
              >
                University Overview
                <i class="flaticon-right-arrow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
