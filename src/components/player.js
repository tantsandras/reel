import * as React from "react";
import styled from "styled-components";

const PlayerBox = styled.article`
  padding-left: 1rem;
  padding-right: 1rem;
  height: auto;
  padding-bottom: 10px;
`;

const Player = ({ title, link, number }) => {
  return (
    <PlayerBox>
      <iframe
        width="100%"
        height="20"
        title={title}
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${number}&color=%23ff5500&inverse=false&auto_play=false&show_user=true`}
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: 100,
          textAlign: "center",
        }}
      >
        <a
          href={link}
          title={title}
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#cccccc",
            textDecoration: "none",
          }}
        >
          {title}
        </a>
      </div>
    </PlayerBox>
  );
};

export default Player;
