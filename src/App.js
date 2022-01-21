import { Fragment } from "react";
import UncontrolledOnboardingFlow from "./components/onboarding/UncontrolledOnboardingFlow";
import StepOne from "./components/steps/StepOne";
import StepThree from "./components/steps/StepThree";
import StepTwo from "./components/steps/StepTwo";
import "./styles.scss";

export default function App() {
  const onFinish = (userInfo) => {
    console.log("Onboarding Complete!");
  };
  return (
    <Fragment>
      <UncontrolledOnboardingFlow onFinish={onFinish}>
        <StepOne />

        <StepTwo />

        <StepThree />
      </UncontrolledOnboardingFlow>
    </Fragment>
  );
}
