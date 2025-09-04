"use client";
import HeroCarousel from "../components/layout/HeroCarousel";
import LeadSection from "../components/layout/LeadSection";
import FeaturedSales from "../components/layout/FeaturedSales";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <LeadSection />
      <FeaturedSales />
    </div>
  );
}