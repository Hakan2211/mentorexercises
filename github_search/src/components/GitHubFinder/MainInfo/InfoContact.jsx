import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import Location from "../../../assets/icons/Contact/Location";
import Work from "../../../assets/icons/Contact/Work";
import Link from "../../../assets/icons/Contact/Link";

const InfoContact = () => {
  return (
    <Wrapper>
      <ContactContainer>
        <ContactContainerTextIcon>
          <ContactIcon>
            <Location />
          </ContactIcon>
          <ContactInfoText>San Francisco</ContactInfoText>
        </ContactContainerTextIcon>
        <ContactContainerTextIcon>
          <ContactIcon>
            <Link />
          </ContactIcon>
          <ContactInfoText>Homepage</ContactInfoText>
        </ContactContainerTextIcon>
      </ContactContainer>

      <ContactContainer>
        <ContactContainerTextIcon>
          <ContactIcon>
            <FaTwitter style={{ width: "20px", height: "20px" }} />
          </ContactIcon>
          <ContactInfoText>Twitter</ContactInfoText>
        </ContactContainerTextIcon>
        <ContactContainerTextIcon>
          <ContactIcon>
            <Work />
          </ContactIcon>
          <ContactInfoText>CompanyName</ContactInfoText>
        </ContactContainerTextIcon>
      </ContactContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 10rem;
  margin-top: 3rem;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactContainerTextIcon = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: 20px;
`;

const ContactIcon = styled.div`
  height: 20px;
  width: 20px;
`;

const ContactInfoText = styled.h3`
  font-size: 12px;
  margin-right: 5rem;
`;
export default InfoContact;
