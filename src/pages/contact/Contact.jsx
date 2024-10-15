import React from 'react';
import ContactCard from './components/ContactCard';

const Contact = () => {
    return (
        <section className="xui-lg-py-3 xui-py-1 xui-container">
            <div className='xui-text-center'>
                <h3 className='xui-lg-font-sz-300 xui-font-sz-250 xui-font-w-500'>Get in Touch Anytime</h3>
                <p className='xui-mt-1 xui-lg-font-sz-100 xui-font-sz-90 xui-opacity-8'>Have questions or need support? Contact us, and we'll respond promptly.</p>
            </div>
            <div className='xui-mt-3 xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1 faq-holder'>
                <ContactCard heading="Contact Us Via WhatsApp Message" paragraph="Reach out to us instantly via WhatsApp for quick assistance, personalized support & inquiries." isWhatsapp={true} />
                <ContactCard heading="Get In Touch With Us Via A Quick Call" paragraph="Connect with us effortlessly through a quick call to discuss your needs and explore solutions." isPhone={true} />
                <ContactCard heading="Contact Us Via Email Message" paragraph="Have questions or need support? Reach out to us via email for inquiries or detailed information." isEmail={true} />
            </div>
        </section>
    );
};

export default Contact;