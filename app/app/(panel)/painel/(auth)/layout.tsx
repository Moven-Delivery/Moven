import { PanelShell } from "@/components/panel/panel-shell";

export default function AuthenticatedPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PanelShell>{children}</PanelShell>;
}
