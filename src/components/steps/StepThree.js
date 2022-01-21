import React, { useEffect, useRef } from "react";

const data = {
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
};

const StepThree = ({
  goToNext,
  goToPrev,
  currentIndex,
  isStepTwoVisited,
  setIsStepThreeVisited,
  isStepThreeVisited
}) => {
  const progressRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    const circles = circlesRef;
    const isActive = currentIndex === 2;
    if (isActive) {
      setIsStepThreeVisited(true);
      progressRef.current.style.width = "100%";
      circles.current[0].style.borderColor = "#3498db";
      circles.current[1].style.borderColor = "#3498db";
      circles.current[2].style.borderColor = "#3498db";
    }
  }, [currentIndex, setIsStepThreeVisited]);

  return (
    <div id="stepThree" className="container">
      <div className="progress-container">
        <div
          ref={progressRef}
          className={`progress ${
            isStepTwoVisited && isStepThreeVisited ? "full" : "half"
          }`}
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
        {isStepThreeVisited ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default StepThree;
