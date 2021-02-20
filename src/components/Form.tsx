import React, { useState, useRef } from "react";
import styled from "@emotion/styled/macro";
import { useForm, SubmitHandler } from "react-hook-form";

import CountdownLink from "components/CountdownLink";
import Checkbox from "components/Checkbox";
import { Countdown } from "types";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  label {
    cursor: pointer;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 21rem;
  margin: 0.5rem auto;
  font-size: 1.5rem;
  input {
    font-size: 2.5rem;
    height: 2.5rem;
  }
  input[type="text"] {
    font-size: 1.5rem;
  }
`;

const StyledFilter = styled.div`
  margin: 0.25rem auto 1rem;
  width: 21rem;
  font-size: 1.5rem;
  div {
    display: flex;
    flex-direction: column;
    width: 10rem;
    margin: 0 auto;
  }
  input {
    margin: 0.25rem 0.5rem;
  }
`;

const StyledCreateButton = styled.button`
  background: tomato;
  border: 1px solid red;
  color: white;
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 10px;
`;

const Basic = () => {
  const { register, handleSubmit, errors } = useForm({ mode: "onChange" });
  const [countdown, setCountdown] = useState<Countdown>();
  const linkRef = useRef<HTMLInputElement>(null);
  const onSubmit: SubmitHandler<Countdown> = (formData) => {
    setCountdown({ ...formData, date: `${formData.date}T${formData.time}` });
    linkRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <StyledForm
      onChange={() => setCountdown(undefined)}
      onSubmit={handleSubmit(onSubmit)}
    >
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
      </StyledFilter>
      <StyledCreateButton type="submit">Create!</StyledCreateButton>
      {countdown && (
        <div ref={linkRef}>
          <CountdownLink countdown={countdown} />
        </div>
      )}
    </StyledForm>
  );
};

export default Basic;
