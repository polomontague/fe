"use client";
import styled from "styled-components";

type TextInputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export const TextInput = ({ placeholder, value, onChange }: TextInputProps) => {
  return <Input placeholder={placeholder} value={value} onChange={(evt) => onChange(evt.target.value)} />;
};

const Input = styled.input`
  width: 100%;
  height: var(--field-size);
  padding-left: var(--medium-spacing);
  padding-right: var(--medium-spacing);
  background-color: var(--white);
  border: var(--border-width) solid var(--medium-grey);
  border-radius: var(--field-border-radius);
  outline: none;
  font-family: var(--sans-serif);
  font-size: var(--font-size);
  color: var(--grey);
  transition: var(--short-transition);

  &:focus {
    border: var(--border-width) solid var(--light-mint);
  }

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
    -webkit-text-fill-color: var(--grey);
    caret-color: var(--grey);
  }
`;
