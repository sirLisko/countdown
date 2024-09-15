import { useState, useEffect, useRef } from "react";

const DynammicTitle = ({ message }: { message?: string }) => {
  const [margin, setMarginTop] = useState("10vh");
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMargin = () => {
      if (divRef.current) {
        const height = divRef.current.offsetHeight;
        const maxHeight = 500;
        const minMargin = 3;
        const maxMargin = 20;
        const newMargin = Math.max(
          minMargin,
          maxMargin - (height / maxHeight) * (maxMargin - minMargin),
        );
        setMarginTop(`${newMargin}vh auto`);
      }
    };
    updateMargin();
    window.addEventListener("resize", updateMargin);

    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  return (
    <h1
      ref={divRef}
      className="text-center my-[10vh] mx-auto text-[2.5rem] md:text-[5vw]"
      style={{ margin }}
    >
      {message}
    </h1>
  );
};

export default DynammicTitle;
