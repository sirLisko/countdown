import React from "react";
import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds
} from "date-fns";

const Countdown: React.FC<{ from: Date; to: Date; filters: string[] }> = ({
  from,
  to,
  filters
}) => (
  <div style={{ textAlign: "center" }}>
    {filters.includes("h") && <p>hours: {differenceInHours(to, from)}</p>}
    {filters.includes("m") && <p>minutes: {differenceInMinutes(to, from)}</p>}
    {filters.includes("s") && <p>seconds: {differenceInSeconds(to, from)}</p>}
  </div>
);

export default Countdown;
