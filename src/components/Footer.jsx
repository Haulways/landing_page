/* eslint-disable react/no-unescaped-entities */
import FooterIcon1 from "./icons/FooterIcon1";
import FooterIcon2 from "./icons/FooterIcon2";

export default function Footer(){

    return(
        <>
        <footer className="xui-px-1-half xui-py-1 xui-mt-1-half haulway-footer xui-bg-black xui-text-white xui-bdr-rad-1">
            <div className="xui-d-grid xui-grid-gap-3 xui-grid-col-1 xui-lg-grid-col-3 xui-mt-2">
                <div className="xui-d-flex">
                    <div className="xui-w-70 xui-h-70">
                        <FooterIcon1 />
                    </div>
                    <div className="xui-pl-1" style={{"width": "calc(100% - 70px)"}}>
                        <p className="xui-font-sz-80 xui-mobile-font-sz-85 xui-opacity-8">For Users</p>
                        <h3 className="xui-font-sz-130 xui-mobile-font-sz-120 xui-mt-half xui-font-w-500">Social Shopping Experience</h3>
                        <p className="xui-font-sz-90 xui-mobile-font-sz-85 xui-mt-half xui-line-height-1-half xui-opacity-8">Haulway offers a social, immersive shopping experience with curated content, influencer follows, and unique brand discovery.</p>
                    </div>

                </div>
                <div className="xui-d-flex">
                    <div className="xui-w-70 xui-h-70">
                        <FooterIcon2 />
                    </div>
                    <div className="xui-pl-1" style={{"width": "calc(100% - 70px)"}}>
                        <p className="xui-font-sz-80 xui-mobile-font-sz-85 xui-opacity-8">For Influencers</p>
                        <h3 className="xui-font-sz-130 xui-mobile-font-sz-120 xui-mt-half xui-font-w-500">Brand Monetization</h3>
                        <p className="xui-font-sz-90 xui-mobile-font-sz-85 xui-mt-half xui-line-height-1-half xui-opacity-8">Haulway equips micro-influencers and creators to grow their brands and earn through flexible brand partnerships.</p>
                    </div>

                </div>
                <div className="xui-d-flex">
                    <div className="xui-w-70 xui-h-70">
                        <FooterIcon1 />
                    </div>
                    <div className="xui-pl-1" style={{"width": "calc(100% - 70px)"}}>
                        <p className="xui-font-sz-80 xui-mobile-font-sz-85 xui-opacity-8">For Vendors</p>
                        <h3 className="xui-font-sz-130 xui-mobile-font-sz-120 xui-mt-half xui-font-w-500">Product Showcase & Sales</h3>
                        <p className="xui-font-sz-90 xui-mobile-font-sz-85 xui-mt-half xui-line-height-1-half xui-opacity-8">Haulway enables vendors to display products through video content, engaging audiences & grow their business with influencer partnerships.</p>
                    </div>

                </div>

            </div>
           
        </footer>
        </>
    );
}