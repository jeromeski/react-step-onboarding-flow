import React, { useEffect, useRef } from "react";

const data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  age: 40
};

const StepOne = ({
  goToNext,
  goToPrev,
  currentIndex,
  isStepOneVisited,
  isStepTwoVisited,
  setIsStepTwoVisited
}) => {
  const progressRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    const circles = circlesRef;
    const isActive = currentIndex === 0;
    if (isActive) {
      circles.current[0].style.borderColor = "#3498db";
    }
  }, [currentIndex]);

  useEffect(() => {
    if (isStepTwoVisited) {
      progressRef.current.style.width = 0;
      setIsStepTwoVisited(false);
    }
  }, [isStepOneVisited, isStepTwoVisited, setIsStepTwoVisited]);
  return (
    <div className="container text-center">
      <div className="progress-container">
        <div
          ref={progressRef}
          className={`progress ${isStepTwoVisited ? "half" : ""}`}
        ></div>
        <div ref={(el) => (circlesRef.current[0] = el)} className="circle">
          1
        </div>
        <div ref={(el) => (circlesRef.current[1] = el)} className="circle">
          2
        </div>
        <div ref={(el) => (circlesRef.current[2] = el)} className="circle">
          3
        </div>
      </div>
      <button disabled={1} className="btn btn-default">
        Prev
      </button>
      <button className="btn btn-default" onClick={() => goToNext(data)}>
        Next
      </button>
    </div>
  );
};

export default StepOne;
