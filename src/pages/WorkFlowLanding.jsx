import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/LandingPage/Navbar";
import Auth from "../components/LandingPage/AuthModal";
import HeroSection from "../components/LandingPage/Hero";
import Testimonials from "../components/LandingPage/Testimonials";
import Pricing from "../components/LandingPage/Pricing";
import CTA from "../components/LandingPage/CTA";
import Footer from "../components/LandingPage/Footer";
import TextHoverEffect from "../components/LandingPage/TextHoverEffect";
import RevealOnScroll from "../components/animations/RevealAnimation";
import AnimatedFeatures from "../components/LandingPage/Features";
import VideoSection from "../components/LandingPage/VideoSection";

const WorkFlowLanding = () => {



  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar
        onOpenModal={() => setShowModal(true)}
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
      <RevealOnScroll>
        <HeroSection onOpenModal={() => setShowModal(true)} />
      </RevealOnScroll>
      <VideoSection/>
       <RevealOnScroll>
         <AnimatedFeatures />
       </RevealOnScroll>
       <RevealOnScroll>
      <Testimonials/>
       </RevealOnScroll>
      
      <RevealOnScroll delay={0.3}>
        <Pricing />
      </RevealOnScroll>
      <RevealOnScroll>
        <CTA />
      </RevealOnScroll>
      <div className="w-full bg-black">
        <TextHoverEffect text="WorkFlow" duration={0.5} />
      </div>
      <Footer />
    </div>
  );
};

export default WorkFlowLanding;