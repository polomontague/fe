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
  padding-left: 270px;
  background: var(--layout-static-page-background-default);
`;

const PageContainer = styled.main`
  width: 100%;
  min-height: 100vh;
`;
