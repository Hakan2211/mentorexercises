import { useState } from "react";
import styled from "styled-components";
import MoonIcon from "../../../assets/icons/Themes/MoonIcon";
import SunIcon from "../../../assets/icons/Themes/SunIcon";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <Wrapper onClick={toggleTheme}>
      <ThemeText>{isDarkMode ? "Light" : "Dark"}</ThemeText>
      <ThemeIcon>{isDarkMode ? <SunIcon /> : <MoonIcon />}</ThemeIcon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 8.9rem;
  height: 2rem;
`;
const ThemeText = styled.h3`
  font-size: 13px;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--white);
  margin-right: 2rem;
  letter-spacing: 2px;
  font-family: "SpaceMonoRegular";
  letter-spacing: 2.5px;
`;

const DarkText = styled(ThemeText)`
  color: #697c9a;
`;

const ThemeIcon = styled.div`
  width: 20px;
  height: 20px;
`;
export default ThemeToggle;
