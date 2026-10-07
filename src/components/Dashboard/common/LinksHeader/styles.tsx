import styled from "styled-components";
import { Heading2 } from "../../../styled/text";
import { hyphenationStyles } from "../../../styled/mixins";
import Link from "next/link";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--opportunities-header-title-tabs-gap);
`;

export const HeaderTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const HyphenatedHeading2 = styled(Heading2)`
  ${hyphenationStyles}
`;

export const TabsSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  width: var(--filters-search-bar-width);

  @media (max-width: 767px) {
    align-items: stretch;
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
`;

export const Tabs = styled.ul`
  display: flex;
  flex-direction: row;
  gap: var(--opportunities-header-tabs-gap);
  min-width: 0;
  padding: 0;

  @media (max-width: 767px) {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 4px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    > * {
      flex-shrink: 0;
    }
  }
`;

type TabHeadingProps = {
  $isSelected: boolean;
};

export const TabHeading = styled(Link)<TabHeadingProps>`
  disply: -webkit-flex;
  display: flex;
  align-items: center;
  cursor: pointer;
  min-height: 40px;
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--color-midnight);
  font-family: inherit;
  font-weight: var(--text-h4-font-weight);
  font-size: var(--text-h4-font-size);
  line-height: var(--text-h4-line-height);
  text-decoration: none;
  letter-spacing: var(--text-h4-letter-spacing);
  border-bottom: ${(props) =>
    props.$isSelected ? "var(--opportunities-header-tabs-border-bottom) solid currentColor" : "none"};
  padding-bottom: ${(props) => (props.$isSelected ? "var(--opportunities-header-tabs-padding-bottom)" : "0")};
`;
