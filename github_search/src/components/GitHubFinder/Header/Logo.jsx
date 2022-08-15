import styled from "styled-components";

const Logo = ({ text }) => {
  return <LogoName>{text}</LogoName>;
};
const LogoName = styled.h1`
  font-size: 26px;
  font-weight: bold;
  width: 12.8rem;
`;
export default Logo;
