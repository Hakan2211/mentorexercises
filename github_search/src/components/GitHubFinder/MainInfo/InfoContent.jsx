import styled from "styled-components";
import InfoContact from "./InfoContact";
import InfoContentBox from "./InfoContentBox";
import DateFormatter from "../utility/DateFormatter";

const InfoContent = ({ user }) => {
  const { login, name, created_at } = user;
  const createdAt = created_at;

  return (
    <Wrapper>
      <ContentHeader>
        <InfoName>
          <Name>{login}</Name>
          {/* <Date>Joined {format({ created_at }, "dd-MMM-yyyy")}</Date> */}
          <Date>
            Joined <DateFormatter date={createdAt} />
          </Date>
        </InfoName>
        <NameLink>{name ? name : login}</NameLink>
      </ContentHeader>
      <ProfileTextWrapper>This profile has no bio</ProfileTextWrapper>

      {/* * TODO:Fix Style From Figma */}
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
  font-family: "SpaceMonoRegular";
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const InfoName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.h1`
  line-height: 38.51px;
  width: 17.6rem;
  height: 3.9rem;
  margin-bottom: 2px;
`;
const NameLink = styled.p`
  color: var(--icon-color);
  font-size: 16px;

  line-height: 23.7px;
  width: 7.9rem;
  height: 2.9rem;
`;

const Date = styled.p`
  font-size: 15px;
  height: 2.2rem;
  width: 16.6rem;
  line-height: 22.22px;
  margin-right: 4.8rem;
`;

const ProfileTextWrapper = styled.div`
  font-size: 15px;
  width: 48rem;
  color: var(--grey);
  margin-top: 3rem;
  height: 2.5rem;
  opacity: 0.75;
  line-height: 25px;
  margin-bottom: 3.2rem;
`;

export default InfoContent;
