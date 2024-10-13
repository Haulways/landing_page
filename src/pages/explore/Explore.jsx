import HeaderComponent from "../../components/HeaderComponent";
import ExploreHeaderImage from "../../assets/media/images/bgs/explore-header-image.jpg";
import CTATabChanger from "../../components/CTATabChanger";
import { useEffect } from "react";
import Hauls from "./Hauls";
import LookBook from "./LookBook";
import GRWM from "./GRWM";
import DIYs from "./DIYs";

export default function Explore() {
    const scrollToTop = (elementId) => {
        const target = document.getElementById(elementId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const beginApp = () => {
        var target = document.getElementById("selectView");
        var target2 = document.getElementById("lookBook");
        var target3 = document.getElementById("grwm");
        var target4 = document.getElementById("diys");
        if(target) {
            target.classList.add('animate');
            target2.classList.remove('animate');
            target3.classList.remove('animate');
            target4.classList.remove('animate');
            scrollToTop("selectView"); // Scroll to Hauls when active
        }
    };
    const beginLookBook = () => {
        var target = document.getElementById("lookBook");
        var target2 = document.getElementById("selectView");
        var target3 = document.getElementById("grwm");
        var target4 = document.getElementById("diys");
        if(target) {
            target.classList.add('animate');
            target2.classList.remove('animate');
            target3.classList.remove('animate');
            target4.classList.remove('animate');
            scrollToTop("lookBook"); // Scroll to Hauls when active
        }
    }
    const beginGRWM = () => {
        var target = document.getElementById("grwm");
        var target2 = document.getElementById("selectView");
        var target3 = document.getElementById("lookBook");
        var target4 = document.getElementById("diys");
        if(target) {
            target.classList.add('animate');
            target2.classList.remove('animate');
            target3.classList.remove('animate');
            target4.classList.remove('animate');
            scrollToTop("grwm"); // Scroll to Hauls when active
        }
    }
    const beginDIYs = () => {
        var target = document.getElementById("diys");
        var target2 = document.getElementById("selectView");
        var target3 = document.getElementById("lookBook");
        var target4 = document.getElementById("grwm");
        if(target) {
            target.classList.add('animate');
            target2.classList.remove('animate');
            target3.classList.remove('animate');
            target4.classList.remove('animate');
            scrollToTop("diys"); // Scroll to Hauls when active
        }
    }

    // useEffect(() => {

    //     const target = document.getElementById("selectView");
    //     const observer = new MutationObserver(mutations => {
    //         mutations.forEach(mutation => {
    //             if (mutation.attributeName === 'class' && mutation.target.classList.contains('animate')) {
    //                 mutation.target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //             }
    //         });
    //     });

    //     if (target) {
    //         observer.observe(target, { attributes: true });
    //     }

    // }, []);

    return (
        <>
            <section id="explore" className="xui-lg-py-3 xui-py-1 xui-container">
                <HeaderComponent image={ExploreHeaderImage} customClass="xui-img-650" paragraph="Haulway is a unique ecosystem blending social media with commerce. Influencers showcase products, designers sell creations, and users shop directly from content—empowering creators to grow and reach a global audience." isDownload={false}>
                    <div className="xui-lg-d-block xui-d-none">
                        <p>More Than A</p> <p>Platform: A Global</p> <p>Marketplace for</p> <p>Creativity</p>
                    </div>
                    <div className="xui-lg-d-none xui-d-block">
                        <p>More Than A Platform:</p> <p>A Global Marketplace</p> <p>for Creativity</p>
                    </div>
                </HeaderComponent>
                <CTATabChanger beginApp={beginApp} beginLookBook={beginLookBook} beginGRWM={beginGRWM} beginDIYs={beginDIYs} />
            </section>
            <Hauls />
            <LookBook />
            <GRWM />
            <DIYs />
        </>
    );
}
