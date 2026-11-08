"use client";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { TranslateIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Lang } from "need4deed-sdk";
import { useSearchParams } from "next/navigation";

export const LanguageSelector = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleLanguageChange = (newLang: Lang) => {
    const currentLang = language;

    if (currentLang !== newLang) {
      const segments = pathname.split("/");

      segments[1] = newLang;

      const newPath = segments.join("/");
      const query = searchParams.toString();

      router.push(query ? `${newPath}?${query}` : newPath);
    }
  };

  return (
    <Wrapper>
      <OpenMenuButton onClick={() => setOpen(true)}>
        <TranslateIcon size={20} color="var(--color-white)" />
      </OpenMenuButton>
      <MenuWrapper $open={open}>
        <OverlayCloseButton onClick={() => setOpen(false)} />
        <Menu>
          <li>
            <MenuButton $selected={language === Lang.DE} onClick={() => handleLanguageChange(Lang.DE)}>
              Deutsch
            </MenuButton>
          </li>
          <li>
            <MenuButton $selected={language === Lang.EN} onClick={() => handleLanguageChange(Lang.EN)}>
              English
            </MenuButton>
          </li>
        </Menu>
      </MenuWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const OpenMenuButton = styled.button`
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: var(--color-midnight);
  border: none;
  border-radius: 12px;
  outline: none;
`;

const MenuWrapper = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "block" : "none")};
  position: absolute;
  left: 0;
  z-index: 0;
`;

const OverlayCloseButton = styled.button`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: transparent;
  border: none;
  outline: none;
`;

const Menu = styled.ul`
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  padding: 8px;
  margin: 0;
  margin-top: 8px;
  z-index: 2;
  background-color: var(--color-orchid);
  border-radius: 12px;
  list-style: none;
  list-style-type: none;
`;

const MenuButton = styled.button<{ $selected: boolean }>`
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: ${({ $selected }) => ($selected ? "var(--color-midnight)" : "var(--color-orchid-subtle)")};
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: var(--homepage-hero-section-header-menu-item-fontSize);
  font-weight: var(--homepage-hero-section-header-menu-item-fontWeight);
  color: ${({ $selected }) => ($selected ? "var(--color-white)" : "var(--color-midnight)")};
  text-transform: uppercase;
`;
