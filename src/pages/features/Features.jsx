import HeaderComponent from "../../components/HeaderComponent";
import FeaturesHeaderImage from "../../assets/media/images/bgs/features-header-image.jpg";
import Feature1HeaderImage from "../../assets/media/images/bgs/feature1-header-image.jpg";
import Phone1 from "../../assets/media/images/bgs/phone1.png";
import Phone2 from "../../assets/media/images/bgs/phone2.png";
import Phone3 from "../../assets/media/images/bgs/phone3.jpg";
import Phone4 from "../../assets/media/images/bgs/phone4.jpg";
import Stroke1 from "../../assets/media/images/bgs/gradient-stroke1.png";
import Stroke2 from "../../assets/media/images/bgs/gradient-stroke2.png";
import Stroke3 from "../../assets/media/images/bgs/gradient-stroke3.png";
import IconRight from "../../components/icons/IconRight";
import IconLeft from "../../components/icons/IconLeft";

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Features() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const headerSwiperInstance = useRef(null);  // Reference to the Swiper instance

  const totalSlides = 5;

  // Handle next and previous slide
  const handlePrevSlide = () => {
    if (headerSwiperInstance.current) {
      headerSwiperInstance.current.slidePrev();  // Go to previous slide
    }
  };

  const handleNextSlide = () => {
    if (headerSwiperInstance.current) {
      headerSwiperInstance.current.slideNext();  // Go to next slide
    }
  };

  return (
    <>
      <section className="xui-lg-py-3 xui-py-1 xui-container">
        <Swiper 
          onSwiper={(swiper) => {
            headerSwiperInstance.current = swiper;  // Store the swiper instance
          }}
          slidesPerView={1}
          autoHeight={true}
          onSlideChange={(swiper) => {
            setActiveSlideIndex(swiper.activeIndex);  // Update the active slide index
            window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to the top when the slide changes
          }}
          className="features-swiper"
        >
          <SwiperSlide>
            <HeaderComponent 
              image={FeaturesHeaderImage} 
              customClass="xui-img-450" 
              paragraph="Haulway provides creators with powerful tools to negotiate terms with vendors and monetize their influence, offering a unique opportunity to transform creativity into income."
              isDownload={false}
            >
              <div className="xui-lg-d-block xui-d-none">
                <p>Sell Globally—</p> 
                <p>Streamline With</p> 
                <p>Ease.</p>
              </div>
              <div className="xui-lg-d-none xui-d-block">
                <p>Sell Globally—</p> 
                <p>Streamline With</p> 
                <p>Ease.</p>
              </div>
            </HeaderComponent>
          </SwiperSlide>
          <SwiperSlide>
            <HeaderComponent 
              image={Feature1HeaderImage} 
              customClass="xui-img-600" 
              paragraph="Haulway provides creators with powerful tools to negotiate terms with vendors and monetize their influence."
              isDownload={false}
            >
              <div className="xui-lg-d-block xui-d-none">
                <p>Monetize Your</p> 
                <p>Creativity and</p> 
                <p>Break Limits</p>
              </div>
              <div className="xui-lg-d-none xui-d-block">
                <p>Monetize Your</p> 
                <p>Creativity and Break</p> 
                <p>Limits</p>
              </div>
            </HeaderComponent>
          </SwiperSlide>
          <SwiperSlide>
            <div className="xui-bg-black xui-pos-relative xui-z-index-1 xui-mb-1 xui-text-white xui-pt-1-half xui-px-1-half xui-bdr-rad-1">
                <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-1">
                    <div>
                        <h3 className="xui-lg-font-sz-200 xui-font-sz-200 xui-font-w-500 xui-line-height-2-half">A Gateway for African Creatives to the World</h3>
                    </div>
                    <div>
                        <p className="xui-mt-1 xui-lg-font-sz-100 xui-font-sz-90 xui-opacity-8 xui-w-fluid-100 xui-line-height-1-half">While Haulway serves creators globally, it's also a key platform that connects Africa’s creatives to the global market, providing a seamless platform to earn in USD and withdraw locally, empowering them to expand internationally.</p>
                    </div>
                </div>
                <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-4 xui-mt-2">
                    <div xui-aos="fade-up" xui-aos-duration=".8" className="xui-bg-white xui-text-black half-radius xui-d-flex xui-flex-dir-column">
                        <div className="xui-p-1">
                            <h3 className="xui-font-sz-150 xui-font-w-600">Earn in USD</h3>
                            <p className="xui-mt-1 xui-lg-w-fluid-80 xui-w-fluid-100 xui-lg-font-sz-100 xui-font-sz-90 xui-opacity-8 xui-w-fluid-100 xui-line-height-1-half">Maximize your earnings with the ability to negotiate in global currencies.</p>
                        </div>
                        <img src={Phone1} xui-aos-once="true" className="xui-lg-img-250 xui-img-200 xui-flex-as-flex-end" alt="" />
                    </div>
                    <div xui-aos="fade-up" xui-aos-duration=".8" xui-aos-delay=".25" xui-aos-once="true" className="xui-bg-white xui-text-black half-radius xui-d-flex xui-flex-dir-column">
                        <div className="xui-p-1">
                            <h3 className="xui-font-sz-150 xui-font-w-600">Withdraw in Local Currency</h3>
                            <p className="xui-mt-1 xui-lg-w-fluid-80 xui-w-fluid-100 xui-lg-font-sz-100 xui-font-sz-90 xui-opacity-8 xui-w-fluid-100 xui-line-height-1-half">Powered by our payment system, withdraw your earnings with ease, no matter where you're located.</p>
                        </div>
                        <img src={Phone2} className="xui-img-350 xui-flex-as-flex-end" alt="" />
                    </div>
                </div>
                <img className="xui-pos-absolute gradient-stroke stroke1 xui-z-index--1" src={Stroke1} alt="" />
                <img className="xui-pos-absolute gradient-stroke stroke2 xui-z-index--1" src={Stroke2} alt="" />
                <img className="xui-pos-absolute gradient-stroke stroke3 xui-z-index--1" src={Stroke3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <HeaderComponent 
              image={Phone3} 
              customClass="xui-img-500" 
              paragraph="With Haulway, you can easily reach a global market and grow your brand, whether you're selling products or building your influence. Haulway makes it simple to connect with buyers, partners, and collaborators from across the globe."
              isDownload={false}
              isReversed={true}
            >
              <div className="xui-lg-d-block xui-d-none">
                <p>Showcase Your</p> 
                <p>Talent to the</p> 
                <p>World!</p>
              </div>
              <div className="xui-lg-d-none xui-d-block">
                <p>Showcase Your</p> 
                <p>Talent to the</p> 
                <p>World!</p>
              </div>
            </HeaderComponent>
          </SwiperSlide>
          <SwiperSlide>
            <HeaderComponent 
              image={Phone4} 
              customClass="xui-img-500" 
              paragraph="Unlock easy monetization and smooth negotiation tools for creators and influencers at Haulway. Build strong, profitable partnerships with ease, streamlining every step from collaboration to payment, all in one secure platform."
              isDownload={false}
              isReversed={true}
            >
              <div className="xui-lg-d-block xui-d-none">
                <p>Easy Earnings,</p> 
                <p>Seamless</p> 
                <p>Partnerships</p>
              </div>
              <div className="xui-lg-d-none xui-d-block">
                <p>Easy Earnings,</p> 
                <p>Seamless</p> 
                <p>Partnerships</p>
              </div>
            </HeaderComponent>
          </SwiperSlide>
        </Swiper>
        
        {/* Navigation Buttons */}
        <div className="xui-d-flex xui-flex-ai-center xui-flex-jc-space-between xui-mt-1">
          <div 
            className={`nav-btn custom-prev-button xui-cursor-pointer ${activeSlideIndex === 0 ? 'xui-visibility-hidden' : 'active'}`} 
            onClick={handlePrevSlide}
          >
            <IconLeft />
          </div>
          <div 
            className={`nav-btn custom-next-button xui-cursor-pointer ${activeSlideIndex === totalSlides - 1 ? 'xui-visibility-hidden' : 'active'}`} 
            onClick={handleNextSlide}
          >
            <IconRight />
          </div>
        </div>
      </section>
    </>
  );
}
