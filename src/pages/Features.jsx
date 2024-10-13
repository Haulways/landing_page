import HeaderComponent from "../components/HeaderComponent";
import FeaturesHeaderImage from "../assets/media/images/bgs/features-header-image.jpg";

export default function Features(){
    return(
        <>
        <section className="xui-lg-py-3 xui-py-1 xui-container">
            <HeaderComponent image={FeaturesHeaderImage} customClass="xui-img-450" paragraph="Haulway provides creators with powerful tools to negotiate terms with vendors and monetize their influence, offering a unique opportunity to transform creativity into income. With a seamless blend of commerce and content creation, Haulway empowers creators to reach a global audience, expand their brand, and maximize their earning potential." isDownload={false}>
                <div className="xui-lg-d-block xui-d-none">
                    <p>Sell Globally—</p> <p>Streamline With</p> <p>Ease.</p>
                </div>
                <div className="xui-lg-d-none xui-d-block">
                    <p>Sell Globally—</p> <p>Streamline With</p> <p>Ease.</p>
                </div>
            </HeaderComponent>
            {/* <CTATabChanger /> */}
        </section>
        </>
    );
}