import styled from "styled-components";

const InfoContentBox = ({ user }) => {
  const { followers, following, public_repos } = user;
  return (
    <Wrapper>
      <InfoContainer>
        <InfoText>Repos</InfoText>
        <InfoNumber>{public_repos}</InfoNumber>
      </InfoContainer>
      <InfoContainer>
        <InfoText>Followers</InfoText>
        <InfoNumber>{followers}</InfoNumber>
      </InfoContainer>
      <InfoContainer>
        <InfoText>Following</InfoText>
        <InfoNumber>{following}</InfoNumber>
      </InfoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 8.5rem;
  display: flex;
  //justify-content: space-evenly;
  align-items: center;
  background-color: var(--body-color);
  border-radius: 10px;
  width: 48rem;
  margin-right: 4.7rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "SpaceMonoRegular";
  //width: 4rem;
  :nth-child(1) {
    margin-left: 3.2rem;
  }
  :nth-child(2) {
    margin-left: 9.9rem;
  }
  :nth-child(3) {
    margin-left: 8.2rem;
  }
`;

const InfoText = styled.h1`
  color: var(--grey);
  font-size: 13px;
  font-weight: normal;
  line-height: 19px;
`;

const InfoNumber = styled.p`
  font-size: 22px;
  color: var(--white);
  font-weight: bold;
`;

export default InfoContentBox;
