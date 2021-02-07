export type Filter = {
  [key: string]: boolean;
  hours: boolean;
  minutes: boolean;
  seconds: boolean;
};

export interface Countdown {
  message?: string;
  date: string;
  time?: string;
  filters?: Filter;
}

export interface CountdownFromString {
  from: Date;
  to: Date;
  filters: string[];
  isInverted?: boolean;
}
