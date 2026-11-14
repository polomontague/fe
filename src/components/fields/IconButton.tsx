"use client";
import styled from "styled-components";
import { Icon } from "@phosphor-icons/react";

type IconButtonProps = {
  Icon: Icon;
  onClick?: () => void;
};

export const IconButton = ({ Icon, onClick }: IconButtonProps) => {
  return <Button onClick={() => onClick && onClick()}>{<Icon />}</Button>;
};

const Button = styled.button`
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--field-size);
  height: var(--field-size);
  background-color: var(--blue);
  border-radius: 50%;

  &:hover,
  &:active,
  &:focus {
    background-color: var(--medium-blue);
  }

  svg {
    width: var(--field-icon-size);
    height: var(--field-icon-size);
    fill: var(--white);
  }
`;
