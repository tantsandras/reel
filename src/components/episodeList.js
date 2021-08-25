import * as React from "react";

const listStyle = {
  display: `flex`,
  flexFlow: `row wrap`,
  alignItems: `center`,
  justifyContent: `center`,
  width: `100%`,
  height: `auto`,
  listStyle: "none",
  padding: 0,
  fontSize: `1rem`,
  transform: "translateY(-60px)",
};

const EpisodeList = ({ children }) => {
  return (
    <>
      <ul style={listStyle}>{children}</ul>
    </>
  );
};

export default EpisodeList;
