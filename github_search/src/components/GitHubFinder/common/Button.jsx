import styled from "styled-components";

const Button = ({ children, ...rest }) => {
  return <ButtonComponent {...rest}>{children}</ButtonComponent>;
};

const ButtonComponent = styled.button`
  background-color: var(--search-color);
  color: var(--white);
  border: none;
  width: 10.6rem;
  height: 5rem;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 9.5px;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #60abff;
  }
  /* &:active {
    transform: scale(0.98);
  } */
`;
export default Button;
