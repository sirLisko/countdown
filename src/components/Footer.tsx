import React from "react";
import styled from "@emotion/styled/macro";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  width: auto;
  span {
    display: block;
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
    position: relative;
    text-align: center;
    left: 0;
    margin-top: 2rem;
    text-align: center;
  }
`;

const Footer = () => (
  <StyledFooter>
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
