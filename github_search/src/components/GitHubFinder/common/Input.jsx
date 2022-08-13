import styled from "styled-components";
import SearchIcon from "../../../assets/icons/SearchIcon";
import Button from "./Button";

const Input = () => {
  return (
    <InputWrapper>
      <Label>
        <SearchIcon />
      </Label>
      <InputComponent placeholder="Search GitHub username..." />
      <ButtonWrapper>
        <Button text="Search" />
      </ButtonWrapper>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  background-color: var(--container-color);
  padding: 1rem;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 2rem;
`;

const InputComponent = styled.input`
  color: var(--white);
  height: 3rem;
  background-color: var(--container-color);
  width: 50rem;
  border: none;
  outline: none;
  font-size: 20px;
  margin-left: 2rem;
  ::placeholder {
    color: var(--white);
    font-size: 16px;
  }
`;

const Label = styled.label`
  width: 30px;
  height: 30px;
  color: var(--icon-color);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 25rem;
`;
export default Input;
