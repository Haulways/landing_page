import HeaderComponent from "../../components/HeaderComponent";
import DIYsHeaderImage from "../../assets/media/images/bgs/diys-header-image.jpg";
import CTATabChanger from "../../components/CTATabChanger";

export default function DIYs(){
    return(
        <>
        <section id='diys' className="xui-lg-py-3 xui-py-1 xui-container">
            <HeaderComponent image={DIYsHeaderImage} customClass="xui-img-450" paragraph="Share your unique designs and creative processes to empower fellow fashion enthusiasts. Whether it's a stunning dress or a chic accessory, your DIY journey can spark inspiration and ignite creativity in others. Let's build a community of innovators and style-makers!" isDownload={false}>
                <div className="xui-lg-d-block xui-d-none">
                    <p>Inspire Others</p> <p>with Your DIY</p> <p>Creations!</p>
                </div>
                <div className="xui-lg-d-none xui-d-block">
                    <p>Inspire Others with </p> <p>Your DIY Creations!</p>
                </div>
            </HeaderComponent>
            {/* <CTATabChanger /> */}
        </section>
        </>
    );
}