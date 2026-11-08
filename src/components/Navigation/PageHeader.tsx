"use client";
import styled from "styled-components";
import { PlusIcon, FadersIcon } from "@phosphor-icons/react";

type PageHeaderProps = {
  search: {
    value: string;
    onChange: (value: string) => void;
  };
  onAddClick?: () => void;
};

export const PageHeader = ({ search, onAddClick }: PageHeaderProps) => {
  return (
    <Header>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={search.value}
        onChange={(evt) => search.onChange(evt.target.value)}
      />
      <Button>
        <FadersIcon size={20} color="var(--color-midnight)" />
      </Button>
      {onAddClick && (
        <Button onClick={() => onAddClick()}>
          <PlusIcon size={20} color="var(--color-midnight)" />
        </Button>
      )}
    </Header>
  );
};

const Header = styled.header`
  display: -webkit-flex;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 74px;
  padding-left: 18px;
  padding-right: 18px;
  position: sticky;
  top: 0;
  background-color: var(--color-orchid);
`;

const SearchInput = styled.input`
  flex: 1;
  height: 44px;
  padding-left: 18px;
  padding-right: 18px;
  background-color: var(--color-orchid-subtle);
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  color: var(--color-midnight);
`;

const Button = styled.button`
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: var(--color-orchid-subtle);
  border: none;
  border-radius: 8px;
  outline: none;
`;
