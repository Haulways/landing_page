import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    const { heading, paragraph, isWhatsapp, isPhone, isEmail } = props;
    useEffect(() => {
        window.xuiScrollOnAnimation();
        window.xuiLazyLoadings();
    });
    return (
        <div xui-aos="fade-left" xui-aos-duration=".8" className=' xui-bdr-rad-half xui-text-white'>
            <div className={`haulway-bg-light-dark xui-p-2`} style={{"borderTopRightRadius": ".5rem", "borderTopLeftRadius": ".5rem"}}>
                <p className='xui-lg-font-sz-150 xui-font-sz-90 xui-font-w-600 xui-line-height-1-half xui-lg-w-fluid-80 xui-w-fluid-100'>{heading}</p>
            </div>
            <div className={`xui-bg-black xui-p-2`} style={{"borderBottomRightRadius": ".5rem", "borderBottomLeftRadius": ".5rem"}}>
                <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-opacity-8 xui-line-height-1-half'>{paragraph}</p>
                <div className='xui-mt-7 xui-d-flex xui-flex-jc-center xui-flex-ai-center'>
                    {isWhatsapp ? (
                        <Link to='https://wa.me/447441395374' className='xui-btn xui-px-5 xui-bg-white xui-text-black xui-bdr-rad-half xui-font-w-600'>Contact us</Link>
                    ) : isPhone ? (
                        <Link to={"tel:+447441395374"} className='xui-btn xui-px-5 xui-bg-white xui-text-black xui-bdr-rad-half xui-font-w-600'>Contact us</Link>
                    ) : isEmail ? (
                        <Link to="mailto:contact@haulway.co" className='xui-btn xui-px-5 xui-bg-white xui-text-black xui-bdr-rad-half xui-font-w-600'>Contact us</Link>
                    ) : ''}
                </div>
            </div>
        </div>
    );
};

export default ContactCard;