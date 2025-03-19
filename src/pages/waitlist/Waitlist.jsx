import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CustomDropdown from '../../components/CustomDropddown';
import axios from 'axios';
import ThankYouModal from "../../components/ThankYouModal";
import confetti from "canvas-confetti";
import ErrorAlert from '../../components/alerts/Error';
import SuccessAlert from '../../components/alerts/Success';
import { API_URL } from "../../../globals.json";
import Vendor from "../../assets/media/images/vendor.png";
import Influencer from "../../assets/media/images/influencer.png";
import { useEffect } from 'react';

const Waitlist = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [message, setMessage] = useState({ type: '', text: '' });
    const [step, setStep] = useState(1);
    const [contentTypes, setContentTypes] = useState([]);
    const [struggleAsInfluencerTypes, setStruggleAsInfluencerTypes] = useState([]);
    const [experienceWithBrandsTypes, setExperienceWithBrandsTypes] = useState([]);
    const [typeOfProductsOfferedTypes, setTypeOfProductsOfferedTypes] = useState([]);
    const [biggestChallengesSellingOnlineTypes, setBiggestChallengesSellingOnlineTypes] = useState([]);
    const [experienceWorkingWithInfluencersTypes, setExperienceWorkingWithInfluencersTypes] = useState([]);
    const role = watch('role');
    const [isDisabled, setIsDisabled] = useState(false);
    const [validationErrMsg, setValidationErrMsg] = useState('');
    const [successErrMsg, setSuccessErrMsg] = useState('');

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

    const onSubmit = async (data) => {
        const influencerData = {...data, type_of_content: contentTypes, biggest_struggle_as_influencer: struggleAsInfluencerTypes, experience_with_brand_and_challenges_faced: experienceWithBrandsTypes, interested_in_monetization_ugc_on_haulway: data.interested_in_monetization_ugc_on_haulway === 'yes' ? true : false , open_to_vendor_collaboration_on_haulway: data.open_to_vendor_collaboration_on_haulway === 'yes' ? true : false };
        const vendorData = {...data, type_of_products_or_services_offered: typeOfProductsOfferedTypes, biggest_challenges_in_selling_online: biggestChallengesSellingOnlineTypes, experience_working_with_influencers: experienceWorkingWithInfluencersTypes, open_to_influencer_collaboration_on_haulway: data.open_to_influencer_collaboration_on_haulway === 'yes' ? true : false };
    
        let newData;
        setIsDisabled(true);
    
        if (role === 'influencer') {
            newData = influencerData;
            console.log(newData);
        } else if (role === 'vendor') {
            newData = vendorData
        } else {
            console.error("Invalid role:", role);
            return;
        }
    
        try {
            const res = await axios.post(`${API_URL}/website/register`, newData, {
            });
    
            setSuccessErrMsg(res.data.message);
            window.xuiAnimeStart('successAlert');
            setTimeout(() => {
                window.xuiAnimeEnd('successAlert');
                reset();
                setStep(1);
                window.xuiModalShow('thanks-modal');
                handleClick();
            }, 3200);
        } catch (err) {
            console.error("Website register error:", err);
            setValidationErrMsg(err.response?.data?.message || "An error occurred. Please try again.");
            window.xuiAnimeStart('errorAlert');
            setTimeout(() => {
                window.xuiAnimeEnd('errorAlert');
            }, 3200);
        } finally {
            setIsDisabled(false);
        }
    };    

    const nextStep = () => {
        setStep(step + 1);
        // window.scrollTo({ top: 0, behavior: 'smooth' });
        // Scroll to the waitlist section
        const waitlistSection = document.querySelector('.waitlist-section');
        if (waitlistSection) {
            waitlistSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const prevStep = () => setStep(step - 1);

    // Validate step 1 fields based on role
    const isStep1Valid = () => {
        return role === 'influencer'
            ? ['firstName', 'lastName', 'email'].every(field => watch(field))
            : role === 'vendor'
            ? ['business_name'].every(field => watch(field))
            : false;
    };

    // Validate step 2 fields based on role
    const isStep2Valid = () => {
        if (role === 'influencer') {
            return (
                contentTypes.length > 0 &&
                struggleAsInfluencerTypes.length > 0 &&
                experienceWithBrandsTypes.length > 0 &&
                watch('device_type') &&
                watch('open_to_vendor_collaboration_on_haulway') &&
                watch('interested_in_monetization_ugc_on_haulway')
            );
        } else if (role === 'vendor') {
            // Add vendor-specific validation logic here
            return (
                typeOfProductsOfferedTypes.length > 0 &&
                biggestChallengesSellingOnlineTypes.length > 0 &&
                experienceWorkingWithInfluencersTypes.length > 0 &&
                watch('open_to_influencer_collaboration_on_haulway')
            )
        }
        return false;
    };

    const renderInput = (id, type, placeholder, validation = {}) => (
        <div className="waitlist-section-form-grp">
            <input type={type} id={id} placeholder={placeholder} {...register(id, validation)} />
            {errors[id] && <p className="xui-form-error-msg">{errors[id].message}</p>}
        </div>
    );

    const contentOptions = ['Fashion', 'Beauty', 'Lifestyle', 'Food', 'Technology', 'Fitness', 'Other (please specify)'];
    const struggleAsInfluencerOptions = ['Content creation', 'Audience engagement', 'Monetization/sponsorship', 'Time management', 'Platform algorithm changes', 'Other (please specify)'];
    const experienceWithBrandsOptions = ['No prior experience', 'Limited experience; faced minor communication issues', 'Moderate experience; occasional misalignment', 'Extensive experience; significant negotiation challenges', 'Highly experienced; unresolved complex partnerships.', 'Other (please specify)'];
    const typeOfProductsOfferedOptions = ['Clothing', 'Beauty', 'Footwear', 'Jewelry & Accessory', 'Cosmetics', 'Other (please specify)'];
    const biggestChallengesSellingOnlineOptions = ['Driving traffic and generating leads', 'Converting visitors into buyers', 'Managing inventory and fulfillment', 'Standing out in a competitive market', 'Customer retention and support', 'Other (please specify)'];
    const experienceWorkingWithInfluencersOptions = ['No prior experience', 'Limited experience; faced minor communication issues', 'Moderate experience; occasional misalignment', 'Extensive experience; significant negotiation challenges', 'Highly experienced; unresolved complex partnerships.', 'Other (please specify)'];
    
    useEffect(() => {
        window.xuiScrollOnAnimation();
        window.xuiLazyLoadings();
    });

    return (
        <section className="xui-lg-py-7 xui-py-6 xui-container">
            <div className='xui-text-center'>
                <h1 xui-aos="fade-up" xui-aos-duration=".8" xui-aos-once="true" className='haulway-heading-text xui-line-height-2-half xui-lg-font-sz-350 xui-font-sz-180 xui-font-w-500 xui-lg-w-fluid-60 xui-w-fluid-100 xui-mx-auto'>Exclusive Early Access to Haulway Starts Here!</h1>
                <p xui-aos="fade-up" xui-aos-duration=".8" xui-aos-delay=".25" xui-aos-once="true" className='xui-mt-1 xui-lg-font-sz-100 xui-font-sz-90 xui-opacity-8 xui-lg-w-fluid-50 xui-w-fluid-100 xui-mx-auto xui-line-height-1-half'>Join the waitlist and get exclusive early access to Haulway’s all-in-one platform for seamless shopping, vendor collaborations, affiliate marketing, and more. Don’t miss out—secure your spot today!</p>
            </div>
            <div className='xui-row xui-mt-3'>
                <div xui-aos="fade-left" xui-aos-duration=".8" xui-aos-once="true" className='xui-lg-col-6 xui-col-12'>
                    <div className='xui-d-grid xui-grid-col-2'>
                        <div>
                            <img className='xui-w-fluid-100' src={Vendor} alt="" />
                        </div>
                        <div className='haulway-bg-green xui-bdr-rad-1 xui-d-flex xui-flex-dir-column xui-flex-jc-space-between xui-pt-2 xui-pb-3 xui-px-1'>
                            <h3 className='xui-font-w-500 xui-lg-font-sz-150 xui-font-sz-120'>Vendors</h3>
                            <p className='xui-lg-font-sz-90 xui-font-sz-70'>Haulway is designed to help vendors maximize their sales potential by connecting them with serious buyers and influencers who drive product visibility.</p>
                        </div>
                    </div>
                </div>
                <div xui-aos="fade-right" xui-aos-duration=".8" xui-aos-delay=".25" className='xui-lg-col-6 xui-col-12 xui-lg-pl-half xui-pl-none'>
                    <div className='xui-d-grid xui-grid-col-2'>
                        <div>
                            <img className='xui-w-fluid-100' src={Influencer} alt="" />
                        </div>
                        <div className='haulway-bg-green xui-bdr-rad-1 xui-d-flex xui-flex-dir-column xui-flex-jc-space-between xui-pt-2 xui-pb-3 xui-px-1'>
                            <h3 className='xui-font-w-500 xui-lg-font-sz-150 xui-font-sz-120'>Influencers</h3>
                            <p className='xui-lg-font-sz-90 xui-font-sz-70'>Haulway aims to create a structured and supportive platform for influencers, ensuring they have the resources, opportunities, and fair compensation they need to succeed.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="waitlist-section xui-pt-4 xui-pb-1">
                <h1 className='xui-lg-font-sz-450 xui-font-sz-250 xui-font-w-600'>Join Waitlist</h1>
                <hr className='xui-mt-2 xui-mb-2-half' style={{border: '1px solid #141414'}} />
                <div className='pagination-indicator-holder xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                    <div className={`pagination-indicator ${step === 1 ? 'active' : ''}`}></div>
                    <div className={`pagination-indicator ${step === 2 ? 'active' : ''}`}></div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {step === 1 && (
                        <div className='xui-mt-1'>
                            <h3 className="xui-lg-font-sz-200 xui-font-sz-160">
                                {role === 'influencer' ? 'Personal Information' : role === 'vendor' ? 'Business Information' : 'Personal Information'}
                            </h3>
                            <div className="waitlist-section-form-grp xui-mt-2">
                                <label htmlFor="role">
                                    <select id="role" {...register('role', { required: 'This field is required' })}>
                                        <option value="">Role</option>
                                        <option value="influencer">Influencer</option>
                                        <option value="vendor">Vendor</option>
                                    </select>
                                </label>
                                {errors.role && <p className="xui-form-error-msg">{errors.role.message}</p>}
                            </div>

                            {role && (
                                <>
                                    <div className="xui-mt-2">
                                        <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-2">
                                            {renderInput('firstName', 'text', 'First Name')}
                                            {renderInput('lastName', 'text', 'Last Name')}
                                            {renderInput('email', 'email', 'Email Address', {
                                                required: 'Email is required',
                                                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                                            })}
                                            {renderInput('phoneNumber', 'tel', 'Phone Number (Optional)', {
                                                pattern: { value: /^[0-9]{10,15}$/, message: 'Phone number must be 10–15 digits' }
                                            })}
                                            {role === 'vendor' && (
                                                <>
                                                    {renderInput('business_name', 'text', 'Business Name')}
                                                    {renderInput('business_website', 'text', 'Business Website (Optional)')}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="xui-mt-2">
                                        <h3 className="xui-lg-font-sz-160 xui-font-sz-120">Social Media Handles <span className="haulway-text-inactive xui-font-w-400">(optional)</span></h3>
                                        <div className="xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-2 xui-mt-1-half">
                                            {renderInput('instagram_handle', 'text', 'Instagram')}
                                            {renderInput('instagram_follower_count', 'number', 'Instagram follower count')}
                                            {renderInput('tiktok_handle', 'text', 'Instagram follower count')}
                                            {renderInput('tiktok_follower_count', 'number', 'Tiktok follower count')}
                                            {renderInput('twitter_handle', 'text', 'X (Formally twitter)')}
                                            {renderInput('twitter_follower_count', 'number', 'X (Formally twitter) follower count')}
                                        </div>
                                    </div>
                                    {role && (
                                        <button type="button" onClick={nextStep} disabled={!isStep1Valid()} className={`${!isStep1Valid() ? 'xui-btn-fade' : 'xui-bg-black xui-text-white'} xui-btn xui-bdr-rad-2 xui-mt-1`}>
                                            Continue
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                    {step === 2 && (
                        <>
                            {role === 'influencer' && (
                                <div className="xui-mt-2">
                                    <h3 className="xui-lg-font-sz-200 xui-font-sz-160">Content and Experience</h3>
                                    <div className="xui-mt-1-half xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-2 xui-mt-1-half">
                                        <CustomDropdown options={contentOptions} selectedOptions={contentTypes} onSelect={setContentTypes} placeholder={'Type of products or services offered'} />
                                        <div className="waitlist-section-form-grp">
                                            <label htmlFor="device_type">
                                                <select id="device_type" {...register('device_type', { required: 'This field is required' })}>
                                                    <option value="">Type of device use</option>
                                                    <option value="ios">IOS</option>
                                                    <option value="android">Android</option>
                                                </select>
                                            </label>
                                            {errors.device_type && <p className="xui-form-error-msg">{errors.device_type.message}</p>}
                                        </div>
                                        <CustomDropdown options={struggleAsInfluencerOptions} selectedOptions={struggleAsInfluencerTypes} onSelect={setStruggleAsInfluencerTypes} placeholder={'Biggest struggles as an influencer'} />
                                        <CustomDropdown options={experienceWithBrandsOptions} selectedOptions={experienceWithBrandsTypes} onSelect={setExperienceWithBrandsTypes} placeholder={'Experience with brands and challenges faced.'} />
                                        <div className="waitlist-section-form-grp">
                                            <label htmlFor="open_to_vendor_collaboration_on_haulway">
                                                <select id="open_to_vendor_collaboration_on_haulway" {...register('open_to_vendor_collaboration_on_haulway', { required: 'This field is required' })}>
                                                    <option value="">Open to Vendor Collaborations on Haulway?</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                    <option value="undecided">Undecided/Need more information</option>
                                                </select>
                                            </label>
                                            {errors.open_to_vendor_collaboration_on_haulway && <p className="xui-form-error-msg">{errors.open_to_vendor_collaboration_on_haulway.message}</p>}
                                        </div>
                                        <div className="waitlist-section-form-grp">
                                            <label htmlFor="interested_in_monetization_ugc_on_haulway">
                                                <select id="interested_in_monetization_ugc_on_haulway" {...register('interested_in_monetization_ugc_on_haulway', { required: 'This field is required' })}>
                                                    <option value="">Interested in Monetizing UGC on Haulway?</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                    <option value="undecided">Undecided/Need more information</option>
                                                </select>
                                            </label>
                                            {errors.interested_in_monetization_ugc_on_haulway && <p className="xui-form-error-msg">{errors.interested_in_monetization_ugc_on_haulway.message}</p>}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {role === 'vendor' && (
                                <div className="xui-mt-2">
                                    <h3 className="xui-lg-font-sz-200 xui-font-sz-160">Product and Market Fit</h3>
                                    <div className="xui-mt-1-half xui-d-grid xui-lg-grid-col-2 xui-grid-col-1 xui-grid-gap-2 xui-mt-1-half">
                                        <CustomDropdown options={typeOfProductsOfferedOptions} selectedOptions={typeOfProductsOfferedTypes} onSelect={setTypeOfProductsOfferedTypes} placeholder={'Type of products or services offered'} />
                                        <CustomDropdown options={biggestChallengesSellingOnlineOptions} selectedOptions={biggestChallengesSellingOnlineTypes} onSelect={setBiggestChallengesSellingOnlineTypes} placeholder={'Biggest challenges in selling online'} />
                                        <CustomDropdown options={experienceWorkingWithInfluencersOptions} selectedOptions={experienceWorkingWithInfluencersTypes} onSelect={setExperienceWorkingWithInfluencersTypes} placeholder={'Experience working with influencers'} />
                                        <div className="waitlist-section-form-grp">
                                            <label htmlFor="open_to_influencer_collaboration_on_haulway">
                                                <select id="open_to_influencer_collaboration_on_haulway" {...register('open_to_influencer_collaboration_on_haulway', { required: 'This field is required' })}>
                                                    <option value="">Open to Influencer Collaborations on Haulway?</option>
                                                    <option value="yes">Yes</option>
                                                    <option value="no">No</option>
                                                    <option value="undecided">Undecided/Need more information</option>
                                                </select>
                                            </label>
                                            {errors.open_to_influencer_collaboration_on_haulway && <p className="xui-form-error-msg">{errors.open_to_influencer_collaboration_on_haulway.message}</p>}
                                        </div>
                                    </div>
                                </div>
                            )}
                            <button type="submit" disabled={!isStep2Valid() || isDisabled} className={`${!isStep2Valid() || isDisabled ? 'xui-btn-fade' : 'xui-bg-black xui-text-white'} xui-btn xui-bdr-rad-2 xui-mt-1`} >{isDisabled ? 'Submitting...' : 'Join Waitlist'}</button>
                        </>
                    )}
                </form>
            </div>
            <ThankYouModal />
            <ErrorAlert name={`errorAlert`} message={validationErrMsg} />
            <SuccessAlert name={`successAlert`} message={successErrMsg} noIcon={true} />
        </section>
    );
};

export default Waitlist;