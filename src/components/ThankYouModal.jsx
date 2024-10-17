import React from 'react';
import { Link } from 'react-router-dom';
import BlurIn from '../components/magicui/blur-in';

const ThankYouModal = () => {
    return (
        <section className="xui-modal gbx-thank-you-modal" disable-click-on-outside={'true'} xui-modal={'thanks-modal'}>
            <div className="xui-pos-relative xui-modal-content">
                <div className="xui-text-center xui-py-2 xui-lg-py-5 xui-px-1">
                    <BlurIn
                        word="You have successfully registered!"
                        className="xui-font-sz-200 xui-lg-font-sz-300"
                    />
                    <p className='xui-opacity-8 xui-mt-2 xui-font-sz-105 xui-lg-font-sz-125 xui-mx-auto xui-text-center xui-lg-w-fluid-60 xui-line-height-1-half'> Thank you for joining us, You will be sent an email shortly!</p>
                    <div className='xui-grid-gap-1 xui-mt-2'>
                        <button style={{"backgroundColor": "transparent"}} className="xui-btn-block xui-bdr-black xui-bdr-w-1 xui-bdr-style-solid xui-font-sz-90" xui-modal-close={'thanks-modal'}>Close</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThankYouModal;