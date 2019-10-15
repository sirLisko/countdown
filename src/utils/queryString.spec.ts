import { getQueryString } from "./queryString";

describe("queryString util", () => {
  it("should return the date parsed", () => {
    const searchString = "t=2020-01-11T00:00:00&m=to%20the%20next%20year&f=h";
    const parsedString = getQueryString(searchString);
    expect(parsedString).toEqual({
      filters: ["h"],
      message: "to the next year",
      then: new Date("2020-01-10T23:00:00.000Z")
    });
  });
});
