import React, { useEffect, useState } from "react";
import styled from "@emotion/styled/macro";
import {
  HiLink as LinkIcon,
  HiDocumentDuplicate as CopyIcon,
} from "react-icons/hi";

import { createQueryString } from "utils/queryString";
import { Countdown } from "types";

const StyledLinks = styled.div`
  font-size: 2rem;
  align-items: center;
  text-align: center;
  a {
    display: block;
    font-size: 1.5rem;
  }
`;
const StyledLink = styled.a`
  margin: 2rem auto 1rem;
`;
const StyledButton = styled.a`
  border: 0;
  background: none;
  cursor: pointer;
`;

const CountdownLink = ({ countdown }: { countdown: Countdown }) => {
  const [isCopied, setIsCopied] = useState(false);
  const qs = createQueryString(countdown);
  const link = `${window.location.origin}/?${qs}`;
  useEffect(() => {
    setIsCopied(false);
  }, [countdown]);
  return (
    <StyledLinks>
      <StyledLink href={link}>
        {link} <LinkIcon />
      </StyledLink>
      <StyledButton
        onClick={() => {
          navigator.clipboard.writeText(link);
          setIsCopied(true);
        }}
      >
        {isCopied ? "Copied" : "Copy"} <CopyIcon />
      </StyledButton>
    </StyledLinks>
  );
};

export default CountdownLink;
