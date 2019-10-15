import { isValid } from "date-fns";

export const isValidDate = (date: Date): Boolean => date && isValid(date);
