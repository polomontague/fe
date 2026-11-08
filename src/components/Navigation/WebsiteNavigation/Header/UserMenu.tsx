"use client";
import styled from "styled-components";
import { useState } from "react";
import { getInitials } from "./helpers";
import { useLogout } from "@/hooks/useLogout";
import { useTranslation } from "react-i18next";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import Link from "next/link";
import { routes } from "@/constants/routes";

export const UserMenu = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [open, setOpen] = useState(false);
  const user = useCurrentUser();
  const initials = getInitials(user?.fullName) || user?.firstName?.[0]?.toUpperCase() || "";
  const { mutate: logout } = useLogout();

  return (
    <Wrapper>
      <UserButton onClick={() => setOpen(true)}>{initials}</UserButton>
      <MenuWrapper $open={open}>
        <OverlayClose onClick={() => setOpen(false)} />
        <Menu>
          <DashboardLink href={routes.dashboard(language)}>{t("website.header.dashboard")}</DashboardLink>
          <LogoutButton onClick={() => logout()}>{t("website.header.logout")}</LogoutButton>
        </Menu>
      </MenuWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: relative;
`;

const UserButton = styled.button`
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: var(--color-midnight);
  border: none;
  border-radius: 50%;
  outline: none;
  font-size: var(--homepage-hero-section-header-menu-item-fontSize);
  font-weight: var(--homepage-hero-section-header-menu-item-fontWeight);
  color: var(--color-white);
`;

const MenuWrapper = styled.ul<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "block" : "none")};
  position: absolute;
  right: 0;
  z-index: 0;
`;

const OverlayClose = styled.button`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  border: none;
  outline: none;
  z-index: 1;
`;

const Menu = styled.ul`
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  padding: 8px;
  margin: 0;
  margin-top: 8px;
  z-index: 2;
  background-color: var(--color-orchid);
  border-radius: 22px;
`;

const DashboardLink = styled(Link)`
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: var(--color-orchid-subtle);
  border-radius: 14px;
  font-size: var(--homepage-hero-section-header-menu-item-fontSize);
  font-weight: var(--homepage-hero-section-header-menu-item-fontWeight);
  color: var(--color-midnight);
  text-decoration: none;
  text-transform: uppercase;
`;

const LogoutButton = styled.button`
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: var(--color-orchid-subtle);
  border: none;
  border-radius: 14px;
  outline: none;
  font-size: var(--homepage-hero-section-header-menu-item-fontSize);
  font-weight: var(--homepage-hero-section-header-menu-item-fontWeight);
  color: var(--color-midnight);
  text-transform: uppercase;
`;
