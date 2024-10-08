import HeaderComponent from "../components/HeaderComponent";
import ExploreHeaderImage from "../assets/media/images/bgs/explore-header-image.jpg";

export default function Explore(){
    return(
        <>
        <section className="xui-py-3 xui-container">
            <HeaderComponent image={ExploreHeaderImage} paragraph="Haulway is a unique ecosystem blending social media with commerce. Influencers showcase products, designers sell creations, and users shop directly from content—empowering creators to grow and reach a global audience." isDownload={true}>
                <p>More Than A</p> <p>Platform: A Global</p> <p>Marketplace for</p> <p>Creativity</p>
            </HeaderComponent>
        </section>
        </>
    );
}