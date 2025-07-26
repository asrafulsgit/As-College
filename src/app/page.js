import FeaturedClasses from "./components/FeaturedClasses";
import HeroSection from "./components/HeroSection";
import HighestRankStudents from "./components/HighestRankStudents";
import PopularTeachers from "./components/PopularTeachers";

export default function Home() {
  return (
   <> 
      <HeroSection />
      <PopularTeachers />
      <HighestRankStudents />
      <FeaturedClasses />
   </>
  );
}
