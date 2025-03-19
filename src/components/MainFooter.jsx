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
    const sendEmail = handleSubmit(async (data) => {
      setIsDisabled(true);
      const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY;
  
      const messagePayload = {
          email: data.email,
          attributes: {
              firstName: data.firstName,
              lastName: data.lastName,
          },
          emailBlacklisted: false,
          smsBlacklisted: false,
          listIds: [6], // Adjust the list ID as needed
          updateEnabled: false,
      };
  
      const emailOptions = {
          sender: {
              name: "Haulway Team",
              email: "support@haulway.com",
          },
          to: [
              {
                  email: data.email,
                  name: `${data.firstName} ${data.lastName}`,
              },
          ],
          subject: "Thank You for Joining the Haulway Waitlist!",
          htmlContent: `
              <!DOCTYPE html>
              <html>
              <body>
                  <h1>Welcome to Haulway!</h1>
                  <p>Dear ${data.firstName},</p>
                  <p>Thank you for joining our waitlist. We'll keep you updated on the latest developments and opportunities.</p>
                  <p>Best regards,<br>The Haulway Team</p>
              </body>
              </html>
          `,
      };
  
      let brevoSuccess = false;
  
      try {
          // Attempt to send contact to Brevo
          const brevoContactRes = await axios.post(
              "https://api.brevo.com/v3/contacts",
              messagePayload,
              {
                  headers: {
                      "api-key": BREVO_API_KEY,
                      "Content-Type": "application/json",
                  },
              }
          );
          if (brevoContactRes.status === 201) {
              brevoSuccess = true;
  
              // Attempt to send email via Brevo
              await axios.post(
                  "https://api.brevo.com/v3/smtp/email",
                  emailOptions,
                  {
                      headers: {
                          "api-key": BREVO_API_KEY,
                          "Content-Type": "application/json",
                      },
                  }
              );
          }
      } catch (error) {
          console.error("Brevo error:", error);
          // **Do not show error alert**, just log the error
      }
  
      try {
          // Always submit to /website/register, regardless of Brevo success
          const registerRes = await axios.post(`${API_URL}/website/register`, data);
  
          if (registerRes.status === 200 || registerRes.status === 201) {
              setSuccessErrMsg(registerRes.data.message);
              window.xuiAnimeStart('successAlert');
              setTimeout(() => {
                  window.xuiAnimeEnd('successAlert');
                  reset();
                  window.xuiModalShow('thanks-modal');
                  handleClick();
              }, 3200);
        }
      } catch (error) {
          console.error("Website register error:", error);
          setValidationErrMsg(error.response?.data?.message || "An error occurred. Please try again.");
          window.xuiAnimeStart('errorAlert');
          setTimeout(() => {
              window.xuiAnimeEnd('errorAlert');
          }, 3200);
      } finally {
          setIsDisabled(false);
      }
  });
  
    // const sendEmail = (fields) => {
    //     const newData = { ...fields };
    //     console.log(newData);
    //     setIsDisabled(true);
    //     axios({
    //         method: "POST",
    //         url: `${API_URL}/website/register`,
    //         data: newData
    //     })
    //     .then((res) => {
    //         console.log(res);
    //         setSuccessErrMsg(res.data.message);
    //         window.xuiAnimeStart('successAlert');
    //         setTimeout(() => {
    //             window.xuiAnimeEnd('successAlert');
    //             reset();
    //             window.xuiModalShow('thanks-modal');
    //             handleClick();
    //             setIsDisabled(false);
    //         }, 3200);
    //     }, (err) => {
    //         console.log(err);
    //         setIsDisabled(false);
    //         setValidationErrMsg(err.response.status === 422 ? err.response.data.data[0].msg : err.response.status === 422 ? err.response.data.data[0].msg : err.response.data.message);
    //         window.xuiAnimeStart('errorAlert');
    //         setTimeout(() => {
    //             window.xuiAnimeEnd('errorAlert');
    //         }, 3200);
    //     });
    // }
    return (
        <>
        <section className="main-footer xui-lg-py-3 xui-py-2 xui-container">
            <div>
                <h1 className='haulway-heading-text xui-line-height-6-half xui-lg-font-sz-500 xui-font-sz-180 xui-font-w-500'>
                    GET STARTED WITH <br /> <span className='xui-font-w-700'>HAULWAY TODAY!</span>
                </h1>
            </div>
            <div className='xui-row xui-lg-mt-4 xui-mt-2'>
                <div className='xui-lg-col-7 xui-col-12 xui-lg-pr-3 xui-pr-none'>
                    <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-600'>CONTACT US</p>
                    <p className='xui-lg-font-sz-90 xui-font-sz-85 xui-font-w-600 xui-mt-1'><span className='xui-mr-half'>contact@haulway.co</span> / <span className='xui-ml-half'>+44 7441359374</span></p>
                </div>
                <div className='xui-lg-col-5 xui-col-12 xui-lg-pt-none xui-pt-2'>
                    <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-600'>QUICK LINKS</p>
                    <p className='xui-d-flex xui-flex-ai-center xui-flex-jc-space-between xui-lg-font-sz-90 xui-font-sz-85 xui-font-w-600 xui-line-height-1-half xui-mt-1'><Link to='/' className='xui-text-dc-none xui-text-black'>Home</Link> / <Link to='explore' className='xui-text-dc-none xui-text-black'>Explore</Link> / <Link to='features' className='xui-text-dc-none xui-text-black'>Features</Link> / <Link to='privacy/policy' className='xui-text-dc-none xui-text-black'>Privacy Policy</Link> / <Link to='terms-and-conditions' className='xui-text-dc-none xui-text-black'>Terms & Conditions</Link></p>
                </div>
            </div>
            <div className='xui-row xui-flex-ai-flex-end xui-lg-mt-4 xui-mt-2'>
                <div className='xui-lg-col-7 xui-col-12 xui-lg-pr-3 xui-pr-none'>
                    <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-600'>INFO</p>
                    <p className='xui-lg-w-fluid-90 xui-w-fluid-100 xui-lg-font-sz-90 xui-font-sz-85 xui-font-w-600 xui-mt-1 xui-line-height-1-half'>Haulway is a trademark licensed from Haulscape Technologies Ltd. The platform, its technology, and operations are independently developed and managed by Grascope Industries Ltd. This ensures a seamless experience for our users while maintaining brand continuity under a structured agreement.</p>
                    {/* <p className='xui-lg-font-sz-90 xui-font-sz-85 xui-font-w-600 xui-mt-1 xui-line-height-1-half xui-text-dc-underline'>© {new Date().getFullYear()} Haulway. Haulway is a trademark of Haulscape Technologies Ltd. <i>UK-RC:15245660</i>, <br /> a Grascope Industries company.</p> */}
                </div>
                <div className='xui-lg-col-5 xui-col-12'>
                    <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-600 xui-lg-pt-none xui-pt-2'>FOLLOW US</p>
                    <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1 xui-mt-1'>
                        <Link to='https://x.com/haulwayglobal'><XIcon /></Link>
                        <Link to='https://www.facebook.com/share/cs331aVbCEYRdMXe/'><FacebookIcon /></Link>
                        <Link to='https://www.instagram.com/haulwayglobal?igsh=MWw5aGowcWgzbjZlNg=='><InstagramIcon /></Link>
                    </div>
                </div>
            </div>
            <div className='xui-row xui-lg-mt-4 xui-mt-2'>
                <div className='xui-lg-col-7 xui-col-12 xui-lg-pr-3 xui-pr-none'>
                    <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-600'>RC Number</p>
                    <p className='xui-lg-font-sz-90 xui-font-sz-85 xui-font-w-600 xui-mt-1 xui-line-height-1-half xui-text-dc-underline'>© {new Date().getFullYear()} Haulway. Haulway is a trademark of Haulscape Technologies Ltd. <i>UK-RC:15245660</i>, <br /> a Grascope Industries company.</p>
                    {/* <p className='xui-lg-font-sz-90 xui-font-sz-85 xui-font-w-600 xui-mt-1 xui-line-height-1-half xui-text-dc-underline'>© {new Date().getFullYear()} Haulway. Haulway is a trademark of Haulscape Technologies Ltd. <i>UK-RC:15245660</i>, <br /> a Grascope Industries company.</p> */}
                </div>
                <div className='xui-lg-col-5 xui-col-12 xui-lg-pt-none xui-pt-2'>
                    <p className=' xui-lg-font-sz-90 xui-font-sz-85 xui-font-w-600 xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half xui-flex-dir-column xui-flex-jc-center '>FROM <Link className='xui-d-inline-block' to='https://www.grascope.com/' target='_blank'><img className='xui-img-70' src={GrascopeLogo} alt="" /></Link></p>
                </div>
            </div>
            {/* <div className='xui-lg-mt-4 xui-mt-2'>
                <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-font-w-600'>ABOUT US</p>
                <p className='xui-lg-font-sz-90 xui-font-sz-85 xui-font-w-600 xui-mt-1 xui-opacity-6 xui-line-height-1-half'>Haulway is a trademark licensed from Haulscape Technologies Ltd. The platform, its technology, and operations are independently developed and managed by Grascope Industries Ltd. This ensures a seamless experience for our users while maintaining brand continuity under a structured agreement.</p>
            </div>
            <div className='xui-text-center xui-p-1-half xui-bdr-rad-2 xui-bg-black xui-text-white xui-lg-mt-4 xui-mt-2'>
                <p className='xui-lg-font-sz-100 xui-font-sz-60 xui-font-w-500 xui-d-inline-flex xui-flex-ai-center xui-grid-gap-half'>&copy; {new Date().getFullYear()} Powered by <Link className='xui-d-inline-block' to='https://www.grascope.com/' target='_blank'><img className='xui-img-80' src={GrascopeLogo} alt="" /></Link>- All right reserved</p>
            </div> */}
        </section>
        <ThankYouModal />
        <ErrorAlert name={`errorAlert`} message={validationErrMsg} />
        <SuccessAlert name={`successAlert`} message={successErrMsg} noIcon={true} />
        </>
    );
};

export default MainFooter;