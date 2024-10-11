import HeaderComponent from "../../components/HeaderComponent";
import LookBookHeaderImage from "../../assets/media/images/bgs/lookbook-header-image.jpg";
import CTATabChanger from "../../components/CTATabChanger";

export default function LookBook(){
    return(
        <>
        <section id='lookBook' className="xui-py-3 xui-container">
            <HeaderComponent image={LookBookHeaderImage} customClass="xui-img-450" paragraph="Explore a diverse collection of curated looks and creative outfit ideas. Whether you're looking for everyday inspiration or a special occasion ensemble, our Lookbooks have something for everyone. Start styling today and discover the looks that speak to you!" isDownload={false}>
                <p>Elevate Your Style:</p> <p>Get Inspired by </p> <p>Our Lookbooks!</p>
            </HeaderComponent>
            {/* <CTATabChanger /> */}
        </section>
        </>
    );
}