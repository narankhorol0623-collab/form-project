import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { initialValues } from "@/constant/initial";
import {
  validateStepOne,
  validateStepTwo,
  validateStepThree,
} from "@/utils/validators";
import { saveFormValues, retrieveFormValues } from "@/utils/localStorage";
import { PrivateInfo } from "@/components/steps/Index";
import { ContactInfo } from "@/components/steps/ContactInfo";
import { ProfileImage } from "@/components/steps/Index";
import { Success } from "@/components/steps/Index";

const Home = () => {
  const [step, setStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const max = 4;
  const handleClick = () => {
    if (step < max) {
      setStep(step + 1);
    }
  };

  const validators = [validateStepOne, validateStepTwo, validateStepThree];

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNextOrSubmit = () => {
    setIsSubmitted(true);

    const { errors, isValid } = validators[step](formValues);
    setFormErrors(errors);

    if (!isValid) return;

    saveFormValues(formValues, step + 1);

    if (step === max - 1) {
      console.log("SUBMIT DATA:", formValues);
    } else {
      handleClick();
    }
  };

  useEffect(() => {
    const valueFromLocalStorage = retrieveFormValues();

    if (valueFromLocalStorage) {
      setFormValues(valueFromLocalStorage);
      setStep(valueFromLocalStorage?.step);
    }
  }, []);

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormValues((previous) => ({ ...previous, [name]: value }));
    setFormErrors((previous) => ({ ...previous, [name]: "" }));
  };
  const Container = [PrivateInfo, ContactInfo, ProfileImage, Success][step];

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-200">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-[480px] h-auto p-8 bg-[#FFFFFF] rounded-lg flex flex-col justify-between ">
            <Container
              handleChange={handleChange}
              formValues={formValues}
              formErrors={formErrors}
              setFormErrors={setFormErrors}
              handleClick={handleClick}
            />
            <div className={`flex gap-2 ${step === 0 ? "mt-31" : "mt-10"}`}>
              {step > 0 && step < 3 && (
                <button
                  className="justify-center items-center rounded-md flex border w-[128px] border-[#CBD5E1]"
                  onClick={handlePrevious}
                >
                  Back
                </button>
              )}
              {step < 3 && (
                <button
                  className="bg-black h-[44px] w-[416px] flex flex-row items-center justify-center gap-3  font-medium rounded-md text-white"
                  onClick={handleNextOrSubmit}
                >
                  {/* Continue{" "} */}
                  {step === max - 1
                    ? "Submit"
                    : `Continue ${step + 1} / ${max}`}
                  <img src="Vector (1).png" alt="" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
