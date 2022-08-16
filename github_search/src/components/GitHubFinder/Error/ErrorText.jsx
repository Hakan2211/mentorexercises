import styled from "styled-components";

const ErrorText = ({ children }) => {
  return <ErrorTextContent>{children}</ErrorTextContent>;
};

const ErrorTextContent = styled.p`
  font-family: "SpaceMonoRegular";
  font-size: 15px;
  font-weight: bold;
  color: var(--error);
  word-wrap: break-word;

  margin-right: 2.4rem;
`;
export default ErrorText;
