import styled from "styled-components";
import InfoContact from "./InfoContact";
import InfoContentBox from "./InfoContentBox";

const InfoContent = () => {
  return (
    <Wrapper>
      <ContentHeader>
        <InfoName>
          <Name>The Octocat</Name>
          <NameLink>@octocat</NameLink>
        </InfoName>
        <Date>Joined 25 Jan 2011</Date>
      </ContentHeader>
      <ProfileTextWrapper>This profile has no bio</ProfileTextWrapper>
      <InfoContentBox />
      <InfoContact />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const InfoName = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 1px;
`;
const NameLink = styled.p`
  color: var(--icon-color);
  font-size: 16px;
`;

const Date = styled.p`
  font-size: 16px;
`;

const ProfileTextWrapper = styled.div`
  font-size: 16px;
  color: var(--grey);
  margin-top: 3rem;
  height: 8rem;
`;

export default InfoContent;
