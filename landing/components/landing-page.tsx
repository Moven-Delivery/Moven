import {
  Benefits,
  CourierSection,
  FinalCta,
  Footer,
  Hero,
  HowItWorks,
  Navbar,
  Pricing,
  ProofBar,
  RestaurantSection,
} from "./landing";

export function LandingPageContent() {
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
