import React from "react";
import styled from "@emotion/styled/macro";

import Form from "components/Form";
import Footer from "components/Footer";

const StyledHeader = styled.h1`
  text-align: center;
`;

const NewPage = () => (
  <>
    <StyledHeader>Create your countdown</StyledHeader>
    <Form />
    <Footer />
  </>
);

export default NewPage;
