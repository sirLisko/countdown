import React, { useState } from "react";
import styled from "@emotion/styled";
import useForm from "react-hook-form";

import CountdownLink from "components/CountdownLink";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 9rem;
  margin: 0.25rem auto;
`;

const StyledFilter = styled.div`
  margin: 0.25rem auto 1rem;
  width: 9rem;
  display: flex;
  flex-direction: column;
  input {
    margin: 0.25rem 0.5rem;
  }
`;

const Basic: React.SFC = () => {
  const { register, handleSubmit, errors } = useForm();
  const [countdown, setCountdown] = useState();
  const onSubmit = (formData: any) =>
    setCountdown({ ...formData, date: `${formData.date}T${formData.time}` });
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel>
        Message
        <input type="text" name="message" ref={register} />
      </StyledLabel>
      <StyledLabel>
        Date
        <input type="date" name="date" required ref={register} />
      </StyledLabel>
      <StyledLabel>
        Time
        <input type="time" name="time" defaultValue="00:00" ref={register} />
      </StyledLabel>
      {errors.date && <p>{errors.date.message} You need to set a valid date</p>}
      <StyledFilter>
        <span>Add extra countdown for:</span>
        <label>
          <input type="checkbox" name="filters.hours" ref={register} />
          hours
        </label>
        <label>
          <input type="checkbox" name="filters.minutes" ref={register} />
          minutes
        </label>
        <label>
          <input type="checkbox" name="filters.seconds" ref={register} />
          seconds
        </label>
      </StyledFilter>
      <button type="submit">Create!</button>
      {countdown && <CountdownLink countdown={countdown} />}
    </StyledForm>
  );
};

export default Basic;
