import { isValid } from "date-fns";

export const isValidDate = (date: Date) => date && isValid(date);
