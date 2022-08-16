import styled from "styled-components";
import Avatar from "../common/Avatar";
import InfoContent from "./InfoContent";

const Info = ({ user }) => {
  console.log(user, "UserInfo");
  const { avatar_url } = user;
  return (
    <>
      {!user.message ? (
        <Wrapper>
          <AvatarContainer>
            <Avatar src={avatar_url} />
          </AvatarContainer>

          <InfoContent user={user} />
        </Wrapper>
      ) : (
        <TryAgainMessage>
          No user found with that name. Try another name.
        </TryAgainMessage>
      )}
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 50rem;
  background-color: var(--container-color);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 117px 1fr;
  grid-gap: 37px;
  padding-left: 4.8rem;
  padding-top: 4.7rem;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
`;

const TryAgainMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export default Info;
