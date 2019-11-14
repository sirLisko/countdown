import React from "react";

import { createQueryString } from "utils/queryString";
import { Countdown } from "types";

const CountdownLink: React.SFC<{ countdown: Countdown }> = ({ countdown }) => {
  const qs = createQueryString(countdown);
  const link = `${window.location.origin}/?${qs}`;
  return <a href={link}>{link}</a>;
};

export default CountdownLink;
