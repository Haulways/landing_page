import Logo from '../assets/media/images/favicon.ico'
export default function Loader(){
    return(
        <>
        <section className="xui-loader haulway-loader">
            <div className="xui-w-200 xui-h-200 haulway-bg-light xui-bdr-rad-circle xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center haulway-loader-logo-holder">
                <img className='xui-img-100' src={Logo} alt='logo' />
            </div>
        </section>
        </>
    );
}