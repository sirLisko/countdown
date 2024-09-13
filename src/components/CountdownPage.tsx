import React, { useState, useEffect } from "react";
import Countdown from "./Counter/Countdown";
import { getQueryString } from "../utils/queryString";
import { isValidDate, normaliseDateOrder } from "../utils/date";
import Footer from "./Footer";
import { DialogCloseButton } from "./Dialog";

const NEXT_YEAR = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0);

const CountdownPage: React.FC = () => {
  const [now, setNow] = useState(new Date());
  const [then, setThen] = useState(NEXT_YEAR);
  const [message, setMessage] = useState("to the next year");
  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const interval = setInterval(() => setNow(new Date()), 1000);
    const qs = searchParams && getQueryString(searchParams.toString());

    if (qs && qs.then) {
      const { message: qsMessage, then: qsThen, filters: qsFilters } = qs;

      document.title =
        new Date().getTime() < qsThen.getTime()
          ? `${qsMessage ? qsMessage + " - " : ""}How much time left? - Countdown`
          : `${qsMessage ? qsMessage + " - " : ""}How long ago? - Countdown`;

      setThen(qsThen);
      setMessage(qsMessage || "\u00A0");
      if (qsFilters) setFilters(qsFilters);
    }

    return () => clearInterval(interval);
  }, []);

  const { from, to, isInverted } = normaliseDateOrder(now, then);

  if (!isValidDate(then)) {
    return (
      <div style={{ textAlign: "center" }}>
        Oops! Something went wrong with your date
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="text-center my-[10vh] mx-auto text-[2.5rem] md:text-[5vw] text-gray-800">
        {message}
      </h1>
      <Countdown
        from={from}
        to={to}
        filters={filters}
        isInverted={isInverted}
      />
      <div className="text-center">
        <DialogCloseButton />
      </div>
      <Footer />
    </div>
  );
};

export default CountdownPage;
