import styled from "styled-components";

const Button = ({ text }) => {
  return <ButtonComponent>{text}</ButtonComponent>;
};

const ButtonComponent = styled.button`
  background-color: var(--search-color);
  color: var(--white);
  border: none;
  width: 10rem;
  height: 46px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
export default Button;
