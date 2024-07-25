import React from "react";

const UpcomingEvent = () => {
  return (
    <div class="events-area pb-75">
      <div class="container">
        <div class="section-title text-center m-auto" data-cues="slideInUp">
          <h2>Upcoming Events</h2>
        </div>
        <div class="row justify-content-center" data-cues="slideInUp">
          <div class="col-lg-4 col-md-6">
            <div class="single-events-card">
              <a
                class="text-decoration-none d-block image"
                href="event-details.html"
              >
                <img src="assets/img/events/events-1.jpg" alt="events-image" />
              </a>
              <div class="content d-flex align-items-top">
                <div class="date">
                  <h2>24</h2>
                  <span>Jan</span>
                </div>
                <div class="title">
                  <h3>
                    <a class="text-decoration-none" href="event-details.html">
                      Annual Student Showcase & Talent Competition In Adma
                    </a>
                  </h3>
                  <span class="d-flex align-items-center">
                    <i class="ri-calendar-line"></i>
                    12:00 PM - 02:00 PM
                  </span>
                  <span class="d-flex align-items-center">
                    <i class="ri-map-pin-line"></i>
                    St. John's, Newfoundland Labrador
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-events-card">
              <a
                class="text-decoration-none d-block image"
                href="event-details.html"
              >
                <img src="assets/img/events/events-2.jpg" alt="events-image" />
              </a>
              <div class="content d-flex align-items-top">
                <div class="date">
                  <h2>26</h2>
                  <span>Jan</span>
                </div>
                <div class="title">
                  <h3>
                    <a class="text-decoration-none" href="event-details.html">
                      Promoting Physical & Mental Well Being Started From Now
                    </a>
                  </h3>
                  <span class="d-flex align-items-center">
                    <i class="ri-calendar-line"></i>
                    12:00 PM - 02:00 PM
                  </span>
                  <span class="d-flex align-items-center">
                    <i class="ri-map-pin-line"></i>
                    St. John's, Newfoundland Labrador
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-events-card">
              <a
                class="text-decoration-none d-block image"
                href="event-details.html"
              >
                <img src="assets/img/events/events-3.jpg" alt="events-image" />
              </a>
              <div class="content d-flex align-items-top">
                <div class="date">
                  <h2>14</h2>
                  <span>apr</span>
                </div>
                <div class="title">
                  <h3>
                    <a class="text-decoration-none" href="event-details.html">
                      Enterprneurship Summit & Startup Pitch Competition In
                      Students
                    </a>
                  </h3>
                  <span class="d-flex align-items-center">
                    <i class="ri-calendar-line"></i>
                    12:00 PM - 02:00 PM
                  </span>
                  <span class="d-flex align-items-center">
                    <i class="ri-map-pin-line"></i>
                    St. John's, Newfoundland Labrador
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
