
// app/page.tsx
import Image from "next/image";
import HeroPremium from "./component/Hero";
// import StatsPremium from "./component/State";
import CoursesCarousel from "./component/CoursesCarousel";
import EnrollmentPremium from "./component/EnrollmentPremium";
import TestimonialsPremium from "./component/TestimonialsPremium";
import StatsPremium from "./component/State";

export default function Home() {
  return (
    <div>
      <HeroPremium/>
      <CoursesCarousel/>
      <StatsPremium/>
      <TestimonialsPremium/>
      <EnrollmentPremium/>
      {/* <StatsPremium/> */}
    </div>
  );
}
