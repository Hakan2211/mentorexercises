import styled from "styled-components";
import SearchIcon from "../../assets/icons/SearchIcon";
import Button from "./common/Button";

const UserSearch = ({ value, onChange, onUserSearch }) => {
  return (
    <InputWrapper>
      <SearchWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>

        <SearchInput
          placeholder="Search GitHub username..."
          value={value}
          onChange={onChange}
        />
      </SearchWrapper>

      <Button onClick={onUserSearch}>Search</Button>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--container-color);
  padding: 1rem;
  border-radius: 5px;
  align-items: center;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
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

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchIconWrapper = styled.div`
  width: 30px;
  height: 30px;
  color: var(--icon-color);
`;

export default UserSearch;
