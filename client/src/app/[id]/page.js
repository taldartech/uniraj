"use client"
import React, { useEffect, useState } from "react";
import { useParams } from 'next/navigation'
import { data } from "../../../public/data/data";



const DynamicPage = () => {
  const params = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      try {
        console.log(data, 'data')
        // Find the item by ID from the imported JSON data
        const foundItem = data.find(item => item?.slug === params?.id);

        // Update state
        setItem(foundItem);
      } catch (err) {
        console.log(err)
      }
    };

    fetchData();
  }, [params?.id]);
  console.log(item, 'item')
  return (
    <>
      <div class="pages-banner-area">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6">
              <div class="pages-title">
                <h2>{item?.subTitle}</h2>
                <ul class="list-unstyled ps-0 mb-0">
                  <li class="d-inline-block">
                    <a class="text-decoration-none" href="index.html">
                      Home
                    </a>
                  </li>
                  <li class="d-inline-block">{item?.subTitle}</li>
                </ul>
              </div>
            </div>
            {/* <div class="col-lg-6">
              <div class="pages-image">
                <img src="assets/img/pages/pages-11.jpg" alt="pages-image" />
              </div>
            </div> */}
          </div>
        </div>
        <div class="shape-7">
          {/* / <img src="assets/img/shape/shape-7.png" alt="shape" /> */}
        </div>
      </div>
      <div class="privacy-policy-area">
        <div class="container">
          <div class="privacy-policy-content">
            <span class="sub">
              {item?.title}
            </span>
            <p dangerouslySetInnerHTML={{ __html: item?.content }}></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicPage;
