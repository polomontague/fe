"use client";
import { ReactNode } from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";

type WebsiteNavigationProps = {
  children: ReactNode;
};

export const WebsiteNavigation = ({ children }: WebsiteNavigationProps) => {
  return (
    <Frame>
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </Frame>
  );
};

const Frame = styled.div`
  padding-top: var(--layout-static-page-header-height);
  z-index: 1;
  background: var(--layout-static-page-background-default);
`;

const PageContainer = styled.main``;
