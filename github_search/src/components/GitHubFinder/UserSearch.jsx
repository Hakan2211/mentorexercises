import styled from "styled-components";
import SearchIcon from "../../assets/icons/SearchIcon";
import Button from "./common/Button";
import ErrorText from "./Error/ErrorText";

const UserSearch = ({ value, onChange, onUserSearch, user }) => {
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
      {user.message ? <ErrorText>No results</ErrorText> : ""}

      <Button onClick={onUserSearch}>Search</Button>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--container-color);
  border-radius: 15px;
  align-items: center;
  margin-bottom: 2rem;
  width: 73rem;
  height: 6.9rem;
`;

const SearchInput = styled.input`
  color: var(--white);
  height: 3rem;
  background-color: var(--container-color);
  width: 40rem;
  border: none;
  outline: none;
  font-size: 18px;
  font-family: "SpaceMonoRegular";
  margin-left: 2.4rem;
  ::placeholder {
    color: var(--white);
    font-size: 18px;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  color: var(--icon-color);
  margin-left: 3.2rem;
`;

export default UserSearch;
