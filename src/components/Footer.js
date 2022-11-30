import React from "react";

export default function Footer() {
  return (
    <>
      {/* <!-- footer section start -->  */}
      <div class="footer_section layout_padding">
        <div class="container">
          <div class="subscribe_bt">
            <a href="#">Subscribe</a>
          </div>
          <input
            type="text"
            class="email_text"
            placeholder="Enter Your Email"
            name="Enter Your Email"
          />
          <div class="footer_section_2">
            <div class="row">
              <div class="col-lg-3 margin_top">
                <div class="call_text">
                  <a href="#">
                    <img src="assets/images/call-icon1.png" />
                    <span class="padding_left_15">Call Now +01 9876543210</span>
                  </a>
                </div>
                <div class="call_text">
                  <a href="#">
                    <img src="assets/images/mail-icon1.png" />
                    <span class="padding_left_15">demo@gmail.com</span>
                  </a>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="information_main">
                  <h4 class="information_text">Information</h4>
                  <p class="many_text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration
                  </p>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="information_main">
                  <h4 class="information_text">Helpful Links</h4>
                  <div class="footer_menu">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="services.html">Services</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="news.html">News</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="information_main">
                  <div class="footer_logo">
                    <a href="index.html">
                      <img src="assets/images/footer-logo.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
      {/* <!-- footer section end -->
      <!-- copyright section start --> */}
      <div class="copyright_section">
        <div class="container">
          <p class="copyright_text">
            © 2020 All Rights Reserved
            <a href="https://html.design">Free html Templates</a>
          </p>
        </div>
      </div>
      ;{/* <!-- copyright section end -->  */}
    </>
  );
}
