import HeaderComponent from "../components/HeaderComponent";
import HeaderImage from "../assets/media/images/bgs/header-image.jpg";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <>
        <section className="xui-py-3 xui-container">
            <HeaderComponent image={HeaderImage} paragraph="Haulway is the platform for creative professionals to showcase work, sell products, and connect globally. Whether you're a vendor, influencer, or creator, Haulway combines social interaction with e-commerce to help grow your brand and monetize your talent." isDownload={true}>
                <p>Empowering</p> <p>Designers, Creators,</p>  <p>& Influencers Globally</p>
            </HeaderComponent>
            <Footer />
        </section>
        </>
    );
}