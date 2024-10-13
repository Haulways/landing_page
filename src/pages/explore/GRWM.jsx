import HeaderComponent from "../../components/HeaderComponent";
import GRWMHeaderImage from "../../assets/media/images/bgs/grwm-header-image.jpg";
import CTATabChanger from "../../components/CTATabChanger";

export default function GRWM(){
    return(
        <>
        <section id='grwm' className="xui-lg-py-3 xui-py-1 xui-container">
            <HeaderComponent image={GRWMHeaderImage} customClass="xui-img-450" paragraph="Unleash your creativity by showcasing your outfit transformations. Share your journey from casual to chic, and inspire others with your unique flair. Join the Haulway community to connect with fellow fashion enthusiasts and discover fresh ideas for every occasion. Let your style inspire!" isDownload={false}>
                <div className="xui-lg-d-block xui-d-none">
                    <p>Transform Your</p> <p>Look and Spark</p> <p>Inspiration!</p>
                </div>
                <div className="xui-lg-d-none xui-d-block">
                    <p>Transform Your Look</p> <p>and Spark</p> <p>Inspiration!</p>
                </div>
            </HeaderComponent>
            {/* <CTATabChanger /> */}
        </section>
        </>
    );
}