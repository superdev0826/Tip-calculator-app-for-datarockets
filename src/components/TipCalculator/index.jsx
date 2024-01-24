import React from "react";
import styled from "styled-components";

import TipCalculatorContextProvider from "../../context";
import InputBox from "./InputBox";
import ResumeBox from "./ResumeBox";

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.neutral.white};
  border-radius: 16px 16px 0 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 375px;
  padding: 32px 24px;
  width: 100%;

  @media (min-width: 1024px) {
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    flex-direction: row;
    gap: 30px;
    max-width: 968px;
    padding: 32px;
  }
`;

const TipCalculator = () => (
  <Container>
    <TipCalculatorContextProvider>
      <InputBox />
      <ResumeBox />
    </TipCalculatorContextProvider>
  </Container>
);

export default TipCalculator;
