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
      <Button text="Search" />
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
  height: 5rem;
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
export default Input;

<svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  />
</svg>;
