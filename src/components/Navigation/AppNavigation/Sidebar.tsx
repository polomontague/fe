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
                {Icon ? <Icon /> : null}
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
  width: var(--sidebar-width);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: var(--mint);
`;

const ContainerLogo = styled.div`
  padding: var(--large-spacing);
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
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  list-style-type: none;
`;

const MenuItem = styled(Link)<{ $selected: boolean }>`
  display: -webkit-inline-flex;
  display: inline-flex;
  gap: var(--small-spacing);
  align-items: center;
  width: 100%;
  height: var(--field-size);
  padding-left: var(--large-spacing);
  padding-right: var(--large-spacing);
  background-color: ${({ $selected }) => ($selected ? "var(--blue)" : "transparent")};
  font-weight: var(--bold);
  color: var(--white);
  text-decoration: none;
  text-transform: uppercase;

  &:hover,
  &active,
  &focus {
    background-color: var(--medium-blue);
  }

  svg {
    width: var(--field-icon-size);
    height: var(--field-icon-size);
    fill: var(--white);
  }
`;
