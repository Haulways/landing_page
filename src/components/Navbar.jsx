/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/media/images/logo.png";
import { ArrowUpRight } from '@carbon/icons-react';

const Navbar = () => {
    const email = useRef(null);
    const formData = {email: ""};
    const onSubmitHandler = (event) => {
        event.preventDefault();
        formData.email = email.current.value;
        window.open("mailto:contact@haulway.co?subject="+ "&body=");
    }
    
    return (
        <>
        <nav className={`xui-navbar iyd-nav xui-container pd-nav xui-text-black`} brand="true" layout="2" menu="2">
            <div className="brand xui-h-fluid-100">
                <NavLink className="xui-text-dc-none xui-h-fluid-100 xui-text-inherit xui-d-inline-flex xui-flex-ai-center" to={'/'}>
                    <img className='xui-img-150' src={Logo} alt="" />
                    {/* <span className="xui-ml-half xui-d-inline-block xui-font-1 xui-font-w-bold">Kathy</span> */}
                </NavLink>
            </div>
            <div className="links" placed="center">
                <div className="main dark-color primary xui-bg-white">
                    <ul className='xui-grid-gap-2'>
                        <li>
                        <NavLink className={({ isActive }) => isActive  ? 'xui-font-sz-120 xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-600 active-link xui-text-black': 'xui-font-sz-120 xui-md-font-sz-200 xui-lg-font-sz-100 xui-text-black xui-opacity-7'} to="/">
                            {({ isActive }) => (
                                <>
                                <p>Home</p>
                                <span className={isActive ? 'xui-w-35 xui-h-35 xui-bdr-rad-circle haulway-bg-white xui-lg-d-none xui-d-flex xui-flex-ai-center xui-flex-jc-center' : 'xui-w-40 xui-h-40 xui-bdr-rad-circle haulway-bg-grey xui-lg-d-none xui-d-flex xui-flex-ai-center xui-flex-jc-center'}>
                                        <ArrowUpRight size={15} color='black' />
                                </span>
                                </>
                            )}
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive  ? 'xui-font-sz-120 xui-lg-ml-1 xui-ml-none xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-600 active-link xui-text-black': 'xui-font-sz-120 xui-md-font-sz-200 xui-lg-font-sz-100 xui-text-black xui-opacity-7'} to="explore">
                            {({ isActive }) => (
                                <>
                                <p>Explore</p>
                                <span className={isActive ? 'xui-w-35 xui-h-35 xui-bdr-rad-circle haulway-bg-white xui-lg-d-none xui-d-flex xui-flex-ai-center xui-flex-jc-center' : 'xui-w-40 xui-h-40 xui-bdr-rad-circle haulway-bg-grey xui-lg-d-none xui-d-flex xui-flex-ai-center xui-flex-jc-center'}>
                                        <ArrowUpRight size={15} color='black' />
                                </span>
                                </>
                            )}
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive  ? 'xui-font-sz-120 xui-lg-ml-1 xui-ml-none xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-600 active-link xui-text-black': 'xui-font-sz-120 xui-md-font-sz-200 xui-lg-font-sz-100 xui-text-black xui-opacity-7'} to="features">
                            {({ isActive }) => (
                                <>
                                <p>Features</p>
                                <span className={isActive ? 'xui-w-35 xui-h-35 xui-bdr-rad-circle haulway-bg-white xui-lg-d-none xui-d-flex xui-flex-ai-center xui-flex-jc-center' : 'xui-w-40 xui-h-40 xui-bdr-rad-circle haulway-bg-grey xui-lg-d-none xui-d-flex xui-flex-ai-center xui-flex-jc-center'}>
                                        <ArrowUpRight size={15} color='black' />
                                </span>
                                </>
                            )}
                        </NavLink>

                        </li>
                        {/* <li>
                            <NavLink className={({ isActive }) => isActive ? 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-700 xui-text-black' : 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-text-black xui-opacity-7'} to={"features"}>Features</NavLink>
                        </li> */}
                        <button onClick={onSubmitHandler} ref={email} className='xui-btn-block xui-bg-black xui-text-white xui-bdr-rad-half xui-lg-font-sz-90 xui-font-sz-100 xui-lg-d-none xui-d-block'>Contact Us</button>
                     
                    </ul>
                </div>
                <div className="fixed xui-lg-d-block xui-md-d-block xui-d-none">
                    <ul>
                        <li>
                            {/* <LinkButton text="Sign up" route="/" customClass="contact xui-bg-none xui-bdr-rad-3" customStyle={{"backgroundColor": "#FFF", "color": "#000"}} /> */}
                            {/* <LinkButton onClick={onSubmitHandler} text="Contact us" route="/#contact" isButton={true} customClass="contact xui-bdr-rad-3 xui-ml-1" /> */}
                            <button onClick={onSubmitHandler} ref={email} className='xui-btn xui-bg-black xui-text-white xui-bdr-rad-half xui-font-sz-90 xui-ml-1'>Contact Us</button>
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
        </>
    )
};

export default Navbar;