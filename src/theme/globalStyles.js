import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      box-sizing: border-box;
    }

    html, body {
      background-color: ${theme.color.neutral.light};
      font-family: ${theme.typography.family.body};
      font-size: ${theme.typography.size.body};
      height: 100vh;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    #root {
      height: 100%;
      width: 100%;
    }
  `}
`;

export default GlobalStyle;
