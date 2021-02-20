import React from "react";
import styled from "@emotion/styled/macro";

interface Props {
  isFixed?: boolean;
}

const StyledFooter = styled.footer<Props>`
  position: fixed;
  bottom: 1rem;
  left: ${(props) => (props.isFixed ? "1rem" : "50%")};
  transform: ${(props) => (props.isFixed ? "none" : "translateX(-50%);%")};
  span {
    display: block;
    white-space: nowrap;
  }
  @media (min-width: 700px) {
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    span {
      display: inline;
    }
  }
  @media (max-height: 700px) {
    ${(props) =>
      !props.isFixed &&
      `
      position: relative;
      margin-top: 2rem;
      text-align: center;
      `}
  }
`;

const Footer = ({ isFixed }: Props) => (
  <StyledFooter isFixed={isFixed}>
    <span>
      Created with ♥ by <a href="https://sirlisko.com">@sirLisko</a>.
    </span>
    <span>
      View project source on{" "}
      <a href="https://github.com/sirLisko/countdown">Github</a>.
    </span>
  </StyledFooter>
);

export default Footer;
