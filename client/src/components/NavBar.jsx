import React from "react";
import Image from "next/image";
import Logo from "/public/images/logo.png";
import { menuJson } from "@/data/menu";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg" id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <Image
              src={Logo}
              width={220}
              height={220}
              alt="University of Rajasthan"
            />
          </a>
          <a
            class="navbar-toggler text-decoration-none"
            data-bs-toggle="offcanvas"
            href="#navbarOffcanvas"
            role="button"
            aria-controls="navbarOffcanvas"
          >
            <span class="burger-menu">
              <span class="top-bar"></span>
              <span class="middle-bar"></span>
              <span class="bottom-bar"></span>
            </span>
          </a>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
              {menuJson?.map((parentEle, index) => {
                return (
                  <li class="nav-item">
                    <a
                      href="javascript:void(0)"
                      class={`${
                        parentEle?.child
                          ? "dropdown-toggle nav-link"
                          : "nav-link"
                      }`}
                    >
                      {parentEle?.title}
                    </a>
                    {parentEle?.child && (
                      <ul class="dropdown-menu">
                        {parentEle?.child?.map((childEle, i) => {
                          return (
                            <li class="nav-item">
                              <a
                                class={`${
                                  childEle?.subChild
                                    ? "dropdown-toggle nav-link"
                                    : "nav-link"
                                }`}
                              >
                                {childEle?.title}
                              </a>
                              {childEle?.subChild && (
                                <ul class="dropdown-menu">
                                  {childEle?.subChild?.map((subChild) => {
                                    return (
                                      <li class="nav-item">
                                        <a
                                          href="blog-style-one.html"
                                          class={`${
                                            subChild?.child
                                              ? "dropdown-toggle nav-link"
                                              : "nav-link"
                                          }`}
                                        >
                                          {subChild?.title}
                                        </a>
                                        {subChild?.child && (
                                          <ul class="dropdown-menu">
                                            {subChild?.child?.map(
                                              (item) => {
                                                return (
                                                  <li class="nav-item">
                                                    <a
                                                      href="blog-style-one.html"
                                                      class="nav-link"
                                                    >
                                                      {item?.title}
                                                    </a>
                                                  </li>
                                                );
                                              }
                                            )}
                                          </ul>
                                        )}
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            {/* <div class="others-option">
              <div class="d-flex align-items-center">
                <div class="option-item">
                  <form class="search-form">
                    <div class="form-group">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Search Programs"
                      />
                      <button type="submit">
                        <i class="ri-search-line"></i>
                      </button>
                    </div>
                  </form>
                  <button
                    type="button"
                    class="search-btn d-none bg-transparent border-0 lh-1 p-0 position-relative"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <i class="flaticon-search-1"></i>
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
      <div
        class="responsive-navbar offcanvas offcanvas-end border-0"
        data-bs-backdrop="static"
        tabindex="-1"
        id="navbarOffcanvas"
      >
        <div class="offcanvas-header">
          <a href="index.html" class="logo d-inline-block">
            {/* <img src="assets/img/white-logo.png" alt="logo" /> */}
            <Image
              src={Logo}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </a>
          <button
            type="button"
            class="close-btn bg-transparent position-relative lh-1 p-0 border-0"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i class="ri-close-fill"></i>
          </button>
        </div>
        <div class="offcanvas-body">
          <ul class="responsive-menu">
            <li class="responsive-menu-list active">
              <a href="javascript:void(0);">Home</a>
              <ul class="responsive-menu-items">
                <li class="nav-item">
                  <a href="index.html" class="nav-link">
                    Home Demo - One
                  </a>
                </li>
                <li class="nav-item">
                  <a href="index-2.html" class="nav-link">
                    Home Demo - Two
                  </a>
                </li>
                <li class="nav-item">
                  <a href="index-3.html" class="nav-link">
                    Home Demo - Three
                  </a>
                </li>
              </ul>
            </li>

            <li class="responsive-menu-list">
              <a href="javascript:void(0);">Pages</a>
              <ul class="responsive-menu-items">
                <li class="nav-item">
                  <a href="university-overview.html" class="nav-link">
                    University Overview
                  </a>
                </li>
                <li class="responsive-menu-list">
                  <a href="javascript:void(0);">Blog</a>
                  <ul class="responsive-menu-items">
                    <li class="nav-item">
                      <a href="blog-style-one.html" class="nav-link">
                        Blog & News 01
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="blog-style-two.html" class="nav-link">
                        Blog & News 02
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="blog-details.html" class="nav-link">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="register.html" class="nav-link">
                    Register Now
                  </a>
                </li>
                <li class="nav-item">
                  <a href="login.html" class="nav-link">
                    Log In Now
                  </a>
                </li>
                <li class="nav-item">
                  <a href="application.html" class="nav-link">
                    Application Form
                  </a>
                </li>
                <li class="nav-item">
                  <a href="faculty.html" class="nav-link">
                    Faculty
                  </a>
                </li>
                <li class="nav-item">
                  <a href="privacy-policy.html" class="nav-link">
                    Privacy Policy
                  </a>
                </li>
                <li class="nav-item">
                  <a href="terms-conditions.html" class="nav-link">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </li>

            <li class="responsive-menu-list">
              <a href="javascript:void(0);">Admissions</a>
              <ul class="responsive-menu-items">
                <li class="nav-item">
                  <a href="apply.html" class="nav-link">
                    How To Apply
                  </a>
                </li>
                <li class="nav-item">
                  <a href="tuition-fees.html" class="nav-link">
                    Tuition & Fees
                  </a>
                </li>
              </ul>
            </li>

            <li class="responsive-menu-list">
              <a href="javascript:void(0);">Academics</a>
              <ul class="responsive-menu-items">
                <li class="nav-item ">
                  <a href="programs.html" class="nav-link">
                    All Programs
                  </a>
                </li>
                <li class="nav-item ">
                  <a href="program-details.html" class="nav-link">
                    Program Details
                  </a>
                </li>
                <li class="nav-item ">
                  <a href="events.html" class="nav-link">
                    All Events
                  </a>
                </li>
                <li class="nav-item ">
                  <a href="event-details.html" class="nav-link">
                    Event Details
                  </a>
                </li>
              </ul>
            </li>

            <li class="responsive-menu-list">
              <a href="javascript:void(0);">Health Care</a>
              <ul class="responsive-menu-items">
                <li class="nav-item ">
                  <a href="fitness-athletics.html" class="nav-link">
                    Fitness & Athletics
                  </a>
                </li>
              </ul>
            </li>

            <li class="responsive-menu-list">
              <a href="javascript:void(0);">Student Life</a>
              <ul class="responsive-menu-items">
                <li class="nav-item ">
                  <a href="university-life.html" class="nav-link">
                    University Life
                  </a>
                </li>
              </ul>
            </li>

            <li class="responsive-menu-list without-icon">
              <a href="contact.html" class="nav-link">
                Contact <span>Us</span>
              </a>
            </li>
          </ul>

          <div class="others-option d-md-flex align-items-center">
            <div class="option-item">
              <form class="search-form">
                <div class="form-group">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Search Programs"
                  />
                  <button type="submit">
                    <i class="ri-search-line"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
