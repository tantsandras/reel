import * as React from "react";
import styled from "styled-components";
import {
  FacebookWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social";

const SocialBox = styled.span`
  text-align: right;
  width: 100%;
  height: 30px;
  color: black;
  display: inline-block;
  font-family: Knewave;
  transform: translateY(-60px);
  font-size: 16px;
  vertical-align: middle;
  text-transform: uppercase;
  z-index: 2;
`;

const Facebook = styled(FacebookWithCircle)`
  color: #fb0cab;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 5px;
`;

const Insta = styled(InstagramWithCircle)`
  color: #fb0cab;
  padding-bottom: 5px;
  padding-right: 2px;
  margin-right: 2.6rem;
`;

const Social = () => {
  return (
    <SocialBox>
      Follow us:
      <a
        href="https://www.facebook.com/ReelFeminism/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Go to our Facebook"
      >
        <Facebook size="22" aria-hidden="true" />
      </a>
      <a
        href="https://www.instagram.com/reelfeminism/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Go to our Facebook"
      >
        <Insta size="22" aria-hidden="true" />
      </a>
    </SocialBox>
  );
};

export default Social;
