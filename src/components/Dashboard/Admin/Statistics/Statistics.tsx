"use client";
import { Paragraph } from "@/components/styled/text";
import { useTranslation } from "react-i18next";

export const Statistics = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Paragraph>{t("dashboard.admin.statistics.comingSoon")}</Paragraph>
    </div>
  );
};
