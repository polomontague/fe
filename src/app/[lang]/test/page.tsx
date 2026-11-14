"use client";
import "../../variables.css";
import { useState } from "react";
import styled from "styled-components";
import { TextInput } from "./TextInput";
import { Button } from "./Button";

export default function TestPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <Background>
      <Form>
        <TextInput placeholder="First Name..." value={firstName} onChange={setFirstName} />
        <TextInput placeholder="Last Name..." value={lastName} onChange={setLastName} />
        <Button label="Join" disabled={true} />
      </Form>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--light-sand);
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--small-spacing);
  width: 500px;
  padding: var(--medium-spacing);
  background-color: var(--medium-sand);
  border-radius: var(--surface-border-radius);
`;
