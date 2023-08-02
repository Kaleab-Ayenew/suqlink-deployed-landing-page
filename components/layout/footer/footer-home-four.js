/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function FooterHomeFour() {
  return (
    <footer
      className="fugu--foote2-section"
      style={{ backgroundImage: "url(/images/all-img/v4/footer-bg.png)" }}
    >
      <div className="container">
        <div className="fugu--footer-top">
          <div className="fugu--default-content content-black">
            <h2 className="wow fadeInUpX" data-wow-delay="0s">
              Start Selling Your Creations Today
            </h2>
            <p className="wow fadeInUpX" data-wow-delay="0.15s">
              This is your chance to turn your passion into profit. Join our
              platform today and start selling your creations today. You’ll love
              how simple and powerful it is. Just click the button below and get
              started now.
            </p>
            <div
              className="fugu--btn-wrap wow fadeInUpX"
              data-wow-delay="0.25s"
            >
              <Link
                href={"https://dashboard.suqlink.com/register"}
                legacyBehavior
              >
                <a className="fugu--btn bg-orange">Get Started</a>
              </Link>
            </div>
            <div className="fugu--star">
              <img src="/images/all-img/v4/star-black.png" alt="" />
            </div>
          </div>
        </div>
        <div className="fugu--footer-middle">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="fugu--footer-logo">
                <img src="/images/logo/logo-black.svg" alt="" />
              </div>
            </div>
            {/* <div className="col-xl-6 col-lg-8">
              <div className="fugu--footer-menu2">
                <ul>
                  <li>
                    <Link href={"#"}> Demos </Link>
                  </li>
                  <li>
                    <Link href={"about-us"}> About Us </Link>
                  </li>
                  <li>
                    <Link href={"#"}> Collections </Link>
                  </li>
                  <li>
                    <Link href={"#"}> Pages </Link>
                  </li>
                  <li>
                    <Link href={"contact"}> Contact </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div className="col-xl-3 col-lg-2">
              <div className="fugu--social-icon fugu--social-icon2">
                <ul>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/twitter.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/facebook.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <img src="/images/social2/github.svg" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        <div className="fugu--footer-bottom fugu--footer-bottom2">
          <div className="row">
            <div className="col-lg-6">
              <p>&copy; Copyright 2023, All Rights Reserved by SUQLINK</p>
            </div>
            <div className="col-lg-6">
              <div className="fugu--footer-menu">
                <ul>
                  <li>
                    <Link href={"#"}> Terms </Link>
                  </li>
                  <li>
                    <Link href={"#"}> Privacy Policy </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
