import React, { useState, useEffect } from "react";
import styles from "../styles/write-a-review.module.scss";
import axios from "axios";
import Step0 from "../components/ReviewSteps/Step0/Step0";
import Step1 from "../components/ReviewSteps/Step1/Step1";
import Step2 from "../components/ReviewSteps/Step2/Step2";
import ReviewComponent from "../components/ReviewComponent/ReviewComponent";
import { useRouter } from "next/router";
import { useAuth } from "../lib/auth";

export default function Review() {
  const [currentStep, setCurrentStep] = useState(0);
  const [headerValue, setHeaderValue] = useState("Write a Review");
  const [reviewId, setReviewId] = useState("");
  const [reviewValues, setReviewValues] = useState({
    instituteName: "JIIT",
    course: "BTech",
    graduationDate: "2021-12-12",
    examTaken: true,
    examName: "CAT",
    examScore: "",
    examRank: "",
    howYouGotAdmission: "",
    paymentMethod: "Paytm",
    paymentId: "",
    admission: { ans: "", rating: -1 },
    academics: { ans: "", rating: "" },
    feesAndScholarship: {
      scholarshipProvided: true,
      scholarshipGiven: true,
      scholarshipReceived: "",
    },
    infrastructure: { ans: "", rating: -1 },
    hostelAndMess: { ans: "", rating: -1 },
    placementsAndInternships: { ans: "", rating: -1 },
    clubsAndAssociation: { ans: "", rating: -1 },
    higherStudies: { wishToPursue: true, course: "" },
  });

  const router = useRouter();
  // console.log("router", router);
  const { user, auth } = useAuth();

  useEffect(() => {
    const fetchReview = async (id) => {
      // console.log("id is", id);
      const res = await axios.get(`/api/review?id=${id}`);
      // console.log("response from get", res.data);
      const { currentStep, ...rest } = res.data;
      setCurrentStep(currentStep + 1);
      setReviewValues({ ...rest });
    };
    if (router.query.reviewId) {
      setReviewId(router.query.reviewId);
      fetchReview(router.query.reviewId);
    }
  }, []);

  const handleOnChange = (e, fieldName) => {
    const tempValues = reviewValues;
    tempValues[fieldName] = e.target.value;
    if (fieldName === "examTaken") {
      if (e.target.value === "true") {
        tempValues[fieldName] = true;
      } else {
        tempValues[fieldName] = false;
      }
    }
    setReviewValues({ ...tempValues });
  };

  const handleReviewComponentChange = (value, fieldName, innerFieldName) => {
    const tempValues = reviewValues;
    let tempValue = value;
    if (value === "true") {
      tempValue = true;
    } else if (value === "false") {
      tempValue = false;
    }
    tempValues[fieldName][innerFieldName] = tempValue;
    setReviewValues({ ...tempValues });
  };

  const saveToFirestore = async () => {
    const res = await axios.post("/api/review", {
      reviewId,
      currentStep,
      payload: { ...reviewValues },
      userId: user.userId,
    });
    setReviewId(res.data.reviewId);
  };

  const handleSaveBtn = () => {
    saveToFirestore();
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const handleBackBtn = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  // console.log("currentStep", currentStep);
  // console.log("reviewValues", reviewValues);

  return auth && auth.isLogin ? (
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
          reviewId={reviewId}
          setCurrentStep={setCurrentStep}
          ques="Why did you choose to attend this college?"
          ans={reviewValues.admission.ans}
          rating={reviewValues.admission.rating}
          handleReviewComponentChange={handleReviewComponentChange}
          fieldKey="admission"
        />
      )}
      {currentStep === 4 && (
        <ReviewComponent
          currentStep={currentStep}
          reviewId={reviewId}
          setCurrentStep={setCurrentStep}
          ques="How is the course and faculty members?"
          handleReviewComponentChange={handleReviewComponentChange}
          ans={reviewValues.academics.ans}
          rating={reviewValues.academics.rating}
          fieldKey="academics"
        />
      )}
      {currentStep === 5 && (
        <ReviewComponent
          currentStep={currentStep}
          reviewId={reviewId}
          setCurrentStep={setCurrentStep}
          ques="Why did you choose to attend this college?"
          handleReviewComponentChange={handleReviewComponentChange}
          // ans={reviewValues.feesAndScholarship.ans}
          // rating={reviewValues.feesAndScholarship.rating}
          fieldKey="feesAndScholarship"
          reviewValues={reviewValues}
        />
      )}
      {currentStep === 6 && (
        <ReviewComponent
          currentStep={currentStep}
          reviewId={reviewId}
          setCurrentStep={setCurrentStep}
          ques="How is your college infrastructure?"
          handleReviewComponentChange={handleReviewComponentChange}
          ans={reviewValues.infrastructure.ans}
          rating={reviewValues.infrastructure.rating}
          fieldKey="infrastructure"
        />
      )}

      {currentStep === 7 && (
        <ReviewComponent
          currentStep={currentStep}
          reviewId={reviewId}
          setCurrentStep={setCurrentStep}
          ques="What is the quality of mess and hostel?"
          handleReviewComponentChange={handleReviewComponentChange}
          ans={reviewValues.hostelAndMess.ans}
          rating={reviewValues.hostelAndMess.rating}
          fieldKey="hostelAndMess"
        />
      )}

      {currentStep === 8 && (
        <ReviewComponent
          currentStep={currentStep}
          reviewId={reviewId}
          setCurrentStep={setCurrentStep}
          ques="What is the Quality of placement in your college and how is the internship provided?"
          handleReviewComponentChange={handleReviewComponentChange}
          ans={reviewValues.placementsAndInternships.ans}
          rating={reviewValues.placementsAndInternships.rating}
          fieldKey="placementsAndInternships"
        />
      )}
      {currentStep === 9 && (
        <ReviewComponent
          currentStep={currentStep}
          reviewId={reviewId}
          setCurrentStep={setCurrentStep}
          ques="How are the extra curricular activities in your college?"
          handleReviewComponentChange={handleReviewComponentChange}
          ans={reviewValues.clubsAndAssociation.ans}
          rating={reviewValues.clubsAndAssociation.rating}
          fieldKey="clubsAndAssociation"
        />
      )}
      {currentStep === 10 && (
        <ReviewComponent
          currentStep={currentStep}
          reviewId={reviewId}
          setCurrentStep={setCurrentStep}
          ques="Do you wish to continue higher studies?"
          handleReviewComponentChange={handleReviewComponentChange}
          // ans={reviewValues.clubsAndAssociation.ans}
          // rating={reviewValues.clubsAndAssociation.rating}
          fieldKey="higherStudies"
          reviewValues={reviewValues}
        />
      )}
    </div>
  ) : (
    <div>Please Login To continue</div>
  );
}
