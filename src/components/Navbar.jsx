/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/media/images/logo.png";

const Navbar = () => {
    const email = useRef(null);
    const formData = {email: ""};
    const onSubmitHandler = (event) => {
        event.preventDefault();
        formData.email = email.current.value;
        window.open("mailto:Contact@begorah.co.uk?subject="+ "&body=");
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
                            <NavLink className={({ isActive }) => isActive ? 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-700 xui-text-black' : 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-text-black xui-opacity-7'} to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-700 xui-text-black' : 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-text-black xui-opacity-7'} to={"explore"}>Explore</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-700 xui-text-black' : 'xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-text-black xui-opacity-7'} to={"features"}>Features</NavLink>
                        </li>
                     
                    </ul>
                </div>
                <div className="fixed xui-lg-d-block xui-md-d-block xui-d-block">
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