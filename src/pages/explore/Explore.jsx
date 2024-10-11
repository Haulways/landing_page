import HeaderComponent from "../../components/HeaderComponent";
import ExploreHeaderImage from "../../assets/media/images/bgs/explore-header-image.jpg";
import CTATabChanger from "../../components/CTATabChanger";
import { useEffect } from "react";
import Hauls from "./Hauls";
import LookBook from "./LookBook";

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
        if(target) {
            target.classList.add('animate');
            target2.classList.remove('animate');
            scrollToTop("selectView"); // Scroll to Hauls when active
        }
    };
    const beginLookBook = () => {
        var target = document.getElementById("lookBook");
        var target2 = document.getElementById("selectView");
        // var previous = document.getElementById("selectView");
        // if(previous) {
        //     previous.classList.add('selected');
        // }
        if(target) {
            target.classList.add('animate');
            target2.classList.remove('animate');
            scrollToTop("lookBook"); // Scroll to Hauls when active
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
            <section id="explore" className="xui-py-3 xui-container">
                <HeaderComponent image={ExploreHeaderImage} customClass="xui-img-600" paragraph="Haulway is a unique ecosystem blending social media with commerce. Influencers showcase products, designers sell creations, and users shop directly from content—empowering creators to grow and reach a global audience." isDownload={false}>
                    <p>More Than A</p> <p>Platform: A Global</p> <p>Marketplace for</p> <p>Creativity</p>
                </HeaderComponent>
                <CTATabChanger beginApp={beginApp} beginLookBook={beginLookBook} />
            </section>
            <Hauls />
            <LookBook />
        </>
    );
}
