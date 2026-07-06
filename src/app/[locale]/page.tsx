import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import FeaturedTours from "@/components/sections/FeaturedTours";
import USPSection from "@/components/sections/USPSection";
import StorySection from "@/components/sections/StorySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedTours />
      <USPSection />
      <StorySection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <FinalCTA />
    </>
  );
}
