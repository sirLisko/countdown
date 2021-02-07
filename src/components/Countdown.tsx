import React from "react";

import { getTimeDifferences } from "utils/date";

import FlipNumbers from "components/FlipNumbers";
import CountdownFilters from "components/CountdownFilters";

import { CountdownFromString } from "types";

const Countdown = ({ from, to, filters, isInverted }: CountdownFromString) => {
  const { years, days, hours, minutes, seconds } = getTimeDifferences(to, from);
  return (
    <div>
      <div className="count" style={{ display: "flex" }}>
        {years > 0 && (
          <>
            <FlipNumbers number={years} isInverted={isInverted} /> y
          </>
        )}
        {days > 0 && (
          <>
            <FlipNumbers number={days} isInverted={isInverted} /> d
          </>
        )}
        <FlipNumbers number={hours} isInverted={isInverted} /> :
        <FlipNumbers number={minutes} isInverted={isInverted} /> :
        <FlipNumbers number={seconds} isInverted={isInverted} />
      </div>
      {filters && <CountdownFilters from={from} to={to} filters={filters} />}
    </div>
  );
};

export default Countdown;
