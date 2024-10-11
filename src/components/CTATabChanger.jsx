import React, { useState } from 'react';

const CTATabChanger = (props) => {
    const { beginApp, beginLookBook } = props;
    
    // State to track the active button
    const [activeTab, setActiveTab] = useState(null);

    // Function to handle the button click and set the active class
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);  // Set the active tab
        if (tabName === 'Hauls') {
            beginApp();  // Call the beginApp function when Hauls is clicked
        }
        else if (tabName === 'LookBook') {
            beginLookBook();  // Call the beginApp function when Hauls is clicked
        }
    };

    return (
        <div className='cta-tab-holder'>
            <div className='cta-tab-paragraph'>
                <p className='xui-font-sz-100 xui-opacity-8 xui-lg-w-fluid-90 xui-w-fluid-100 xui-line-height-1-half'>
                    Influencers and creators enjoy full control over partnership & earnings, connect globally with buyers & fans, earn and withdraw funds effortlessly in any currency.
                </p>
            </div>
            <div className='cta-tab-btn-holder'>
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
                    className={`cta-tab-btn ${activeTab === 'GRWM' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('GRWM')}
                >
                    GRWM
                </button>
                <button 
                    className={`cta-tab-btn ${activeTab === 'DIYs' ? 'active' : ''}`} 
                    onClick={() => handleTabChange('DIYs')}
                >
                    DIYs
                </button>
            </div>
        </div>
    );
};

export default CTATabChanger;
