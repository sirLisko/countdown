import { ReactElement } from "react";

interface Props {
  children: ReactElement;
  label: string;
}

const Checkbox = ({ children, label }: Props) => (
  <label>
    <span>
      {children}
      <span>
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
      </span>
    </span>
    <span className="radio__label">{label}</span>
  </label>
);

export default Checkbox;
