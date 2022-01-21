import React, { useEffect, useRef } from "react";

const data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz"
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
  }, []);

  useEffect(() => {
    if (isStepTwoVisited) {
      progressRef.current.style.width = 0;
      setIsStepTwoVisited(false);
    }
  }, []);
  return (
    <div className="container">
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
      <button>Prev</button>
      <button onClick={() => goToNext(data)}>Next</button>
    </div>
  );
};

export default StepOne;
