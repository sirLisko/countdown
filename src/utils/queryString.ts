import queryString from "query-string";
import { parseISO } from "date-fns";

export const getQueryString = (search: string) => {
  const { t, m, f } = queryString.parse(search);
  return {
    then: typeof t === "string" && parseISO(t),
    message: typeof m === "string" && m,
    filters: typeof f === "string" && f.split(",")
  };
};
