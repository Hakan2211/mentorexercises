import styled from "styled-components";

const InfoContentBox = () => {
  return (
    <Wrapper>
      <InfoContainer>
        <InfoText>Repos</InfoText>
        <InfoNumber>8</InfoNumber>
      </InfoContainer>
      <InfoContainer>
        <InfoText>Followers</InfoText>
        <InfoNumber>3938</InfoNumber>
      </InfoContainer>
      <InfoContainer>
        <InfoText>Following</InfoText>
        <InfoNumber>9</InfoNumber>
      </InfoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 10rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--body-color);
  border-radius: 5px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoText = styled.h1`
  color: var(--grey);
  font-size: 12px; ;
`;

const InfoNumber = styled.p`
  font-size: 24px;
  color: var(--white);
  font-weight: bold;
`;

export default InfoContentBox;
