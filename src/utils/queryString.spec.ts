import {
  getQueryString,
  createQueryString,
  normalizeFilters,
} from "./queryString";

describe("queryString util", () => {
  it("should return the date parsed", () => {
    const searchString = "t=2020-01-11T00:00:00&m=to%20the%20next%20year&f=h";
    const parsedString = getQueryString(searchString);
    expect(parsedString).toEqual({
      filters: ["h"],
      message: "to the next year",
      then: new Date("2020-01-10T23:00:00.000Z"),
    });
  });
});

describe("createQueryString util", () => {
  it("should return the the correct query string", () => {
    const countdown = {
      date: "2000-12-20T23:00",
      message: "asd",
      filters: { hours: false, minutes: true, seconds: true },
    };
    const createdString = createQueryString(countdown);
    expect(createdString).toEqual("f=m,s&m=asd&t=2000-12-20T23%3A00");
  });
  it("should not return filters if none selected", () => {
    const countdown = {
      date: "2000-12-20T23:00:00.000Z",
      message: "asd",
      filters: { hours: false, minutes: false, seconds: false },
    };
    const createdString = createQueryString(countdown);
    expect(createdString).toEqual("m=asd&t=2000-12-20T23%3A00%3A00.000Z");
  });
});

describe("normalizeFilters util", () => {
  it("should return the filter as array", () => {
    const filters = {
      hours: true,
      minutes: false,
      seconds: true,
    };
    expect(normalizeFilters(filters)).toEqual(["h", "s"]);
  });
  it("should return the filter as an empty array if all are false", () => {
    const filters = {
      hours: false,
      minutes: false,
      seconds: false,
    };
    expect(normalizeFilters(filters)).toEqual([]);
  });
});
