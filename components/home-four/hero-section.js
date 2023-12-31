import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  return (
    <div
      className="fugu--hero-section fugu--hero-section2"
      style={{ backgroundImage: "url(/images/all-img/v4/hero-bg.png)" }}
    >
      <div className="container">
        <div className="fugu--hero-content fugu--hero-content2">
          <h1 className="wow fadeInUpX" data-wow-delay="0s">
            {/* Discover digital art, collect & sell NFT */}
            Sell Your Creations with Ease
          </h1>
          <p className="wow fadeInUpX" data-wow-delay=".10s">
            Whether you’re a writer, a musician, a designer, or anything in
            between, you can sell your creations with ease using our platform.
            Just create a link, share it with your audience, and get paid
            instantly.
          </p>
          <div
            className="fugu--btn-wrap fugu--hero-btn wow fadeInUpX"
            data-wow-delay=".20s"
          >
            <Link
              href={"https://dashboard.suqlink.com/register"}
              legacyBehavior
            >
              <a className="fugu--btn bg-orange">Start Selling</a>
            </Link>
          </div>
          <div className="fugu--content-star">
            <img src="/images/all-img/v4/star-black-2.png" alt="" />
          </div>
          {/* <div className="fugu--hero-mocup mocup1">
            <img src="/images/all-img/v4/hero-thumb1.png" alt="" />
          </div>
          <div className="fugu--hero-mocup mocup2">
            <img src="/images/all-img/v4/hero-thumb2.png" alt="" />
          </div>
          <div className="fugu--hero-mocup mocup3">
            <img src="/images/all-img/v4/hero-thumb3.png" alt="" />
          </div>
          <div className="fugu--hero-mocup mocup4">
            <img src="/images/all-img/v4/hero-thumb4.png" alt="" />
          </div> */}
        </div>
      </div>
      <div className="fugu--hero-shpae1">
        <img src="/images/shape2/hero-v2-shape1.png" alt="" />
      </div>
      <div className="fugu--hero-shpae2">
        <img src="/images/shape2/hero-v2-shape2.png" alt="" />
      </div>
    </div>
  );
}
