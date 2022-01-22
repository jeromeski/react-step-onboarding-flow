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

const Special = ({ goToNext, goToPrev, currentIndex }) => {
  const progressRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    const circles = circlesRef.current;

    progressRef.current.style.width = "100%";
    circles.forEach((circle) => {
      circle.style.borderColor = "#3498db";
    });
  }, []);

  return (
    <div id="stepThree" className="container text-center">
      <div className="progress-container">
        <div ref={progressRef} className={`progress full`}></div>
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
        Submit
      </button>
    </div>
  );
};

export default Special;
