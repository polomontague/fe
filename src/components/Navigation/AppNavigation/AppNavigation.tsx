import { ReactNode } from "react";
import styled from "styled-components";
import { Sidebar } from "./Sidebar";

type AppNavigationProps = {
  children: ReactNode;
};

export const AppNavigation = ({ children }: AppNavigationProps) => {
  return (
    <Frame>
      <Sidebar />
      <PageContainer>{children}</PageContainer>
    </Frame>
  );
};

const Frame = styled.div`
  display: -webkit-flex;
  display: flex;
  padding-left: var(--sidebar-width);
  background: var(--light-sand);
`;

const PageContainer = styled.main`
  width: 100%;
  min-height: 100vh;
`;
