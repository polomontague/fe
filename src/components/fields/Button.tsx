"use client";
import styled from "styled-components";

type ButtonProps = {
  label: string;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({ label, selected = false, disabled = false, onClick }: ButtonProps) => {
  return (
    <ButtonElement $selected={selected} disabled={disabled} onClick={() => onClick && onClick()}>
      {label}
    </ButtonElement>
  );
};

const ButtonElement = styled.button<{ $selected: boolean }>`
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--field-size);
  padding-left: var(--large-spacing);
  padding-right: var(--large-spacing);
  background-color: ${({ $selected }) => ($selected ? "var(--medium-blue)" : "var(--blue)")};
  border-radius: var(--field-border-radius);
  font-weight: var(--bold);
  color: var(--white);
  text-transform: capitalize;
  transition: var(--short-transition);

  &:hover,
  &:active,
  &:focus {
    background-color: var(--medium-blue);
  }

  &:disabled {
    background-color: var(--medium-blue);
    color: var(--light-blue);
  }
`;
