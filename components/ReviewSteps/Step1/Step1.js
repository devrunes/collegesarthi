import React from "react";
import styles from "../steps.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Step1({
  reviewValues,
  handleOnChange,
  handleSaveBtn,
  handleBackBtn,
}) {
  const schema = yup.object().shape({
    examTaken: yup.bool(),
    examScore: yup.number().when("examTaken", {
      is: true,
      then: yup.number().required().positive(),
    }),
    examRank: yup.number().when("examTaken", {
      is: true,
      then: yup.number().required().positive(),
    }),
    howYouGotAdmission: yup.string().when("examTaken", {
      is: false,
      then: yup.string().required(),
    }),
  });
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });

  // console.log(errors);
  // console.log(reviewValues.examTaken);

  return (
    <form onSubmit={handleSubmit(handleSaveBtn)}>
      <div className={styles.formRow}>
        <label>Did you take any entrance exam?</label>
        <div className={styles.formRadioRow}>
          <div className={styles.radioInput}>
            <input
              type="radio"
              ref={register}
              // className={styles.radioInput}
              name="examTaken"
              value={true}
              checked={reviewValues.examTaken}
              onChange={(e) => handleOnChange(e, "examTaken")}
            />{" "}
            Yes
          </div>
          <div className={styles.radioInput}>
            <input
              type="radio"
              ref={register}
              name="examTaken"
              value={false}
              checked={!reviewValues.examTaken}
              onChange={(e) => handleOnChange(e, "examTaken")}
            />{" "}
            No
          </div>
        </div>
      </div>
      {reviewValues.examTaken ? (
        <div>
          <div className={styles.formRow}>
            <label>Entrance Exam</label>
            <select
              name="examName"
              ref={register}
              className={styles.formSelectInput}
              value={reviewValues.examName}
              onChange={(e) => handleOnChange(e, "examName")}
            >
              <option value="CAT">CAT</option>
              <option value="JEE-Mains">JEE-Mains</option>
            </select>
          </div>
          <div className={styles.formDoubleRow}>
            <div>
              <label>Score</label>
              <input
                type="text"
                name="examScore"
                ref={register({ required: true })}
                className={styles.formSelectInput}
                value={reviewValues.examScore}
                onChange={(e) => handleOnChange(e, "examScore")}
              />
              <p className={styles.errorMsg}>{errors.examScore?.message}</p>
            </div>
            <div>
              <label>Rank</label>
              <input
                type="text"
                name="examRank"
                ref={register}
                className={styles.formSelectInput}
                value={reviewValues.examRank}
                onChange={(e) => handleOnChange(e, "examRank")}
              />
              <p className={styles.errorMsg}>{errors.examRank?.message}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.formRow}>
          <label>How did you get admission?</label>
          <input
            type="text"
            name="howYouGotAdmission"
            ref={register({ required: true })}
            className={styles.formSelectInput}
            value={reviewValues.howYouGotAdmission}
            onChange={(e) => handleOnChange(e, "howYouGotAdmission")}
          />
          <p className={styles.errorMsg}>
            {errors.howYouGotAdmission?.message}
          </p>
        </div>
      )}
      <div className={styles.actionBtnWrapper}>
        <button
          type="button"
          onClick={handleBackBtn}
          className={styles.backBtn}
        >
          Back
        </button>
        <input type="submit" className={styles.saveBtn} value="Save and next" />
      </div>
    </form>
  );
}
