import React, { useEffect, useState } from "react";

const useClickProgress = () => {
  const [isActive, setIsActive] = useState(false);
  const nextRef = React.createRef();
  const prevRef = React.createRef();
  const ref = { nextRef, prevRef };

  useEffect(() => {
    let next = ref.nextRef.current;
    let prev = ref.prevRef.current;

    if (nextRef) {
    }

    const handleNext = (e) => {
      console.log(e.target.id);
      if (e.target.id === "nextOne") {
        const targetEl = document.querySelector("#nextTwo");
        const parentEl = targetEl.parentNode;
        parentEl.querySelector(".progress").classList.add("half");
      }
      if (e.target.id === "nextTwo") {
        const targetEl = document.querySelector("#nextThree");
        const parentEl = targetEl.parentNode;
        parentEl.querySelector(".progress").classList.add("whole");
      }
    };
    const handlePrev = (e) => {
      if (e.target.id === "prevOne") {
        return;
      }
      if (e.target.id === "prevTwo") {
        const targetEl = document.querySelector("#nextTwo");
        const parentEl = targetEl.parentNode;
      }
      if (e.target.id === "prevThree") {
        const targetEl = document.querySelector("#nextThree");
        const parentEl = targetEl.parentNode;
        parentEl.querySelector(".progress").classList.remove("whole");
        parentEl.querySelector(".progress").classList.add("half");
      }
    };

    document.addEventListener("click", (e) => handleNext(e, next));

    return () => {
      document.removeEventListener("click", handleNext);
      document.removeEventListener("click", handlePrev);
    };
  });

  return {
    ref
  };
};

export default useClickProgress;
