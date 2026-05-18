import type { Metadata } from "next";
import { ComingSoonPage } from "../components/coming-soon";
import { LandingPageContent } from "../components/landing-page";
import { shouldShowComingSoon } from "../lib/site-status";

export function generateMetadata(): Metadata {
  if (shouldShowComingSoon()) {
    return {
      title: "Moven | Em desenvolvimento",
      description: "A plataforma Moven está sendo preparada e em breve estará disponível.",
    };
  }

  return {
    title: "Moven | Delivery em movimento",
    description: "Landing page do Moven, plataforma SaaS para delivery local.",
  };
}

export default function LandingPage() {
  if (shouldShowComingSoon()) {
    return <ComingSoonPage />;
  }

  return <LandingPageContent />;
}
