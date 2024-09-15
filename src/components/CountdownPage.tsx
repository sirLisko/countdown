import React, { useState, useEffect } from "react";
import Countdown from "./Counter/Countdown";
import { getQueryString } from "../utils/queryString";
import { isValidDate, normaliseDateOrder } from "../utils/date";
import Footer from "./Footer";
import DialogNew from "./DialogNew";

import dates from "../dates";

const CountdownPage: React.FC = () => {
  const [now, setNow] = useState(new Date());
  const [then, setThen] = useState<Date>();
  const [message, setMessage] = useState<string>();
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);

    const path = window.location.pathname.split("/").pop();
    const searchParams = new URLSearchParams(window.location.search);

    const qs = path
      ? getQueryString(atob(path))
      : searchParams && getQueryString(searchParams.toString());

    if (qs && qs.then) {
      const { message: qsMessage, then: qsThen, filters: qsFilters } = qs;

      document.title =
        new Date().getTime() < qsThen.getTime()
          ? `${qsMessage ? qsMessage + " - " : ""}How much time left? - Countdown`
          : `${qsMessage ? qsMessage + " - " : ""}How long ago? - Countdown`;

      setThen(qsThen);
      setMessage(qsMessage || "\u00A0");
      if (qsFilters) setFilters(qsFilters);
    } else {
      const { date, text, filters } =
        dates[Math.floor(Math.random() * dates.length)];
      setThen(date);
      setMessage(text);
      if (filters) setFilters(filters);
    }

    return () => clearInterval(interval);
  }, []);

  if (!then) {
    return null;
  }

  const { from, to, isInverted } = normaliseDateOrder(now, then);

  if (!isValidDate(then)) {
    return (
      <div className="flex h-screen">
        <div className="m-auto text-center text-2xl p-3">
          Oops! Something went wrong with your date
          <div className="text-center mt-20">
            <DialogNew />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-center my-[10vh] mx-auto text-[2.5rem] md:text-[5vw]">
        {message}
      </h1>
      <Countdown
        from={from}
        to={to}
        filters={filters}
        isInverted={isInverted}
      />
      <div className="text-center">
        <DialogNew />
      </div>
    </>
  );
};

export default CountdownPage;
