import styled from "styled-components";

const Logo = styled.h1`
  color: ${({ theme }) => theme.color.neutral.darkest};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.42em;
  line-height: 36px;
  max-width: 110px;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
  word-break: break-all;
`;

export default Logo;
