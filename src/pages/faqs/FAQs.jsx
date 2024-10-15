import React from 'react';
import FAQ from './components/FAQ';

const FAQs = () => {
    const faqData = [
        {
            question: "How do I sign up as a vendor or influencer on Haulway?",
            answer: "To sign up, download the Haulway app, sign up as a user, then select upgrade account on the side menu bar, and complete the upgrade process by providing necessary information.",
            customQuesClass: "haulway-bg-grey-ii",
            customAnsClass: "haulway-bg-grey",
        },
        {
            question: "How does the monetization process work for influencers?",
            answer: "Through Partnership Agreement with a vendor or UGC sales, Influencers can  make earnings in USD, with the option to withdraw in local currency.",
            customQuesClass: "haulway-bg-grey",
            customAnsClass: "haulway-bg-grey-ii",
        },
        {
            question: "Can vendors and influencers negotiate terms directly on the platform?",
            answer: "Yes, Haulway provides built-in negotiation tools where vendors and influencers can communicate, negotiate contract terms, and finalize agreements without leaving the app.",
            customQuesClass: "haulway-bg-grey-ii",
            customAnsClass: "haulway-bg-grey",
        },
        {
            question: "How do I withdraw my earnings as an influencer or vendor?",
            answer: "Earnings can be withdrawn directly to your local bank account. Simply navigate to the “Wallet” section in the app in the side menu, choose your preferred method, and follow the prompts.",
            customQuesClass: "haulway-bg-grey-ii",
            customAnsClass: "haulway-bg-grey",
        },
        {
            question: "What happens if there’s a dispute between a vendor and an influencer?",
            answer: "Haulway provides a dispute resolution system to help both parties resolve issues fairly and efficiently. You can report issues within the app, and our support team will assist in finding a resolution.",
            customQuesClass: "haulway-bg-grey-ii",
            customAnsClass: "haulway-bg-grey",
        },
        {
            question: "Are contracts legally binding on Haulway?",
            answer: "Yes, all agreements on Haulway are legally binding and can be reviewed and signed digitally for secure partnerships.",
            customQuesClass: "haulway-bg-grey-ii",
            customAnsClass: "haulway-bg-grey",
        }
    ];
    return (
        <section className="xui-lg-py-3 xui-py-1 xui-container">
            <div className='xui-text-center'>
                <h3 className='xui-lg-font-sz-300 xui-font-sz-250 xui-font-w-500'>Frequently <span className='xui-font-w-700'>Asked</span> Questions</h3>
                <p className='xui-mt-1 xui-lg-font-sz-100 xui-font-sz-90 xui-opacity-8'>Here is a list of frequently asked questions about Haulway app</p>
            </div>
            <div className='xui-mt-3 xui-d-grid xui-lg-grid-col-3 xui-grid-col-1 xui-grid-gap-1 faq-holder'>
                {faqData.map((faq, index) => (
                    <FAQ key={index} question={faq.question} answer={faq.answer} customQuestionClass={faq.customQuesClass} customAnswerClass={faq.customAnsClass} />
                ))}
            </div>
        </section>
    );
};

export default FAQs;