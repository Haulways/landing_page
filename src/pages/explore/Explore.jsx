import React, { useRef, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import ExploreHeaderImage from "../../assets/media/images/bgs/explore-header-image.jpg";
import HaulsHeaderImage from "../../assets/media/images/bgs/hauls-header-image.jpg";
import LookBookHeaderImage from "../../assets/media/images/bgs/lookbook-header-image.jpg";
import GRWMHeaderImage from "../../assets/media/images/bgs/grwm-header-image.jpg";
import DIYsHeaderImage from "../../assets/media/images/bgs/diys-header-image.jpg";
import IconLeft from "../../components/icons/IconLeft";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Explore() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const headerSwiperInstance = useRef(null); // Reference to the Swiper instance

  // Function to navigate to a specific slide
  const navigateToSlide = (index) => {
    if (headerSwiperInstance.current) {
      headerSwiperInstance.current.slideTo(index); // Go to the specified slide index
    }
  };

  // Handle next and previous slide
  const handlePrevSlide = () => {
    if (headerSwiperInstance.current) {
      headerSwiperInstance.current.slideTo(0); // Go to the first slide
    }
  };

  return (
    <section className="xui-lg-py-7 xui-py-6 xui-container">
      <Swiper
        onSwiper={(swiper) => {
          headerSwiperInstance.current = swiper; // Store the swiper instance
        }}
        slidesPerView={1}
        autoHeight={true}
        onSlideChange={(swiper) => {
          setActiveSlideIndex(swiper.activeIndex); // Update the active slide index
          window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top when the slide changes
        }}
        className="features-swiper"
      >
        <SwiperSlide>
          <HeaderComponent image={ExploreHeaderImage} customClass="xui-img-650" paragraph="Haulway is a unique ecosystem blending social media with commerce. Influencers showcase products, designers sell creations, and users shop directly from content—empowering creators to grow and reach a global audience." isDownload={false}>
            <div className="xui-lg-d-block xui-d-none">
                <p>More Than A</p> <p>Platform: A Global</p> <p>Marketplace for</p> <p>Creativity</p>
            </div>
            <div className="xui-lg-d-none xui-d-block">
                <p>More Than A Platform:</p> <p>A Global Marketplace</p> <p>for Creativity</p>
            </div>
        </HeaderComponent>
        </SwiperSlide>
        <SwiperSlide>
            <HeaderComponent image={HaulsHeaderImage} customClass="xui-img-450" paragraph="Share your latest finds and let your style shine on Haulway. From unique pieces to everyday essentials, show the world what’s in your haul and inspire others with your personal picks. Connect with fellow shoppers, follow influencers, and be part of a community that Value creativity!" isDownload={false}>
                <div className="xui-lg-d-block xui-d-none">
                    <p>Unbox Your</p> <p>Style: Show Off</p> <p>Your Haul!</p>
                </div>
                <div className="xui-lg-d-none xui-d-block">
                    <p>Unbox Your Style:</p> <p>Show Off Your Haul!</p>
                </div>
            </HeaderComponent>
        </SwiperSlide>
        <SwiperSlide>
            <HeaderComponent image={LookBookHeaderImage} customClass="xui-img-450" paragraph="Explore a diverse collection of curated looks and creative outfit ideas. Whether you're looking for everyday inspiration or a special occasion ensemble, our Lookbooks have something for everyone. Start styling today and discover the looks that speak to you!" isDownload={false}>
                <div className="xui-lg-d-block xui-d-none">
                    <p>Elevate Your Style:</p> <p>Get Inspired by </p> <p>Our Lookbooks!</p>
                </div>
                <div className="xui-lg-d-none xui-d-block">
                    <p>Elevate Your Style:</p> <p>Get Inspired by Our</p> <p>Lookbooks!</p>
                </div>
            </HeaderComponent>
        </SwiperSlide>
        <SwiperSlide>
            <HeaderComponent image={GRWMHeaderImage} customClass="xui-img-450" paragraph="Unleash your creativity by showcasing your outfit transformations. Share your journey from casual to chic, and inspire others with your unique flair. Join the Haulway community to connect with fellow fashion enthusiasts and discover fresh ideas for every occasion. Let your style inspire!" isDownload={false}>
                <div className="xui-lg-d-block xui-d-none">
                    <p>Transform Your</p> <p>Look and Spark</p> <p>Inspiration!</p>
                </div>
                <div className="xui-lg-d-none xui-d-block">
                    <p>Transform Your Look</p> <p>and Spark</p> <p>Inspiration!</p>
                </div>
            </HeaderComponent>
        </SwiperSlide>
        <SwiperSlide>
            <HeaderComponent image={DIYsHeaderImage} customClass="xui-img-450" paragraph="Share your unique designs and creative processes to empower fellow fashion enthusiasts. Whether it's a stunning dress or a chic accessory, your DIY journey can spark inspiration and ignite creativity in others. Let's build a community of innovators and style-makers!" isDownload={false}>
                <div className="xui-lg-d-block xui-d-none">
                    <p>Inspire Others</p> <p>with Your DIY</p> <p>Creations!</p>
                </div>
                <div className="xui-lg-d-none xui-d-block">
                    <p>Inspire Others with </p> <p>Your DIY Creations!</p>
                </div>
            </HeaderComponent>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation */}
      <div className="cta-tab-holder">
        <div className="cta-tab-paragraph">
          <p className="xui-lg-font-sz-100 xui-font-sz-90 xui-opacity-8 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half">
            Discover new trends, products, and influencers on Haulway. Explore curated content and uncover your next favorite finds!
          </p>
        </div>
        <div className="cta-tab-btn-holder xui-lg-mt-none xui-mt-2">
          <button 
            className={`cta-tab-btn ${activeSlideIndex === 1 ? 'xui-bg-black xui-text-white' : ''}`} 
            onClick={() => navigateToSlide(1)} // Navigate to Hauls slide
          >
            Hauls
          </button>
          <button 
            className={`cta-tab-btn ${activeSlideIndex === 2 ? 'xui-bg-black xui-text-white' : ''}`} 
            onClick={() => navigateToSlide(2)} // Navigate to LookBook slide
          >
            LookBook
          </button>
          <button 
            className={`cta-tab-btn ${activeSlideIndex === 3 ? 'xui-bg-black xui-text-white' : ''}`} 
            onClick={() => navigateToSlide(3)} // Navigate to GRWM slide
          >
            GRWM
          </button>
          <button 
            className={`cta-tab-btn ${activeSlideIndex === 4 ? 'xui-bg-black xui-text-white' : ''}`} 
            onClick={() => navigateToSlide(4)} // Navigate to DIYs slide
          >
            DIYs
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="xui-d-flex xui-flex-ai-center xui-mt-2">
        <div 
          className={`nav-btn custom-prev-button xui-cursor-pointer ${activeSlideIndex === 0 ? 'xui-visibility-hidden' : 'active'}`} 
          onClick={handlePrevSlide}
        >
          <IconLeft />
        </div>
      </div>
    </section>
  );
}
