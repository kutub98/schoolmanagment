
// app/page.tsx
import Image from "next/image";
import HeroPremium from "./component/Hero";
// import StatsPremium from "./component/State";
import CoursesCarousel from "./component/CoursesCarousel";
import EnrollmentPremium from "./component/EnrollmentPremium";
import TestimonialsPremium from "./component/TestimonialsPremium";
import StatsPremium from "./component/State";
import { AboutSection } from "./component/About";

export default function Home() {
  return (
    <div>
      <HeroPremium/>
      <CoursesCarousel/>
      <StatsPremium/>
      <TestimonialsPremium/>
      <EnrollmentPremium/>
      <AboutSection/>
      {/* <StatsPremium/> */}
    </div>
  );
}
