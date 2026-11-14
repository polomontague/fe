import styled from "styled-components";

type ButtonProps = {
  label: string;
  disabled: boolean;
};

export const Button = ({ label, disabled }: ButtonProps) => {
  return <ButtonElement disabled={disabled}>{label}</ButtonElement>;
};

const ButtonElement = styled.button`
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--field-size);
  padding-left: var(--large-spacing);
  padding-right: var(--large-spacing);
  background-color: var(--lavender);
  border: none;
  border-radius: var(--field-border-radius);
  outline: none;
  font-family: var(--sans-serif);
  font-size: var(--font-size);
  font-weight: var(--bold);
  color: var(--white);
  text-transform: capitalize;
  transition: var(--short-transition);

  &:hover,
  &:active,
  &:focus {
    background-color: var(--medium-lavender);
  }

  &:disabled {
    background-color: var(--medium-lavender);
    color: var(--light-lavender);
  }
`;
