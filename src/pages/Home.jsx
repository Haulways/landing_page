import HeaderComponent from "../components/HeaderComponent";
import HeaderImage from "../assets/media/images/bgs/header-image.jpg";
import Footer from "../components/Footer";

export default function Home(){
    return(
        <>
        <section className="xui-lg-py-3 xui-py-1 xui-container">
            <HeaderComponent image={HeaderImage} customClass="xui-img-600" paragraph="Haulway is a trademark licensed from Haulscape Technologies Ltd. The platform, its technology, and operations are independently developed and managed by Grascope Industries Ltd. This ensures a seamless experience for our users while maintaining brand continuity under a structured agreement." isDownload={true}>
                <p>Empowering</p> <p>Designers, Creators,</p>  <p>& Influencers Globally</p>
            </HeaderComponent>
            <Footer />
        </section>
        </>
    );
}