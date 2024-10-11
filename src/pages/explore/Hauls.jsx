import HeaderComponent from "../../components/HeaderComponent";
import HaulsHeaderImage from "../../assets/media/images/bgs/hauls-header-image.jpg";
import CTATabChanger from "../../components/CTATabChanger";

export default function Hauls(){
    return(
        <>
        <section id='selectView' className="xui-py-3 xui-container">
            <HeaderComponent image={HaulsHeaderImage} customClass="xui-img-450" paragraph="Share your latest finds and let your style shine on Haulway. From unique pieces to everyday essentials, show the world what’s in your haul and inspire others with your personal picks. Connect with fellow shoppers, follow influencers, and be part of a community that Value creativity!" isDownload={false}>
                <p>Unbox Your</p> <p>Style: Show Off</p> <p>Your Haul!</p>
            </HeaderComponent>
            {/* <CTATabChanger /> */}
        </section>
        </>
    );
}