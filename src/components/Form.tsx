import { useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import CountdownLink from "./CountdownLink";
import Checkbox from "./Checkbox";
import { Countdown } from "../types";

const Basic = () => {
  const { register, handleSubmit, errors } = useForm({ mode: "onChange" });
  const [countdown, setCountdown] = useState<Countdown>();
  const linkRef = useRef<HTMLInputElement>(null);
  const onSubmit: SubmitHandler<Countdown> = (formData) => {
    setCountdown({ ...formData, date: `${formData.date}T${formData.time}` });
    linkRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form
      onChange={() => setCountdown(undefined)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>
        Message
        <input type="text" name="message" ref={register} />
      </label>
      <label>
        Date
        <input type="date" name="date" required ref={register} />
      </label>
      <label>
        Time
        <input type="time" name="time" defaultValue="00:00" ref={register} />
      </label>
      {errors.date && <p>{errors.date.message} You need to set a valid date</p>}
      <div>
        <span>Add extra countdown for</span>
        <div>
          <Checkbox label="hours">
            <input type="checkbox" name="filters.hours" ref={register} />
          </Checkbox>
          <Checkbox label="minutes">
            <input type="checkbox" name="filters.minutes" ref={register} />
          </Checkbox>
          <Checkbox label="seconds">
            <input type="checkbox" name="filters.seconds" ref={register} />
          </Checkbox>
        </div>
      </div>
      <button type="submit">Create!</button>
      {countdown && (
        <div ref={linkRef}>
          <CountdownLink countdown={countdown} />
        </div>
      )}
    </form>
  );
};

export default Basic;
