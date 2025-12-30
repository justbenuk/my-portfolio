import HomeBlogSection from "@/components/sections/home/blog-section";
import HomeContactSection from "@/components/sections/home/home-contact-section";
import HomeProjectsSection from "@/components/sections/home/home-projects-section";
import HomeServicesSection from "@/components/sections/home/home-services-section";

export default function Home() {
  return (
    <div className="space-y-24">
      <HomeProjectsSection />
      <HomeServicesSection />
      <HomeBlogSection />
      <HomeContactSection />
    </div>
  );
}
