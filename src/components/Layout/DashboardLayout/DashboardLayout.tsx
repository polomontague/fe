import { DashboardBaseContainer, DashboardContentContainer } from "@/components/styled/container";
import { ReactNode } from "react";
import NavigationBar from "./NavigationBar";

interface Props {
  children: ReactNode;
  background?: string;
}

export function DashboardLayout({ children }: Props) {
  return (
    <DashboardContentContainer>
      <NavigationBar />
      <DashboardBaseContainer>{children}</DashboardBaseContainer>
    </DashboardContentContainer>
  );
}
export default DashboardLayout;
