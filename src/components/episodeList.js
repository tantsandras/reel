import * as React from "react";
import EpisodeCard from "./episodeCard";

const listStyle = {
  display: `grid`,
  alignItems: `center`,
  width: `100%`,
  height: `auto`,
  gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
  gap: `3%`,
  listStyle: "none",
  padding: 0,
  fontSize: `1rem`,
  transform: "translateY(-100px)",
};

const listItem = {
  gridTemplateColumns: `repeat(6, 1fr)`,
  gridTemplateRows: `repeat(2, 300px)`,
};

const EpisodeList = ({ children }) => {
  return (
    <>
      <ul style={listStyle}>
        <li style={listItem}>{children}</li>
      </ul>
    </>
  );
};

export default EpisodeList;
