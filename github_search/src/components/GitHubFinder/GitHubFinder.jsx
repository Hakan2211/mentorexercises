import styled from "styled-components";
import Input from "./common/Input";
import Header from "./Header/Header";
import Info from "./Info";

const GitHubFinder = () => {
  return (
    <Wrapper>
      <Header />
      <Input />
      <Info />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80rem;
  margin: 10rem auto;
`;

export default GitHubFinder;
