import {
  Benefits,
  CourierSection,
  FinalCta,
  Footer,
  Hero,
  HowItWorks,
  Navbar,
  Pricing,
  RestaurantSection,
} from "@/components/landing";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <RestaurantSection />
      <CourierSection />
      <Pricing />
      <FinalCta />
      <Footer />
    </main>
  );
}
