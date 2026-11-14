"use client";
import styled from "styled-components";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

type SearchInputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput = ({ placeholder, value, onChange }: SearchInputProps) => {
  return (
    <Wrapper>
      <Input type="text" placeholder={placeholder} value={value} onChange={(evt) => onChange(evt.target.value)} />
      <ContainerIcon>
        <MagnifyingGlassIcon />
      </ContainerIcon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  height: var(--field-size);
`;

const ContainerIcon = styled.div`
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--field-size);

  svg {
    width: var(--field-icon-size);
    height: var(--field-icon-size);
    fill: var(--medium-grey);
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: var(--field-size);
  padding-right: var(--medium-spacing);
  background-color: var(--white);
  border: var(--border-width) solid var(--medium-grey);
  border-radius: var(--field-border-radius);
  color: var(--medium-grey);

  &::placeholder {
    color: var(--medium-grey);
    opacity: 1; /* Firefox */
  }

  &::-ms-input-placeholder {
    /* Edge 12 -18 */
    color: var(--medium-grey);
  }

  &:-webkit-autofill {
    /* Chrome, Safari, Edge */
    -webkit-box-shadow: 0 0 0 1000px var(--white) inset;
    box-shadow: 0 0 0 1000px var(--white) inset;
    -webkit-text-fill-color: var(--medium-grey);
    caret-color: var(--medium-grey);
  }

  &:focus {
    border-color: var(--light-mint);
  }

  &:focus ~ div > svg {
    fill: var(--light-mint);
  }
`;
