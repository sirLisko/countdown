import queryString from "query-string";
import { parseISO } from "date-fns";
import { Countdown, Filter } from "types";

export const getQueryString = (search: string) => {
  const { t, m, f } = queryString.parse(search);
  return {
    then: typeof t === "string" && parseISO(t),
    message: typeof m === "string" && m,
    filters: typeof f === "string" && f.split(",")
  };
};

export const normalizeFilters = (filters: Filter) =>
  Object.keys(filters).reduce(
    (acc: string[], key: string) => (filters[key] ? [...acc, key[0]] : acc),
    []
  );

export const createQueryString = ({ message: m, date, filters }: Countdown) =>
  queryString.stringify(
    {
      m,
      t: date.toISOString(),
      f: filters && normalizeFilters(filters)
    },
    { arrayFormat: "comma" }
  );
