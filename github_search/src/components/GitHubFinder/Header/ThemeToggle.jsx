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

const ThemeIcon = styled.div`
  width: 20px;
  height: 20px;
`;
export default ThemeToggle;
