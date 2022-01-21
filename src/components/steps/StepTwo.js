import React, { useEffect, useRef } from "react";

const data = {
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  }
};

const StepTwo = ({
  goToNext,
  goToPrev,
  currentIndex,
  isStepThreeVisited,
  setIsStepTwoVisited,
  setIsStepThreeVisited
}) => {
  const progressRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    const circles = circlesRef;
    const isActive = currentIndex === 1;
    if (isActive) {
      setIsStepTwoVisited(true);
      progressRef.current.style.width = "50%";
      circles.current[0].style.borderColor = "#3498db";
      circles.current[1].style.borderColor = "#3498db";
    }
  }, [currentIndex, setIsStepTwoVisited]);

  useEffect(() => {
    if (isStepThreeVisited) {
      setIsStepThreeVisited(false);
    }
  }, [isStepThreeVisited, setIsStepThreeVisited]);

  return (
    <div className="container">
      <div id="stepTwo" className="progress-container">
        <div
          ref={progressRef}
          className={`progress ${isStepThreeVisited ? "full" : ""}`}
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
      <button className="btn btn-default" onClick={() => goToPrev()}>
        Prev
      </button>
      <button className="btn btn-default" onClick={() => goToNext(data)}>
        Next
      </button>
    </div>
  );
};

export default StepTwo;
