"use client";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { DashboardLayout } from "@/components/Layout";
import styled from "styled-components";
import LinksHeader from "@/components/Dashboard/common/LinksHeader";
import { DashboardRoutes } from "@/config/constants";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { t } = useTranslation();
  const tabs = [
    { href: DashboardRoutes.Domains, label: t("dashboard.admin.tabs.tab1") },
    { href: DashboardRoutes.Statistics, label: t("dashboard.admin.tabs.tab2") },
  ];

  return (
    <DashboardLayout>
      <AdminContainer>
        <LinksHeader header={t("dashboard.admin.admin")} links={tabs} />
        {children}
      </AdminContainer>
    </DashboardLayout>
  );
}

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--dashboard-volunteers-container-gap);
`;
