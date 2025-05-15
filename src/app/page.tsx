import HeroSection from '@/components/HeroSection';
import ComprehensivePlansSection from '@/components/ComprehensivePlansSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
// ... existing imports ...

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ComprehensivePlansSection />
      <WhyChooseUsSection />
      {/* ... other sections ... */}
    </main>
  );
} 