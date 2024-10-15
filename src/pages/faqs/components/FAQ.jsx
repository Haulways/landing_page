import React, { useEffect } from 'react';

const FAQ = (props) => {
    const { question, answer, customAnswerClass, customQuestionClass } = props;
    useEffect(() => {
        window.xuiScrollOnAnimation();
        window.xuiLazyLoadings();
    });
    return (
        <div xui-aos="fade-left" xui-aos-duration=".8" className='faq xui-bdr-rad-half'>
            <div className={`${customQuestionClass} xui-px-2 xui-pt-2 xui-pb-2-half faq-question`} style={{"borderTopRightRadius": ".5rem", "borderTopLeftRadius": ".5rem"}}>
                <p className='xui-lg-font-sz-110 xui-font-sz-90 xui-font-w-600 xui-line-height-1-half'>{question}</p>
            </div>
            <div className={`${customAnswerClass} xui-px-2 xui-pt-2 xui-pb-2-half faq-answer`} style={{"borderBottomRightRadius": ".5rem", "borderBottomLeftRadius": ".5rem"}}>
                <p className='xui-lg-font-sz-90 xui-font-sz-85 xui-opacity-8 xui-line-height-1-half'>{answer}</p>
            </div>
        </div>
    );
};

export default FAQ;