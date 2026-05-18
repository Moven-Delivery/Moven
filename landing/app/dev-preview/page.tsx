import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { LandingPageContent } from "../../components/landing-page";
import { canShowDevPreview } from "../../lib/site-status";

export const metadata: Metadata = {
  title: "Moven | Prévia da landing",
  description: "Prévia local da landing page real do Moven.",
};

export default function DevPreviewPage() {
  if (!canShowDevPreview()) {
    redirect("/");
  }

  return <LandingPageContent />;
}
