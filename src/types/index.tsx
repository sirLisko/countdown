export type Filter = {
  [key: string]: boolean;
  hours: boolean;
  minutes: boolean;
  seconds: boolean;
};

export interface Countdown {
  message?: string;
  date: string;
  filters?: Filter;
}
