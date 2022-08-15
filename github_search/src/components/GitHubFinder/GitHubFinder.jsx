import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import UserSearch from "./UserSearch";

import Header from "./Header/Header";
import Info from "./MainInfo/Info";

const GitHubFinder = () => {
  const [searchValue, setSearchValue] = useState("");
  const [gitHubUser, setGitHubUser] = useState({});

  const fetchGitHubUsers = (user) => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => setGitHubUser(data));
  };

  useEffect(() => {
    fetchGitHubUsers("octomat");
  }, []);

  const handleUserSearch = (e) => {
    fetchGitHubUsers(searchValue);
    setSearchValue("");
  };
  return (
    <Wrapper>
      <Header />
      <UserSearch
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        aria-label="search input"
        onUserSearch={handleUserSearch}
      />
      <Info user={gitHubUser} />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 73rem;
  margin: 10rem auto;
`;

export default GitHubFinder;
