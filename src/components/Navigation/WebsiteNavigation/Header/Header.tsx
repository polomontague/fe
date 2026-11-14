"use client";
import styled from "styled-components";
import N4DLogo from "@/components/svg/N4DLogo";
import { useTranslation } from "react-i18next";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { AuthButton } from "./AuthButton";
import { routes } from "@/constants/routes";
import { LanguageSelector } from "./LanguageSelector";

type MenuLink = {
  href: string;
  label: string;
};

export const Header = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const pathname = usePathname();
  const links: MenuLink[] = [
    { href: routes.about(language), label: t("website.header.about") },
    { href: routes.volunteer(language), label: t("website.header.volunteer") },
    { href: routes.events(language), label: t("website.header.events") },
  ];

  return (
    <HeaderElement>
      <NextLink href={routes.home(language)}>
        <N4DLogo />
      </NextLink>
      <MainNav aria-label="Main navigation">
        <LinkList>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} $selected={link.href === pathname}>
                {link.label}
              </Link>
            </li>
          ))}
        </LinkList>
      </MainNav>
      <ButtonFrame>
        <LanguageSelector />
        <nav aria-label="Account navigation">
          <AuthButton />
        </nav>
      </ButtonFrame>
    </HeaderElement>
  );
};

const HeaderElement = styled.header`
  display: -webkit-flex;
  display: flex;
  align-items: center;
  gap: var(--medium-spacing);
  height: var(--header-height);
  padding-left: var(--large-spacing);
  padding-right: var(--large-spacing);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: var(--mint);
`;

const MainNav = styled.nav`
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  flex: 1;
`;

const LinkList = styled.ul`
  display: -webkit-flex;
  display: flex;
  gap: var(--medium-spacing);
  margin: 0;
  padding: 0;
  list-style: none;
  list-style-type: none;
`;

const Link = styled(NextLink)<{ $selected: boolean }>`
  font-size: var(--font-size);
  font-weight: var(--bold);
  color: ${({ $selected }) => ($selected ? "var(--blue) !important" : "var(--white)")};
  text-decoration: none;
  transition: var(--short-transition);
  text-transform: uppercase;

  &:hover,
  &:active,
  &:focus {
    color: var(--medium-blue);
  }
`;

const ButtonFrame = styled.div`
  display: -webkit-flex;
  display: flex;
  gap: 8px;
`;
