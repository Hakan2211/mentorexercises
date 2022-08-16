import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import Location from "../../../assets/icons/Contact/Location";
import Work from "../../../assets/icons/Contact/Work";
import Link from "../../../assets/icons/Contact/Link";

const InfoContact = ({ user }) => {
  const { location, company, twitter_username, blog } = user;
  return (
    <Wrapper>
      <ContactContainerTextIcon>
        <ContactIcon>
          <Location />
        </ContactIcon>
        <ContactInfoText>
          {location ? (
            location
          ) : (
            <NotAvailableText>Not Available</NotAvailableText>
          )}
        </ContactInfoText>
      </ContactContainerTextIcon>
      <ContactContainerTextIcon>
        <ContactIcon>
          <Link />
        </ContactIcon>
        <ContactInfoText>
          {blog ? blog : <NotAvailableText>Not Available</NotAvailableText>}
        </ContactInfoText>
      </ContactContainerTextIcon>

      <ContactContainerTextIcon>
        <ContactIcon>
          <FaTwitter style={{ width: "20px", height: "20px" }} />
        </ContactIcon>
        <ContactInfoText>
          {twitter_username ? (
            twitter_username
          ) : (
            <NotAvailableText>Not Available</NotAvailableText>
          )}
        </ContactInfoText>
      </ContactContainerTextIcon>
      <ContactContainerTextIcon>
        <ContactIcon>
          <Work />
        </ContactIcon>
        <ContactInfoText>
          {company ? (
            company
          ) : (
            <NotAvailableText>Not Available</NotAvailableText>
          )}
        </ContactInfoText>
      </ContactContainerTextIcon>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 10rem;
  margin-top: 3.7rem;
`;

const ContactContainerTextIcon = styled.div`
  display: flex;

  align-items: center;
  height: 20px;
`;

const ContactIcon = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 1.6rem;
`;

const ContactInfoText = styled.h3`
  font-size: 15px;
  font-family: "SpaceMonoRegular";
  font-weight: normal;
`;

const NotAvailableText = styled.p`
  font-size: 12px;
  opacity: 0.5;
`;
export default InfoContact;
