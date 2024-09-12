import queryString from "query-string";
import { parseISO } from "date-fns";
import { Countdown } from "@/types";

export const getQueryString = (search: string) => {
  const { t, m, f } = queryString.parse(search);
  return {
    then: typeof t === "string" && parseISO(t),
    message: typeof m === "string" && m,
    filters: typeof f === "string" && f.split(","),
  };
};

export const createQueryString = ({ message: m, date, filters }: Countdown) =>
  queryString.stringify(
    {
      m,
      t: date,
      f: filters.length ? filters.join(",") : undefined,
    },
    { arrayFormat: "comma" },
  );
