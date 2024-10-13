import HeaderComponent from "../../components/HeaderComponent";
import HaulsHeaderImage from "../../assets/media/images/bgs/hauls-header-image.jpg";
import CTATabChanger from "../../components/CTATabChanger";

export default function Hauls(){
    return(
        <>
        <section id='selectView' className="xui-lg-py-3 xui-py-1 xui-container">
            <HeaderComponent image={HaulsHeaderImage} customClass="xui-img-450" paragraph="Share your latest finds and let your style shine on Haulway. From unique pieces to everyday essentials, show the world what’s in your haul and inspire others with your personal picks. Connect with fellow shoppers, follow influencers, and be part of a community that Value creativity!" isDownload={false}>
                <div className="xui-lg-d-block xui-d-none">
                    <p>Unbox Your</p> <p>Style: Show Off</p> <p>Your Haul!</p>
                </div>
                <div className="xui-lg-d-none xui-d-block">
                    <p>Unbox Your Style:</p> <p>Show Off Your Haul!</p>
                </div>
            </HeaderComponent>
            {/* <CTATabChanger /> */}
        </section>
        </>
    );
}