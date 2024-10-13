import React, { useState } from 'react';
import { useEffect } from 'react';

const CTATabChanger = (props) => {
    const { beginApp, beginLookBook, beginGRWM, beginDIYs } = props;
    
    // State to track the active button
    const [activeTab, setActiveTab] = useState(null);

    // Function to handle the button click and set the active class
    const handleTabChange = (tabName) => {
        const ctaTabHolder = document.querySelector(".cta-tab-holder");
        setActiveTab(tabName);  // Set the active tab
        if (tabName === 'Hauls') {
            beginApp();  // Call the beginApp function when Hauls is clicked
            ctaTabHolder.classList.add("position");
            console.log(ctaTabHolder);
        }
        else if (tabName === 'LookBook') {
            beginLookBook();  // Call the beginApp function when Hauls is clicked
            ctaTabHolder.classList.add("position");
        }
        else if (tabName === 'GRWM') {
            beginGRWM();  // Call the beginApp function when Hauls is clicked
            ctaTabHolder.classList.add("position");
        }
        else if (tabName === 'DIYs') {
            beginDIYs();  // Call the beginApp function when Hauls is clicked
            ctaTabHolder.classList.add("position");
        }
        else{
            ctaTabHolder.style.top = '1rem';
        }
    };
    

    return (
        <div className='cta-tab-holder'>
            <div className='cta-tab-paragraph'>
                <p className='xui-lg-font-sz-100 xui-font-sz-90 xui-opacity-8 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half'>
                Discover new trends, products, and influencers on Haulway. Explore curated content and uncover your next favorite finds!
                </p>
            </div>
            <div className='cta-tab-btn-holder xui-lg-mt-none xui-mt-2'>
                <button 
                    className={`cta-tab-btn ${activeTab === 'Hauls' ? 'xui-bg-black xui-text-white' : ''}`} 
                    onClick={() => handleTabChange('Hauls')}
                >
                    Hauls
                </button>
                <button 
                    className={`cta-tab-btn ${activeTab === 'LookBook' ? 'xui-bg-black xui-text-white' : ''}`} 
                    onClick={() => handleTabChange('LookBook')}
                >
                    LookBook
                </button>
                <button 
                    className={`cta-tab-btn ${activeTab === 'GRWM' ? 'xui-bg-black xui-text-white' : ''}`} 
                    onClick={() => handleTabChange('GRWM')}
                >
                    GRWM
                </button>
                <button 
                    className={`cta-tab-btn ${activeTab === 'DIYs' ? 'xui-bg-black xui-text-white' : ''}`} 
                    onClick={() => handleTabChange('DIYs')}
                >
                    DIYs
                </button>
            </div>
        </div>
    );
};

export default CTATabChanger;
