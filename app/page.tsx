import {
  Benefits,
  CourierSection,
  FinalCta,
  Footer,
  Hero,
  ProofBar,
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
      <ProofBar />
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
