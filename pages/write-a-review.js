import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/write-a-review.module.scss";
import axios from "axios";
import Step0 from "../components/ReviewSteps/Step0/Step0";
import Step1 from "../components/ReviewSteps/Step1/Step1";
import Step2 from "../components/ReviewSteps/Step2/Step2";
import ReviewComponent from "../components/ReviewComponent/ReviewComponent";

export default function Review() {
  const [currentStep, setCurrentStep] = useState(3);
  const [headerValue, setHeaderValue] = useState("Write a Review");
  const [reviewId, setReviewId] = useState("");
  const { register, handleSubmit, watch, errors } = useForm();
  const [reviewValues, setReviewValues] = useState({
    instituteName: "JIIT",
    course: "BTech",
    graduationDate: "2021-12-12",
    examTaken: "yes",
    examName: "CAT",
    examScore: "",
    examRank: "",
    howYouGotAdmission: "",
  });

  const handleOnChange = (e, fieldName) => {
    const tempValues = reviewValues;
    tempValues[fieldName] = e.target.value;
    setReviewValues({ ...tempValues });
  };

  const saveToFirestore = async () => {
    const res = await axios.post("/api/review", {
      reviewId,
      currentStep,
      payload: { ...reviewValues },
    });
    setReviewId(res.data.reviewId);
    console.log(res.data);
  };

  const handleSaveBtn = () => {
    saveToFirestore();
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const handleBackBtn = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  console.log(currentStep, reviewId, reviewValues);

  return (
    <div className={styles.formWrapper}>
      <header className={styles.reviewHeader}>{headerValue}</header>
      {currentStep === 0 && (
        <Step0
          handleBackBtn={handleBackBtn}
          handleSaveBtn={handleSaveBtn}
          handleOnChange={handleOnChange}
          reviewValues={reviewValues}
        />
      )}
      {currentStep === 1 && (
        <Step1
          handleBackBtn={handleBackBtn}
          handleSaveBtn={handleSaveBtn}
          handleOnChange={handleOnChange}
          reviewValues={reviewValues}
        />
      )}
      {currentStep === 2 && (
        <Step2
          handleBackBtn={handleBackBtn}
          handleSaveBtn={handleSaveBtn}
          handleOnChange={handleOnChange}
          reviewValues={reviewValues}
        />
      )}
      {currentStep === 3 && (
        <ReviewComponent
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          ques="Why did you choose to attend this college?"
        />
      )}
      {currentStep === 4 && (
        <ReviewComponent
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          ques="How is the course and faculty members?"
        />
      )}
      {currentStep === 5 && (
        <ReviewComponent
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          ques="Why did you choose to attend this college?"
        />
      )}
      {currentStep === 6 && (
        <ReviewComponent
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          ques="How is your college infrastructure?"
        />
      )}

      {currentStep === 7 && (
        <ReviewComponent
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          ques="What is the quality of mess and hostel?"
        />
      )}

      {currentStep === 8 && (
        <ReviewComponent
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          ques="What is the Quality of placement in your college and how is the internship provided?"
        />
      )}
      {currentStep === 9 && (
        <ReviewComponent
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          ques="How are the extra curricular activities in your college?"
        />
      )}
    </div>
  );
}
