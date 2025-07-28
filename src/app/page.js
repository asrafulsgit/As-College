import FeaturedClasses from "./components/FeaturedClasses";
import HeroSection from "./components/HeroSection";
import HighestRankStudents from "./components/HighestRankStudents";
import PlatformBenefits from "./components/PlatformBenefits";
import PopularTeachers from "./components/PopularTeachers";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
   <> 
      <HeroSection />
      <PopularTeachers />
      <HighestRankStudents />
      <FeaturedClasses />
      <PlatformBenefits />
      <Testimonials />
   </>
  );
}
