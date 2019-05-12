import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const SlideTransition: React.FC<{ id: string; style?: object }> = ({
  id,
  children,
  style
}) => (
  <TransitionGroup>
    <CSSTransition key={id} classNames="slide" timeout={400}>
      <div className="chief" style={style}>
        {children}
      </div>
    </CSSTransition>
  </TransitionGroup>
);

const FlipNumbers: React.FC<{ number: number }> = ({ number }) => {
  const numbers = number > 9 ? number.toString() : "0" + number.toString();
  return (
    <div
      className="numbers"
      style={{
        width: `${numbers.length}em`,
        margin: "0 auto",
        position: "relative"
      }}
    >
      {numbers
        .split("")
        .reverse()
        .map((numb, index) => (
          <SlideTransition
            key={index}
            id={numb}
            style={{ marginRight: `${index}em`, right: 0 }}
          >
            {numb}
          </SlideTransition>
        ))}
    </div>
  );
};

export default FlipNumbers;
