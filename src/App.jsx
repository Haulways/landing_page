import { useEffect } from "react";
import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './assets/styles/custom.css'
import Navbar from './components/Navbar';
import Loader from "./components/Loader";
import MainFooter from "./components/MainFooter";
const Home = lazy(() => import('./pages/Home'));
const Explore = lazy(() => import('./pages/explore/Explore'));
const Features = lazy(() => import('./pages/features/Features'));
const Waitlist = lazy(() => import('./pages/waitlist/Waitlist'));
const FAQs = lazy(() => import('./pages/faqs/FAQs'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));

gsap.registerPlugin(ScrollTrigger);
function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  // useEffect(() => {
  //   setTimeout(() => {
  //     gsap.set('footer', { yPercent: -50 })

  //     const uncover = gsap.timeline({ paused:true })

  //     uncover
  //     .to('footer', { yPercent: 0, ease: 'none' })
  //     ;

  //     ScrollTrigger.create({  
  //     trigger: '.haulway-body-section',
  //     start: 'bottom bottom',
  //     end: '+=75%',
  //     animation: uncover,
  //     scrub: true,  
  //     })
  //   }, 1000);
  // });
  return (
    <>
    <section className="haulway-body-section">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/features' element={<Features />} />
          <Route path='/faqs' element={<FAQs />} />
          <Route path='/waitlist' element={<Waitlist />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/construction' element={<ComingSoon />} />
          <Route path='/privacy/policy' element={<PrivacyPolicy />} />
          <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
          <Route path='*' element={<h1>No Match</h1>} />
        </Routes>
      </Suspense>
      <MainFooter />
    </section>
    {/* <Footer /> */}
    </>
  )
}

export default App
