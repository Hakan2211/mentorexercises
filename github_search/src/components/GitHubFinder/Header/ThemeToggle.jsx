import styled from "styled-components";
import LightIcon from "../../../assets/icons/Themes/LightIcon";

const ThemeToggle = () => {
  return (
    <Wrapper>
      <ThemeText>Light</ThemeText>
      <ThemeIcon>
        <LightIcon />
      </ThemeIcon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const ThemeText = styled.h3`
  font-size: 10px;
  text-transform: uppercase;
  font-weight: normal;
  color: var(--white);
  margin-right: 2rem;
  letter-spacing: 2px;
`;

const ThemeIcon = styled.div`
  width: 15px;
  height: 15px;
`;
export default ThemeToggle;
