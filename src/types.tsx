import { z } from "zod";

export const Countdown = z.object({
  message: z.string().optional(),
  date: z.string().optional(),
  time: z.string().optional(),
  filters: z.array(z.string()),
});

export type Countdown = z.infer<typeof Countdown>;

export interface CountdownFromString {
  from: Date;
  to: Date;
  filters: string[];
  isInverted?: boolean;
}
