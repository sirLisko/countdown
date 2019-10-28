import {
  isValid,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  subDays,
  subMinutes,
  subHours
} from "date-fns";

export const isValidDate = (date: Date): Boolean => date && isValid(date);

export const normaliseDateOrder = (now: Date, then: Date) =>
  now.getTime() < then.getTime()
    ? {
        from: now,
        to: then,
        isInverted: false
      }
    : {
        from: then,
        to: now,
        isInverted: true
      };

export const getTimeDifferences = (to: Date, from: Date) => {
  const days = differenceInDays(to, from);
  const subbedDays = subDays(to, days);

  const hours = differenceInHours(subbedDays, from);
  const subbedHours = subHours(subbedDays, hours);

  const minutes = differenceInMinutes(subbedHours, from);
  const subbedMinutes = subMinutes(subbedHours, minutes);

  const seconds = differenceInSeconds(subbedMinutes, from);

  return {
    days,
    hours,
    minutes,
    seconds
  };
};
