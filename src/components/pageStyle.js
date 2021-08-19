import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  margin-top: 0;
  padding-bottom: 200px;
`;

const Wrapper = ({ children }) => <Container>{children}</Container>;

export default Wrapper;
