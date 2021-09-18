import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Heading,
  Subtitle,
} from './InfoElements';

const InfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <TextWrapper>
              <Heading>About People’s Wealth</Heading>
              <Subtitle>
                People’s Fortunes is a subsidiary of the holding company Peoples
                Wealth, LLC. People’s Fortunes is a fee-based financial firm
                dedicated to providing middle class families access to a network
                of financial professionals so that they can be confident when
                making financial decisions. Our clients can communicate with our
                financial professionals through their social media and get a
                response that was viewed by a platform of advisors. We strive to
                put our clients in the best financial position for them to in
                turn create a positive impact on society.
              </Subtitle>
            </TextWrapper>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
