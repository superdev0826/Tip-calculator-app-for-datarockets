import React, { useContext } from "react";
import styled from "styled-components";

import { TipCalculatorContext } from "../../../context";
import Total from "./Total";

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.neutral.darkest};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;

  @media (min-width: 1024px) {
    max-width: 50%;
    flex: 1;
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.color.neutral.darkest};
  font-family: ${({ theme }) => theme.typography.family.body};
  font-size: 0.84rem;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  padding: 16px;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
    cursor: pointer;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.neutral.dark};
    color: ${({ theme }) => theme.color.neutral.darker};
    opacity: 0.35;
  }
`;

const ResumeBox = () => {
  const { reset, results } = useContext(TipCalculatorContext);
  const { tipAmount, total } = results;

  return (
    <Container>
      <div>
        <Total subtitle="/ person" title="Tip Amount" total={tipAmount} />
        <Total subtitle="/ person" title="Total" total={total} />
      </div>
      <Button disabled={!total} onClick={reset} type="button">
        Reset
      </Button>
    </Container>
  );
};

export default ResumeBox;
