import styled from "styled-components";

const Avatar = ({ src }) => {
  return <AvatarPicture src={src} />;
};
const AvatarPicture = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  cursor: pointer;
`;
export default Avatar;
