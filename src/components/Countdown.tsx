import queryString from "query-string";
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

const Countdown: React.FC<{ from: Date; to: Date }> = ({ from, to }) => {
  const days = differenceInDays(to, from);
  const subbedDays = subDays(to, days);

  const hours = differenceInHours(subbedDays, from);
  const subbedHours = subHours(subbedDays, hours);

  const minutes = differenceInMinutes(subbedHours, from);
  const subbedMinutes = subMinutes(subbedHours, minutes);

  const seconds = differenceInSeconds(subbedMinutes, from);

  return (
    <div>
      <p className="text">to the next year</p>
      <div className="count" style={{ display: "flex" }}>
        <FlipNumbers number={days} /> :
        <FlipNumbers number={hours} /> :
        <FlipNumbers number={minutes} /> :
        <FlipNumbers number={seconds} />
      </div>
    </div>
  );
};

export default Countdown;
