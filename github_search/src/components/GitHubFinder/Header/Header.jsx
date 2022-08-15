import styled from "styled-components";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Wrapper>
      <Logo text="devfinder" />
      <ThemeToggle />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.6rem;
  width: 73rem;
  height: 3.8rem;
`;
export default Header;
