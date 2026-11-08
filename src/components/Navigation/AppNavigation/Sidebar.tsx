"use client";
import styled from "styled-components";
import N4DLogo from "@/components/svg/N4DLogo";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { UserRole } from "need4deed-sdk";
import {
  NotepadIcon,
  CalendarDotsIcon,
  ShieldCheckIcon,
  HandHeartIcon,
  UsersThreeIcon,
  BuildingsIcon,
  SquaresFourIcon,
} from "@phosphor-icons/react";
import { ElementType } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/constants/routes";

type MenuItemType = {
  label: string;
  Icon?: ElementType;
  route: string;
  text?: string;
};

export const Sidebar = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const user = useCurrentUser();
  const isAgent = user?.role === UserRole.AGENT;
  const isVolunteer = user?.role === UserRole.VOLUNTEER;
  const canSeeStaffNav = !isAgent && !isVolunteer;
  const isStaff = user?.role === UserRole.COORDINATOR || user?.role === UserRole.ADMIN;
  const userInitials = user?.fullName
    ? user.fullName
        .split(" ")
        .filter(Boolean)
        .map((part) => part[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : user?.firstName?.[0]?.toUpperCase() || "";
  const pathname = usePathname();
  const items: MenuItemType[] = [
    { label: t("dashboard.home.sidebar.dashboard"), Icon: SquaresFourIcon, route: routes.dashboard(language) },
    ...(isVolunteer
      ? []
      : [
          {
            label: t("dashboard.home.sidebar.volunteers"),
            Icon: UsersThreeIcon,
            route: routes.volunteers(language),
          },
        ]),
    {
      label: t("dashboard.home.sidebar.opportunities"),
      Icon: HandHeartIcon,
      route: routes.opportunities(language),
    },
    ...(isVolunteer
      ? []
      : [
          {
            label: t("dashboard.home.sidebar.organizations"),
            Icon: BuildingsIcon,
            route: routes.organizations(language),
          },
        ]),
    ...(isVolunteer
      ? []
      : [
          {
            label: t("dashboard.home.sidebar.posts"),
            Icon: NotepadIcon,
            route: routes.posts(language),
          },
        ]),
    ...(canSeeStaffNav
      ? [
          {
            label: t("dashboard.home.sidebar.calendar"),
            Icon: CalendarDotsIcon,
            route: routes.calendar(language),
          },
        ]
      : []),
    ...(isStaff
      ? [
          {
            label: t("dashboard.home.sidebar.admin"),
            Icon: ShieldCheckIcon,
            route: routes.admin(language),
          },
        ]
      : []),
    {
      label: t("dashboard.home.sidebar.profile"),
      text: userInitials,
      route: routes.profile(language),
    },
  ];

  return (
    <Background>
      <ContainerLogo>
        <N4DLogo />
      </ContainerLogo>
      <MainNav>
        <MainMenu>
          {items.map(({ route, Icon, label }) => (
            <li key={route}>
              <MenuItem href={route} $selected={route === pathname}>
                {Icon ? <Icon size={24} /> : null}
                {label}
              </MenuItem>
            </li>
          ))}
        </MainMenu>
      </MainNav>
    </Background>
  );
};

const Background = styled.aside`
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  width: 270px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-orchid-subtle);
`;

const ContainerLogo = styled.div`
  padding: 24px;
`;

const MainNav = styled.nav`
  display: -webkit-flex;
  display: flex;
  align-items: center;
  flex: 1;
`;

const MainMenu = styled.ul`
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
  list-style-type: none;
`;

const MenuItem = styled(Link)<{ $selected: boolean }>`
  display: -webkit-inline-flex;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  height: 44px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: ${({ $selected }) => ($selected ? "var(--color-orchid)" : "transparent")};
  border-radius: 22px;
  font-size: var(--homepage-hero-section-header-menu-item-fontSize);
  font-weight: var(--homepage-hero-section-header-menu-item-fontWeight);
  color: var(--color-midnight);
  text-decoration: none;
  text-transform: uppercase;
`;
