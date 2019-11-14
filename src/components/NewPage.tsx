import React from "react";
import styled from "@emotion/styled";

import Form from "components/Form";

const StyledHeader = styled.h1`
  text-align: center;
`;

class NewPage extends React.Component {
  render() {
    return (
      <div>
        <StyledHeader>Create your countdown</StyledHeader>
        <Form />
      </div>
    );
  }
}

export default NewPage;
