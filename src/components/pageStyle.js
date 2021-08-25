import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  width: 100%;
  font: inherit;
  vertical-align: baseline;
  line-height: 1;
  padding-bottom: 200px;
`;

const Wrapper = ({ children }) => <Container>{children}</Container>;

export default Wrapper;
