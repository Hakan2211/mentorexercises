import styled from "styled-components";
import Avatar from "../common/Avatar";
import InfoContent from "./InfoContent";

const Info = ({ user }) => {
  console.log(user, "UserInfo");
  return (
    <Wrapper>
      <AvatarContainer>
        <Avatar src="https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpdGh1YnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      </AvatarContainer>
      <InfoContent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 50rem;
  background-color: var(--container-color);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-gap: 30px;
  padding: 3rem;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
`;

export default Info;
