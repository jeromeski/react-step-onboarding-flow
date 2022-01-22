import React from "react";

const ControlledOnboardingFlow = ({
  children,
  onFinish,
  onboardingData,
  currentIndex,
  isStepOneVisited,
  setIsStepOneVisited,
  isStepTwoVisited,
  setIsStepTwoVisited,
  isStepThreeVisited,
  setIsStepThreeVisited,
  setCurrentIndex,
  setOnboardingData,
  onNext
}) => {
  const goToNext = (stepData) => {
    onNext(stepData);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, {
      goToNext,
      currentIndex,
      isStepOneVisited,
      setIsStepOneVisited,
      isStepTwoVisited,
      setIsStepTwoVisited,
      isStepThreeVisited,
      setIsStepThreeVisited
    });
  }
  return currentChild;
};

export default ControlledOnboardingFlow;
