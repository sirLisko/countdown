import React, { useState } from "react";
import useForm from "react-hook-form";
import * as yup from "yup";

import CountdownLink from "components/CountdownLink";

const validationSchema = yup.object().shape({
  message: yup.string(),
  date: yup.date().required()
});

const Basic: React.SFC<{}> = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema
  });
  const onSubmit = (data: any) => {
    setCountdown(data);
  };
  const [countdown, setCountdown] = useState();
  return (
    <form className="cippa" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Message
        <input type="text" name="message" ref={register} />
      </label>
      <label>
        Date
        <input
          type="text"
          name="date"
          placeholder="mm-dd-yyyy"
          ref={register}
        />
      </label>
      {errors.date && <p>{errors.date.message}</p>}
      <label>
        hours
        <input type="checkbox" name="filters.hours" ref={register} />
      </label>
      <label>
        minutes
        <input type="checkbox" name="filters.minutes" ref={register} />
      </label>
      <label>
        seconds
        <input type="checkbox" name="filters.seconds" ref={register} />
      </label>
      <input type="submit" />
      {countdown && <CountdownLink countdown={countdown} />}
    </form>
  );
};

export default Basic;
