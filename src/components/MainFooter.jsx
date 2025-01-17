import React from 'react';
import { Link } from 'react-router-dom';
import XIcon from './icons/XIcon';
import FacebookIcon from './icons/FacebookIcon';
import GrascopeLogo from "../assets/media/images/grascope-logo.png";
import InstagramIcon from './icons/InstagramIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import { API_URL } from "../../globals.json";
import axios from "axios";
import { useForm } from "react-hook-form";
import ErrorAlert from '../components/alerts/Error';
import SuccessAlert from '../components/alerts/Success';
import { useState } from "react";
import ThankYouModal from "./ThankYouModal";
import confetti from "canvas-confetti";

const MainFooter = () => {
    const { handleSubmit, register, formState: { errors, isValid }, reset } = useForm();
    const [validationErrMsg, setValidationErrMsg] = useState('');
    const [successErrMsg, setSuccessErrMsg] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const handleClick = () => {
        const end = Date.now() + 3 * 1000; // 3 seconds
        const colors = ["#000", "#000", "#000", "#000"];

        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
                zIndex: 2247483646
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
                zIndex: 2247483646
            });

            requestAnimationFrame(frame);
        };

        frame();
    };
    const sendEmail = (fields) => {
        const newData = { ...fields };
        console.log(newData);
        setIsDisabled(true);
        axios({
            method: "POST",
            url: `${API_URL}/website/register`,
            data: newData
        })
        .then((res) => {
            console.log(res);
            setSuccessErrMsg(res.data.message);
            window.xuiAnimeStart('successAlert');
            setTimeout(() => {
                window.xuiAnimeEnd('successAlert');
                reset();
                window.xuiModalShow('thanks-modal');
                handleClick();
                setIsDisabled(false);
            }, 3200);
        }, (err) => {
            console.log(err);
            setIsDisabled(false);
            setValidationErrMsg(err.response.status === 422 ? err.response.data.data[0].msg : err.response.status === 422 ? err.response.data.data[0].msg : err.response.data.message);
            window.xuiAnimeStart('errorAlert');
            setTimeout(() => {
                window.xuiAnimeEnd('errorAlert');
            }, 3200);
        });
    }
    return (
        <>
        <section className="main-footer xui-lg-py-3 xui-py-1 xui-container">
            <div className='xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-1'>
                <div>
                    <h1 className='haulway-heading-text xui-line-height-2-half xui-lg-font-sz-300 xui-font-sz-180 xui-font-w-500'>
                        <p>GET STARTED</p> <p>WITH <span className='xui-font-w-700'>HAULWAY</span></p>
                    </h1>
                </div>
                <form onSubmit={handleSubmit(sendEmail)} autoComplete="off" noValidate>
                    <div className='footer-input-email-holder'>
                        <div className='xui-d-grid xui-grid-col-2 xui-lg-grid-gap-4 xui-grid-gap-2'>
                            <div>
                                <input {...register('firstName', {required: "This field is required"})} type="text" name="firstName" id="firstName" placeholder="First name"/>
                                {errors.firstName && <span className="xui-badge xui-badge-danger xui-d-block xui-w-fluid-100 xui-bdr-rad-2 xui-lg-font-sz-90 xui-font-sz-80 xui-mt-1">{errors.firstName.message}</span>}
                            </div>
                            <div>
                                <input {...register('lastName', {required: "This field is required"})} type="text" name="lastName" id="lastName" placeholder="Last name"/>
                                {errors.lastName && <span className="xui-badge xui-badge-danger xui-d-block xui-w-fluid-100 xui-bdr-rad-2 xui-lg-font-sz-90 xui-font-sz-80 xui-mt-1">{errors.lastName.message}</span>}
                            </div>
                        </div>
                        <div>
                            <input className='xui-mt-1-half' {...register('email', {required: 'Please enter your email', pattern: {value: /^\S+@\S+$/i,message: 'Invalid email address'}})} type="email" name="email" id="email" placeholder="Your email address"/>
                            {errors.email && <span className="xui-badge xui-badge-danger xui-d-block xui-w-fluid-100 xui-bdr-rad-2 xui-lg-font-sz-90 xui-font-sz-80 xui-mt-1">{errors.email.message}</span>}
                        </div>
                        <button type="submit" disabled={isDisabled} className="xui-mt-1-half">{isDisabled ? 'Granting access...' : 'Join Waitlist'}</button>
                        {/* <div className="footer-input-email-holder main-footer-input xui-mt-1">
                            
                            <button type="submit" disabled={isDisabled} className="footer-input-email-btn xui-text-dc-none xui-font-sz-85 xui-mobile-font-sz-65">{isDisabled ? 'Granting access...' : 'Join now'}</button>
                        </div> */}
                    </div>
                </form>
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
                    <p className='xui-lg-font-sz-90 xui-font-sz-85 xui-font-w-600 xui-mt-1 xui-text-dc-underline'>© {new Date().getFullYear()} Haulway. Haulway is a trademark of Haulscape Technologies Ltd., a Grascope Industries company. UK-RC:15245660</p>
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
            <div className='xui-mt-4'>
                <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-600'>ABOUT US</p>
                <p className='xui-lg-font-sz-90 xui-font-sz-85 xui-font-w-600 xui-mt-1 xui-opacity-6 xui-line-height-1-half'>Haulway is the flagship product of Haulscape Technologies Ltd., a subsidiary of Grascope Industries. Grascope oversees innovative solutions across e-commerce, IT, and beyond, driving global impact through its projects.</p>
            </div>
            <div className='xui-text-center xui-p-1-half xui-bdr-rad-2 xui-bg-black xui-text-white xui-mt-4'>
                <p className='xui-lg-font-sz-100 xui-font-sz-60 xui-font-w-500 xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>&copy; {new Date().getFullYear()} Powered by <Link className='xui-d-inline-block' to='https://www.grascope.com/' target='_blank'><img className='xui-img-80' src={GrascopeLogo} alt="" /></Link>- All right reserved</p>
            </div>
        </section>
        <ThankYouModal />
        <ErrorAlert name={`errorAlert`} message={validationErrMsg} />
        <SuccessAlert name={`successAlert`} message={successErrMsg} noIcon={true} />
        </>
    );
};

export default MainFooter;