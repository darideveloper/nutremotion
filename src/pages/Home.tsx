import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import AboutSection from "@/components/home/AboutSection";
import Services from "@/components/home/Services";
import FrequentlyAskedQuestions from "@/components/home/FrequentlyAskedQuestions";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <AboutSection />
      <Services />
      <FrequentlyAskedQuestions />
      <ContactCTA />
    </div>
  );
}