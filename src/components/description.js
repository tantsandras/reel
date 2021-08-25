import * as React from "react";
import styled from "styled-components";

const Description = styled.p`
  padding-left: 1rem;
  padding-right: 1rem;
  height: auto;
  padding-bottom: 2rem;
  text-align: left;
  font-size: 0.8rem;
  color: black;
  font-family: Inter;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 0px;
`;

const Content = styled.div`
  display: ${(props) => (props.isCollapsed ? "block" : "none")};
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 1rem;
  line-height: 42px;
  font-family: Knewave;
  text-transform: uppercase;
  cursor: pointer;
  color: #ffff66;
  background: black;
  padding: 0;
  border: none;
  :hover,
  :active {
    color: black;
    background: transparent;
    box-shadow: none;
  }

  :before,
  :after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: black;
    box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003,
      4px 4px 5px 0px #0002;
    transition: 400ms ease all;
  }
  :after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  :hover:before,
  :hover:after,
  :active:before,
  :active:after {
    width: 100%;
    transition: 800ms ease all;
  }
`;

const Collapse = ({ collapsed, children }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  return (
    <>
      <Button onClick={() => setIsCollapsed(!isCollapsed)} tabIndex="0">
        {isCollapsed ? "Hide" : "Read"} description
      </Button>
      <Content isCollapsed={isCollapsed} aria-expanded={isCollapsed}>
        <Description>{children}</Description>
      </Content>
    </>
  );
};

export default Collapse;
