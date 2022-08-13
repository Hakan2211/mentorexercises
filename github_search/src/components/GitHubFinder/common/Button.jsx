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
  transition: all 0.2s ease-in;
  &:hover {
    background-color: #0c68fb;
  }
  &:active {
    transform: scale(0.98);
  }
`;
export default Button;
