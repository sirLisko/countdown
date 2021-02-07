import React from "react";

import { createQueryString } from "utils/queryString";
import { Countdown } from "types";

const CountdownLink = ({ countdown }: { countdown: Countdown }) => {
  const qs = createQueryString(countdown);
  const link = `${window.location.origin}/?${qs}`;
  return <a href={link}>{link}</a>;
};

export default CountdownLink;
