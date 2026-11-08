"use client";
import styled from "styled-components";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useTranslation } from "react-i18next";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { UserMenu } from "./UserMenu";

export const AuthButton = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const user = useCurrentUser();

  return user ? <UserMenu /> : <LoginButton href={routes.login(language)}>{t("website.header.login")}</LoginButton>;
};

const LoginButton = styled(Link)`
  display: -webkit-flex;
  display: flex;
  align-items: center;
  height: 44px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: var(--color-midnight);
  border-radius: 22px;
  font-size: var(--homepage-hero-section-header-menu-item-fontSize);
  font-weight: var(--homepage-hero-section-header-menu-item-fontWeight);
  color: var(--color-white);
  text-decoration: none;
`;
