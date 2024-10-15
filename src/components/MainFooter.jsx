import React from 'react';
import { Link } from 'react-router-dom';
import XIcon from './icons/XIcon';
import FacebookIcon from './icons/FacebookIcon';
import GrascopeLogo from "../assets/media/images/grascope-logo.png";
import InstagramIcon from './icons/InstagramIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const MainFooter = () => {
    return (
        <section className="main-footer xui-lg-py-3 xui-py-1 xui-container">
            <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-1 xui-flex-ai-flex-end'>
                <div>
                    <h1 className='haulway-heading-text xui-line-height-2-half xui-lg-font-sz-300 xui-font-sz-180 xui-font-w-500'>
                        <p>GET STARTED</p> <p>WITH <span className='xui-font-w-700'>HAULWAY</span></p>
                    </h1>
                </div>
                <div>
                    <p className='xui-mt-1 xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-600'>Get Early Access to the Haulway App</p>
                    <div className="footer-input-email-holder main-footer-input xui-mt-1">
                        <input type="search" placeholder="Your email address"/>
                        <Link to="mailto:contact@haulway.co" className="footer-input-email-btn xui-text-dc-none xui-font-sz-85 xui-mobile-font-sz-65">Join now</Link>
                    </div>
                </div>
            </div>
            <div className='xui-row xui-mt-4'>
                <div className='xui-lg-col-9 xui-col-12'>
                    <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-600'>CONTACT US</p>
                    <p className='xui-lg-font-sz-90 xui-font-sz-85 xui-font-w-600 xui-mt-1'><span className='xui-mr-half'>contact@haulway.co</span> / <span className='xui-ml-half'>+44 7441359374</span></p>
                </div>
                <div className='xui-lg-col-3 xui-col-12 xui-lg-mt-none xui-mt-4'>
                    <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-600'>QUICK LINKS</p>
                    <p className='xui-lg-font-sz-90 xui-font-sz-85 xui-font-w-600 xui-mt-1'><Link to='/' className='xui-mr-half xui-text-dc-none xui-text-black'>Home</Link> / <Link to='explore' className='xui-ml-half xui-text-dc-none xui-text-black'>Explore</Link> / <Link to='features' className='xui-ml-half xui-text-dc-none xui-text-black'>Features</Link></p>
                </div>
            </div>
            <div className='xui-row xui-mt-4'>
                <div className='xui-lg-col-9 xui-col-12'>
                    <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-600'>INFO</p>
                    <p className='xui-lg-font-sz-90 xui-font-sz-85 xui-font-w-600 xui-mt-1 xui-text-dc-underline'>Haulway is a registered trademark of Haulscape Technologies LTD UK-RC:15245660</p>
                </div>
                <div className='xui-lg-col-3 xui-col-12'>
                    <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-600 xui-lg-mt-none xui-mt-4'>FOLLOW US</p>
                    <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mt-1'>
                        <Link to='https://x.com/haulwayglobal'><XIcon /></Link>
                        <Link to='https://www.facebook.com/share/cs331aVbCEYRdMXe/'><FacebookIcon /></Link>
                        <Link to='https://www.instagram.com/haulwayglobal?igsh=MWw5aGowcWgzbjZlNg=='><InstagramIcon /></Link>
                    </div>
                </div>
            </div>
            <div className='xui-text-center xui-p-1-half xui-bdr-rad-2 xui-bg-black xui-text-white xui-mt-4'>
                <p className='xui-lg-font-sz-100 xui-font-sz-60 xui-font-w-500 xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>&copy; 2024 Powered by <Link className='xui-d-inline-block' to='https://www.grascope.com/' target='_blank'><img className='xui-img-80' src={GrascopeLogo} alt="" /></Link>- All right reserved</p>
            </div>
        </section>
    );
};

export default MainFooter;