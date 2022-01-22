import { Fragment, useState } from "react";
import UncontrolledOnboardingFlow from "./components/onboarding/UncontrolledOnboardingFlow";
import ControlledOnboardingFlow from "./components/onboarding/ControlledOnboardingFlow";
import StepOne from "./components/steps/StepOne";
import StepThree from "./components/steps/StepThree";
import StepTwo from "./components/steps/StepTwo";
import "./styles.scss";
import Special from "./components/steps/Special";

export default function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStepOneVisited, setIsStepOneVisited] = useState(true);
  const [isStepTwoVisited, setIsStepTwoVisited] = useState(false);
  const [isStepThreeVisited, setIsStepThreeVisited] = useState(false);

  console.log(currentIndex);

  const onNext = (stepData) => {
    setOnboardingData({
      ...stepData,
      ...onboardingData
    });

    if (currentIndex === 2) {
      onFinish(onboardingData);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const goToPrev = () => {
    if (currentIndex <= 0) {
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  const onFinish = (userInfo) => {
    console.log("Onboarding Complete!", userInfo);
  };
  return (
    <Fragment>
      <div className="container mb-5">
        <div className="row">
          <UncontrolledOnboardingFlow onFinish={onFinish}>
            <StepOne />
            <StepTwo />
            <StepThree />
          </UncontrolledOnboardingFlow>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <ControlledOnboardingFlow
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            isStepOneVisited={isStepOneVisited}
            setIsStepOneVisited={setIsStepOneVisited}
            isStepTwoVisited={isStepTwoVisited}
            setIsStepTwoVisited={setIsStepTwoVisited}
            isStepThreeVisited={isStepThreeVisited}
            setIsStepThreeVisited={setIsStepThreeVisited}
            setOnboardingData={setOnboardingData}
            onNext={onNext}
          >
            <StepOne />
            {onboardingData.age >= 60 && <Special goToPrev={goToPrev} />}
            <StepTwo />
            <StepThree goToPrev={goToPrev} />
          </ControlledOnboardingFlow>
        </div>
      </div>
    </Fragment>
  );
}
