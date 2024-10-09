import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppDownload from "../assets/media/images/app-download.png";
import PlayDownload from "../assets/media/images/play-download.png";

const HeaderComponent = (props) => {
    const { children, paragraph, isDownload, image } = props;
    useEffect(() => {
        window.xuiScrollOnAnimation();
        window.xuiLazyLoadings();
    });
    return (
        <div className='xui-row'>
            <div xui-aos="fade-left" xui-aos-duration=".8" className='xui-lg-col-6 xui-col-12'>
                <h1 className='haulway-heading-text xui-font-sz-350 xui-font-w-500'>{children}</h1>
                {/* <h1 className='haulway-heading-text xui-font-sz-350 xui-font-w-500'>{children}</h1> */}
                <p className='xui-mt-1 xui-font-sz-100 xui-opacity-8 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half'>{paragraph}</p>
                {isDownload ? (
                    <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mt-1-half'>
                        <Link to='/' className='xui-d-inline-block xui-text-dc-none'><img src={AppDownload} className='xui-img-200' alt="" /></Link>
                        <Link to='/' className='xui-d-inline-block xui-text-dc-none'><img src={PlayDownload} className='xui-img-200' alt="" /></Link>
                    </div>
                ) : (
                    <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mt-1-half'>
                        <p>Button gpes here</p>
                    </div>
                )}
            </div>
            <div xui-aos="fade-right" xui-aos-duration=".8" xui-aos-delay=".25"  className='xui-lg-col-6 xui-col-12'>
                <img src={image} className='xui-img-600' alt="" />
            </div>
        </div>
    );
};

export default HeaderComponent;