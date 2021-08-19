import * as React from "react";
import styled from "styled-components";
import Player from "./player";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 80px;
  position: relative;
  min-width: 300px;
  max-width: 300px;
  height: auto !important;
  align-items: center;
  justify-content: center;
  background-color: #fffafa;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.25);
`;

const Title = styled.h4`
  margin-top: 10px;
  font-family: "Knewave";
  color: black;
  text-align: center;
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
`;

const Description = styled.p`
  padding-left: 1rem;
  padding-right: 1rem;
  height: auto;
  padding-bottom: 2rem;
  text-align: left;
  font-size: 1rem;
  color: black;
  font-family: Roboto;
  margin-bottom: 0px;
`;

const EpisodeCard = ({ guid, title, link, image, summary }) => {
  const trackNumber = guid.split("tag:soundcloud,2010:tracks/");
  const cutTitle = title.split("-");
  return (
    <Card>
      <Img src={image} alt="Episode art" />
      <Title>
        {cutTitle[0]}
        <br />
        {cutTitle[1]}
      </Title>
      <Player title={title} link={link} number={trackNumber[1]} />
      <Description>{summary}</Description>
    </Card>
  );
};

export default EpisodeCard;
