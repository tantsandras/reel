import * as React from "react";
import styled from "styled-components";
import {
  FacebookWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social";

const SocialBox = styled.div`
  transform: translateY(-200px);
  text-align: right;
  width: 100%;
  height: 40px;
  padding-top: 10px;
  color: black;
  font-family: Knewave;
  font-size: 20px;
  vertical-align: middle;
  text-transform: uppercase;
`;

const Facebook = styled(FacebookWithCircle)`
  color: #fb0cab;
  padding-right: 20px;
`;

const Insta = styled(InstagramWithCircle)`
  color: #fb0cab;
`;

const Social = () => {
  return (
    <SocialBox>
      Follow us &nbsp;&nbsp;
      <a
        href="https://www.facebook.com/ReelFeminism/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Go to our Facebook"
      >
        <Facebook size="30" aria-hidden="true" />
      </a>
      <a
        href="https://www.instagram.com/reelfeminism/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Go to our Facebook"
      >
        <Insta size="30" aria-hidden="true" />
      </a>
    </SocialBox>
  );
};

export default Social;
