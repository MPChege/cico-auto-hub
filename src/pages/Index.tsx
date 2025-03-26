
import { useEffect } from "react";
import PageTransition from "../components/shared/PageTransition";
import Hero from "../components/home/Hero";
import ServicesOverview from "../components/home/ServicesOverview";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <ServicesOverview />
        <Testimonials />
        <CTASection />
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Index;
