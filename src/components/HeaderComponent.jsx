import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppDownload from "../assets/media/images/app-download.png";
import PlayDownload from "../assets/media/images/play-download.png";
import LazyImage from "../assets/media/images/bgs/image-loading.png";
import Stroke from './icons/Stroke';

const HeaderComponent = (props) => {
    const { children, paragraph, isDownload, image, customClass, isReversed } = props;
    useEffect(() => {
        window.xuiScrollOnAnimation();
        window.xuiLazyLoadings();
    });
    return (
        <div className={`xui-row ${isReversed ? 'xui-flex-dir-row-reverse' : ''}`}>
            <div xui-aos="fade-left" xui-aos-duration=".8" xui-aos-once="true" className='xui-lg-col-6 xui-col-12'>
                <h1 className='haulway-heading-text xui-line-height-2-half xui-lg-font-sz-350 xui-font-sz-180 xui-font-w-500'>{children}</h1>
                {isDownload ? (
                    <div className='xui-d-flex xui-lg-flex-jc-flex-end xui-flex-jc-center xui-pb-1 xui-lg-pr-8 xui-pr-1 stroke'>
                        <Stroke />
                    </div>
                ) : ''}
                {/* <h1 className='haulway-heading-text xui-font-sz-350 xui-font-w-500'>{children}</h1> */}
                <p className='xui-mt-1 xui-lg-font-sz-100 xui-font-sz-90 xui-opacity-8 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half'>{paragraph}</p>
                {isDownload ? (
                    <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mt-1-half'>
                        <Link to='/construction' className='xui-d-inline-block xui-text-dc-none'><img src={AppDownload} className='xui-lg-img-200 xui-img-150' alt="" /></Link>
                        <Link to='/construction' className='xui-d-inline-block xui-text-dc-none'><img src={PlayDownload} className='xui-lg-img-200 xui-img-150' alt="" /></Link>
                    </div>
                ) : (
                    <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mt-1-half'>
                        <Link to='/contact' className='xui-text-dc-none xui-text-white xui-py-1 xui-bdr-rad-half xui-px-1-half xui-bg-black xui-lg-font-sz-100 xui-font-sz-90'>Get Started</Link>
                    </div>
                )}
            </div>
            <div xui-aos="fade-right" xui-aos-duration=".8" xui-aos-delay=".25" xui-aos-once="true"  className='xui-lg-col-6 xui-col-12 xui-lg-mt-none xui-mt-2'>
                <img src={image} className={`xui-mx-auto ${customClass}`} alt="" />
            </div>
        </div>
    );
};

export default HeaderComponent;