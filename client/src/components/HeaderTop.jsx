import React from "react";

const HeaderTop = () => {
  return (
    <div class="top-header-area">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="top-header-list">
              <ul class="list-unstyled ps-0 mb-0">
                <li class="d-inline-block">
                  <a
                    class="text-decoration-none d-flex align-items-center"
                    href="tel:45993939990"
                  >
                    <i class="flaticon-call"></i>
                    +459 9393 9990
                  </a>
                </li>
                <li class="d-inline-block">
                  <a
                    class="text-decoration-none d-flex align-items-center"
                    href="mailto:helloadma@gmail.com"
                  >
                    <i class="ri-message-line"></i>
                    universityRajasthan@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="top-header-social-list text-end">
              <ul class="list-unstyled ps-0 mb-0">
                <li class="d-inline-block">
                  <ul class="list-unstyled ps-0 mb-0 pages-link">
                    <li class="d-inline-block">
                      <a class="text-decoration-none" href="faculty.html">
                        Faculty
                      </a>
                    </li>
                    <li class="d-inline-block">
                      <a
                        class="text-decoration-none"
                        href="university-life.html"
                      >
                        Community
                      </a>
                    </li>
                    <li class="d-inline-block">
                      <a class="text-decoration-none" href="login.html">
                        Log in
                      </a>
                    </li>
                    <li class="d-inline-block">
                      <a class="text-decoration-none" href="register.html">
                        Register
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="d-inline-block">
                  <ul class="list-unstyled ps-0 mb-0 social-link">
                    <li class="d-inline-block">
                      <a
                        class="text-decoration-none"
                        href="https://www.facebook.com/"
                        target="_blank"
                      >
                        <i class="flaticon-facebook-app-symbol"></i>
                      </a>
                    </li>
                    <li class="d-inline-block">
                      <a
                        class="text-decoration-none"
                        href="https://www.pinterest.com/"
                        target="_blank"
                      >
                        <i class="flaticon-pinterest"></i>
                      </a>
                    </li>
                    <li class="d-inline-block">
                      <a
                        class="text-decoration-none"
                        href="https://www.instagram.com/"
                        target="_blank"
                      >
                        <i class="flaticon-instagram"></i>
                      </a>
                    </li>
                    <li class="d-inline-block">
                      <a
                        class="text-decoration-none"
                        href="https://twitter.com/"
                        target="_blank"
                      >
                        <i class="flaticon-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
