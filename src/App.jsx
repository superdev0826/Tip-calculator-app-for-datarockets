import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Logo from "./components/Logo";
import TipCalculator from "./components/TipCalculator";
import theme from "./theme";
import GlobalStyle from "./theme/globalStyles";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: end;
  margin-top: 20px;
  width: 100%;

  @media (min-width: 1024px) {
    gap: 40px;
    height: 100%;
    justify-content: center;
    margin-top: 0;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Container>
      <Logo>splitter</Logo>
      <TipCalculator />
    </Container>
  </ThemeProvider>
);

export default App;
