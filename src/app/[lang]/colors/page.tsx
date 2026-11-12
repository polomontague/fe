import styled from "styled-components";
import "@/app/variables.css";

export default function TestColorsPage() {
  return (
    <Frame>
      <Column>
        <Circle $color="var(--dark-blue)" />
        <Circle $color="var(--medium-blue)" />
        <Circle $color="var(--light-blue)" />
      </Column>
      <Column>
        <Circle $color="var(--orchid)" />
        <Circle $color="var(--medium-orchid)" />
        <Circle $color="var(--light-orchid)" />
      </Column>
      <Column>
        <Circle $color="var(--lavender)" />
        <Circle $color="var(--medium-lavender)" />
        <Circle $color="var(--light-lavender)" />
      </Column>
      <Column>
        <Circle $color="var(--coral)" />
        <Circle $color="var(--medium-coral)" />
        <Circle $color="var(--light-coral)" />
      </Column>
      <Column>
        <Circle $color="var(--mint)" />
        <Circle $color="var(--medium-mint)" />
        <Circle $color="var(--light-mint)" />
      </Column>
      <Column>
        <Circle $color="var(--raspberry)" />
        <Circle $color="var(--medium-raspberry)" />
        <Circle $color="var(--light-raspberry)" />
      </Column>
      <Column>
        <Circle $color="var(--sand)" />
        <Circle $color="var(--light-sand)" />
        <CircleContrast $color="var(--white)" />
      </Column>
    </Frame>
  );
}

const Frame = styled.div`
  display: -webkit-flex;
  display: flex;
  gap: 16px;
  padding: 32px;
`;

const Column = styled.div``;

const Circle = styled.div<{ $color: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: -25px;
  background-color: ${({ $color }) => $color};
`;

const CircleContrast = styled(Circle)`
  box-shadow: 0 0 312px #dcdbdb;
`;
