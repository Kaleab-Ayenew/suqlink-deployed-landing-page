/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AboutSection() {
  return (
    <div className="fugu--about-section">
      <div className="container">
        <div className="row">
          {/* <div className="col-xl-4 col-lg-4">
            <div className="fugu--swiper-slider-wrap">
              <div className="fugu--swiper-slider">
                
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="fugu--card-wrap fugu--card2">
                        <div className="fugu--card-thumb">
                          <img src="/images/all-img/v4/card4.jpg" alt="" />
                        </div>
                        <div className="fugu--card-data">
                          <h3>Monkey Cowboy</h3>
                          <p>
                            <img src="/images/all-img/v4/daimond.png" alt="" />{" "}
                            0.438 ETH
                          </p>
                          <div className="fugu--card-footer">
                            <div className="fugu--card-footer-data">
                              <h4>By Cooper</h4>
                            </div>
                            <button
                              className="fugu--btn btn-sm fugu--tigger dark-btn"
                              type="button"
                            >
                              <img
                                className="black-heart"
                                src="/images/svg2/heart-black.svg"
                                alt=""
                              />
                              <img
                                className="red-heart"
                                src="/images/svg2/heart-red.svg"
                                alt=""
                              />
                              10K
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="fugu--card-wrap fugu--card2">
                        <div className="fugu--card-thumb">
                          <img src="/images/all-img/v4/card2.jpg" alt="" />
                        </div>
                        <div className="fugu--card-data">
                          <h3>Attitude Ape</h3>
                          <p>
                            <img src="/images/all-img/v4/daimond.png" alt="" />
                            0.438 ETH
                          </p>
                          <div className="fugu--card-footer">
                            <div className="fugu--card-footer-data">
                              <h4>By Howard</h4>
                            </div>
                            <button
                              className="fugu--btn btn-sm fugu--tigger"
                              type="button"
                            >
                              <img
                                className="black-heart"
                                src="/images/svg2/heart-black.svg"
                                alt=""
                              />
                              <img
                                className="red-heart"
                                src="/images/svg2/heart-red.svg"
                                alt=""
                              />
                              Likes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="fugu--card-wrap fugu--card2">
                        <div className="fugu--card-thumb">
                          <img src="/images/all-img/v4/card3.jpg" alt="" />
                        </div>
                        <div className="fugu--card-data">
                          <h3>Ape Mutant</h3>
                          <p>
                            <img src="/images/all-img/v4/daimond.png" alt="" />{" "}
                            0.438 ETH
                          </p>
                          <div className="fugu--card-footer">
                            <div className="fugu--card-footer-data">
                              <h4>0.194 ETH</h4>
                            </div>
                            <button
                              className="fugu--btn btn-sm fugu--tigger dark-btn"
                              type="button"
                            >
                              <img
                                className="black-heart"
                                src="/images/svg2/heart-black.svg"
                                alt=""
                              />
                              <img
                                className="red-heart"
                                src="/images/svg2/heart-red.svg"
                                alt=""
                              />
                              2K
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide">
                      <div className="fugu--card-wrap fugu--card2">
                        <div className="fugu--card-thumb">
                          <img src="/images/all-img/v4/card1.jpg" alt="" />
                        </div>
                        <div className="fugu--card-data">
                          <h3>ApeSmilling</h3>
                          <p>
                            <img src="/images/all-img/v4/daimond.png" alt="" />{" "}
                            0.438 ETH
                          </p>
                          <div className="fugu--card-footer">
                            <div className="fugu--card-footer-data">
                              <h4>By Jenny</h4>
                            </div>
                            <button
                              className="fugu--btn btn-sm fugu--tigger"
                              type="button"
                            >
                              <img
                                className="black-heart"
                                src="/images/svg2/heart-black.svg"
                                alt=""
                              />
                              <img
                                className="red-heart"
                                src="/images/svg2/heart-red.svg"
                                alt=""
                              />
                              18K
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="fugu--double-star">
                <img src="/images/all-img/v4/double-star.png" alt="" />
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="fugu--default-content content-black">
              <h2>We Make Selling Online Simple</h2>
              <p>
                We are a platform that enables you to sell your digital products
                online in a simple and fast way. You don’t need a website, a
                store, or any technical skills. You just need to create a link,
                share it with your customers, and collect your earnings. You can
                sell anything from video lessons to monthly subscriptions,
                physical products, and more. You have full control over your
                pricing, delivery, and customer service.
              </p>
              <div className="fugu--btn-wrap">
                <Link
                  href={"https://dashboard.suqlink.com/register"}
                  legacyBehavior
                >
                  <a className="fugu--btn bg-orange">Start Selling</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
