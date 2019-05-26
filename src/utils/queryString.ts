import queryString from "query-string";
import { parse } from "date-fns";

export const getQueryString = (search: string) => {
  const { t, m, f } = queryString.parse(search);
  return {
    then: typeof t === "string" && parse(t),
    message: m,
    filters: typeof f === "string" && f.split(",")
  };
};
