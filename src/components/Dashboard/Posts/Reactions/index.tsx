"use client";
import styled from "styled-components";
import EmojiPicker from "./EmojiPicker";

const Background = styled.div``;

export default function Reactions() {
  return (
    <Background>
      <EmojiPicker onChange={(val) => console.log(val)} />
    </Background>
  );
}
