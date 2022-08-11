import styled from "styled-components";

const Logo = ({ text }) => {
  return <LogoName>{text}</LogoName>;
};
const LogoName = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;
export default Logo;
