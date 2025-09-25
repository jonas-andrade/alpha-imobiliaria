"use client";
import HeroCarousel from "../components/layout/HeroCarousel";
import LeadSection from "../components/layout/LeadSection";
import FeaturedSales from "../components/layout/FeaturedSales";
import AboutSectionPreview from "../components/layout/AboutSectionPreview";
import AboutHighlight from "../components/layout/AboutHighlight";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <LeadSection />
      <FeaturedSales />
       <AboutHighlight />
      <section className="-mt-12">
        <AboutSectionPreview />
      </section>
      


    </div>
  );
}