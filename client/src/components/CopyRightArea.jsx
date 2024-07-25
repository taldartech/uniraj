import React from "react";
import Image from "next/image";
import Logo from "/public/images/logo.png";

const CopyRightArea = () => {
  return (
    <div class="copyright-area">
      <div class="container">
        <div class="row align-items-center" data-cues="slideInUp">
          <div class="col-lg-2 col-sm-12">
            <div class="copyright-logo">
              <a class="text-decoration-none" href="index.html">
                <Image
                  src={Logo}
                  width={220}
                  height={220}
                  alt="University of Rajasthan"
                />
              </a>
            </div>
          </div>
          <div class="col-lg-5 col-sm-6">
            <div class="copyright-title text-end">
              <p>
                Copyright © 2014 <strong>University of Rajasthan</strong> All
                Rights Reserved.
              </p>
            </div>
          </div>
          <div class="col-lg-5 col-sm-6">
            <div class="copyright-list text-end">
              <ul class="list-unstyled ps-0 mb-0">
                <li class="d-inline-block">
                  <a class="text-decoration-none" href="university-life.html">
                    Students
                  </a>
                </li>
                <li class="d-inline-block">
                  <a class="text-decoration-none" href="faculty.html">
                    Faculty
                  </a>
                </li>
                <li class="d-inline-block">
                  <a
                    class="text-decoration-none"
                    href="university-overview.html"
                  >
                    Research
                  </a>
                </li>
                <li class="d-inline-block">
                  <a class="text-decoration-none" href="university-life.html">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRightArea;
