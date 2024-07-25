import React from 'react'
import UniversityImg from "/public/images/universityImg.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <div class="pages-banner-area">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="pages-title">
                            <h2>University Overview</h2>
                            <ul class="list-unstyled ps-0 mb-0">
                                <li class="d-inline-block">
                                    <a class="text-decoration-none" href="index.html">
                                        Home
                                    </a>
                                </li>
                                <li class="d-inline-block">
                                    University Overview
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="pages-image">
                            <img src="assets/img/pages/pages-1.jpg" alt="pages-image"/>
                            <Image src={UniversityImg} alt="University of Rajasthan" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="shape-7">
                <img src="assets/img/shape/shape-7.png" alt="shape"/>
            </div>
        </div>
  )
}

export default About