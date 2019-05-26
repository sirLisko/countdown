import React from "react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  subDays,
  subMinutes,
  subHours
} from "date-fns";

import FlipNumbers from "./FlipNumbers";

const Countdown: React.FC<{ from: Date; to: Date; filters: string[] }> = ({
  from,
  to,
  filters
}) => {
  const days = differenceInDays(to, from);
  const subbedDays = subDays(to, days);

  const hours = differenceInHours(subbedDays, from);
  const subbedHours = subHours(subbedDays, hours);

  const minutes = differenceInMinutes(subbedHours, from);
  const subbedMinutes = subMinutes(subbedHours, minutes);

  const seconds = differenceInSeconds(subbedMinutes, from);

  return (
    <div>
      <div className="count" style={{ display: "flex" }}>
        <FlipNumbers number={days} /> :
        <FlipNumbers number={hours} /> :
        <FlipNumbers number={minutes} /> :
        <FlipNumbers number={seconds} />
      </div>
      {filters && (
        <div style={{ textAlign: "center" }}>
          {filters.includes("h") && <p>hours: {differenceInHours(to, from)}</p>}
          {filters.includes("m") && (
            <p>minutes: {differenceInMinutes(to, from)}</p>
          )}
          {filters.includes("s") && (
            <p>seconds: {differenceInSeconds(to, from)}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Countdown;
