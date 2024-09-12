import { useEffect, useState } from "react";
import {
  HiLink as LinkIcon,
  HiDocumentDuplicate as CopyIcon,
} from "react-icons/hi";

import { createQueryString } from "../utils/queryString";
import { Countdown } from "../types";

const CountdownLink = ({ countdown }: { countdown: Countdown }) => {
  const [isCopied, setIsCopied] = useState(false);
  const qs = createQueryString(countdown);
  const link = `${window.location.origin}/?${qs}`;
  useEffect(() => {
    setIsCopied(false);
  }, [countdown]);
  return (
    <div>
      <a href={link}>
        {link} <LinkIcon />
      </a>
      <a
        onClick={() => {
          navigator.clipboard.writeText(link);
          setIsCopied(true);
        }}
      >
        {isCopied ? "Copied" : "Copy"} <CopyIcon />
      </a>
    </div>
  );
};

export default CountdownLink;
