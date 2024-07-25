import React from "react";
import Image from "next/image";
import Logo from "/public/images/logo.png";

const NavBar = () => {
  const menuJson = [
    {
      title: "About HEI",
      child: [
        {
          id: "1",
          title: "About us: Overview",
        },
        {
          id: "2",
          title: "Act and Statutes or MoA",
        },
        {
          id: "3",
          title: "Institutional Development Plan",
        },
        {
          id: "4",
          title:
            "Constituent Units/ Affiliated Colleges, Affiliating University (in case of Colleges) Off-campus/Off-shore campus/Learning Support Centres under ODL mode (Wherever applicable)",
        },
        {
          id: "5",
          title: "Accreditation/ Ranking status (NAAC, NBA NIRF)",
        },
        {
          id: "6",
          title: "Recognition / Approval (2(f), 12B, etc. as applicable)",
        },
        {
          id: "7",
          title: "Annual Reports",
        },
        {
          id: "8",
          title:
            "Annual Accounts including Balance Sheet, Income and Expenditure Account, Receipts and Payments Account along with Audit Report",
        },
        {
          id: "9",
          title: "Sponsoring body details",
        },
      ],
      body: "Body 1",
    },
    {
      title: "Administration",
      child: [
        {
          id: "1",
          title: "Chancellor",
        },
        {
          id: "2",
          title: "Pro Chancellor",
        },
        {
          id: "3",
          title: "Vice-Chancellor",
        },
        {
          id: "4",
          title: "Pro-Vice Chancellor",
        },
        {
          id: "5",
          title: "Registrar",
        },
        {
          id: "6",
          title: "Principal",
        },
        {
          id: "7",
          title: "Finance Officer",
        },
        {
          id: "8",
          title: "Controller of Examination",
        },
        {
          id: "9",
          title: "Chief Vigilance Officer",
        },
        {
          id: "10",
          title: "Ombudsperson",
        },
        {
          id: "11",
          title:
            "Executive Council/Board of Governors by whatever name called,Board of Management, Academic Counc11, Board of Studies, Flnance Committee - composition and members with particulars",
        },
        {
          id: "12",
          title: "Internal Complaint Committee",
        },
        {
          id: "13",
          title:
            "Academic Leadership (Dean/HoD of Schools/Departments/Centres)",
        },
      ],
      body: "Body 2",
    },
    {
      title: "Academics",
      child: [
        {
          id: "1",
          title: "Details of Academic Programs",
        },
        {
          id: "2",
          title: "Academic Calendar",
        },
        {
          id: "3",
          title: "Statutes/Ordinances pertaining to Academics/Examinations",
        },
        {
          id: "4",
          title: "Schools/Departments/ Centres",
        },
        {
          id: "5",
          title:
            "Department/School/Centre wise faculty/staff details with photographs",
        },
        {
          id: "6",
          title: "List of UGC-recognlzed ODL/Online programs",
        },
        {
          id: "7",
          title: "Internal Quality Assurance Cell (IQAC)",
        },
        {
          id: "8",
          title: "Library",
        },
        {
          id: "9",
          title: "Academic collaborations",
        },
      ],

      body: "Body 3",
    },
    { title: "Research", 
      child: [
        {
          id: "1",
          title: "Research and Development Cell (including Research and Consultancy Projects, Foreign Collaboration Industry Collaborations",
        },
        {
          id: "2",
          title: "Incubation Centre/Start-ups/Entrepreneurship Cell",
        },
        {
          id: "3",
          title: "Central facilities",
        },
      ],
      
      body: "Body 4" },
    { title: "Student Life", 
      child: [
        {
          id: "1",
          title: "Sports facilities",
        },
        {
          id: "2",
          title: "NCC/NSS - Details",
        },
        {
          id: "3",
          title: "Hostel details (wherever applicable)",
        },
        {
          id: "4",
          title: "Placement Cell and its activities",
        },
        {
          id: "5",
          title: "Details of Student Grievance Redressal Co.mm.lttee (SGRC) and Ombudsperson",
        },
        {
          id: "6",
          title: "Health facilities",
        },
        {
          id: "7",
          title: "Internal Complaint Committee",
        },
        {
          id: "8",
          title: "Anti-Ragging Cell",
        },
        {
          id: "9",
          title: "Equal Opportunity Celt",
        },
        {
          id: "10",
          title: "Socio-Economically Disadvantaged Groups Cell (SEDG)",
        },
        {
          id: "11",
          title: "Facilities for differently-abled",
        },
      ],
      
      body: "Body 4" },
    { title: "Picture Gallery", body: "Body 4" },
    { title: "Contactus", body: "Body 4" },
  ];
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
                              <a href="/about" class="nav-link">
                                {childEle?.title}
                              </a>
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
