import React from "react";
import styled from "@emotion/styled/macro";

interface Props {
  children: React.ReactElement;
  label: string;
}

const StyledCheckbox = styled.label`
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.5em;
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const StyledControl = styled.span`
  display: inline-grid;
  width: 1em;
  height: 1em;
  border-radius: 0.25em;
  border: 0.1em solid currentColor;
  svg {
    transition: transform 0.1s ease-in 25ms;
    transform: scale(0);
    transform-origin: bottom left;
  }
`;

const StyledInput = styled.span`
  display: grid;
  grid-template-areas: "checkbox";
  > * {
    grid-area: checkbox;
  }
  input {
    opacity: 0;
    width: 1em;
    height: 1em;
    &:focus + ${StyledControl} {
      box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
    }
    &:checked + ${StyledControl} svg {
      transform: scale(1);
    }
  }
`;

const Checkbox = ({ children, label }: Props) => (
  <StyledCheckbox>
    <StyledInput>
      {children}
      <StyledControl>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            d="M1.73 12.91l6.37 6.37L22.79 4.59"
          />
        </svg>
      </StyledControl>
    </StyledInput>
    <span className="radio__label">{label}</span>
  </StyledCheckbox>
);

export default Checkbox;
