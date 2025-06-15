import Image from "next/image";
import React, { createRef } from "react";
import Slider from "react-slick";
import styles from "./OurPortfolio.module.css";

const OurPortfolio = () => {
  //creating the ref
  const portfolioSlider = createRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const gotoNext = () => {
    portfolioSlider.current.slickNext()
  }

  const gotoPrev = () => {
    portfolioSlider.current.slickPrev()
  }

  return (
    <div className={styles.OurPortfolio}>
      <h2>Our Portfolio</h2>

      <Slider {...settings} ref={portfolioSlider}>
        <div className={styles.PortfolioCarousel}>
          <div className="row d-flex align-items-center">
            <div
              className={`col-lg-6 col-md-12 col-sm-12 ${styles.NftTextCardText}`}
            >
              <h3> Jumy</h3>
              <p>
                A community-based platform to buy and sell digital assets from
                the world’s most talented artists. The platform lets users
                create, collect and discover thousands of digital artworks in a
                few taps.
              </p>

              <div className={styles.nftSliderButton}>
                <button onClick={() => gotoPrev()}>
                  <i class="fa-solid fa-angle-left"></i>
                </button>
                <button onClick={() => gotoNext()}>
                  <i class="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
            <div
              className={`col-lg-6 col-md-12 col-sm-12 ${styles.NftTextCardImage}`}
            >
              <Image
                width="665"
                height="385"
                src={"/images/OurPortfolio/jumy-laptop-screen.png"}
              />
            </div>
          </div>
        </div>

        <div className={styles.PortfolioCarousel}>
          <div className="row d-flex align-items-center">
            <div
              className={`col-lg-6 col-md-12 col-sm-12 ${styles.NftTextCardText}`}
            >
              <h3>Jumy</h3>
              <p>
                A community-based platform to buy and sell digital assets from
                the world’s most talented artists. The platform lets users
                create, collect and discover thousands of digital artworks in a
                few taps.
              </p>
              <div className={styles.nftSliderButton}>
                <button onClick={() => gotoPrev()}>
                  <i class="fa-solid fa-angle-left"></i>
                </button>
                <button onClick={() => gotoNext()}>
                  <i class="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
            <div
              className={`col-lg-6 col-md-12 col-sm-12 ${styles.NftTextCardImage}`}
            >
              <Image
                width="665"
                height="385"
                src={"/images/OurPortfolio/jumy-laptop-screen.png"}
              />
            </div>
          </div>
        </div>
        <div className={styles.PortfolioCarousel}>
          <div className="row d-flex align-items-center">
            <div
              className={`col-lg-6 col-md-12 col-sm-12 ${styles.NftTextCardText}`}
            >
              <h3> Jumy </h3>
              <p>
                A community-based platform to buy and sell digital assets from
                the world’s most talented artists. The platform lets users
                create, collect and discover thousands of digital artworks in a
                few taps.
              </p>
              <div className={styles.nftSliderButton}>
                <button onClick={() => gotoPrev()}>
                  <i class="fa-solid fa-angle-left"></i>
                </button>
                <button onClick={() => gotoNext()}>
                  <i class="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
            <div
              className={`col-lg-6 col-md-12 col-sm-12 ${styles.NftTextCardImage}`}
            >
              <Image
                width="665"
                height="385"
                src={"/images/OurPortfolio/jumy-laptop-screen.png"}
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default OurPortfolio;
