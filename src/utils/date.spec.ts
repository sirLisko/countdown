import { isValidDate, normaliseDateOrder, getTimeDifferences } from "./date";

describe("date util", () => {
  describe("isValidDate", () => {
    it("should return true if it is", () => {
      const date = new Date();
      expect(isValidDate(date)).toEqual(true);
    });
  });

  describe("normaliseDateOrder", () => {
    it("should not return the date inverted if then is in the future", () => {
      const now = new Date();
      const then = new Date(now.getFullYear() + 1, 0, 1);
      expect(normaliseDateOrder(now, then)).toEqual({
        from: now,
        to: then,
        isInverted: false
      });
    });

    it("should return the date inverted if then is in the past", () => {
      const now = new Date();
      const then = new Date(now.getFullYear() - 1, 0, 1);
      expect(normaliseDateOrder(now, then)).toEqual({
        from: then,
        to: now,
        isInverted: true
      });
    });
  });

  describe("getTimeDifferences", () => {
    it("should not return the date inverted if then is in the future", () => {
      const now = new Date();
      const to = new Date(now.getFullYear(), 0, 1);
      const then = new Date(now.getFullYear() + 1, 0, 2, 1, 2, 3);
      expect(getTimeDifferences(then, to)).toEqual({
        years: 1,
        days: 1,
        hours: 1,
        minutes: 2,
        seconds: 3
      });
    });
  });
});
