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
    examScore: yup.string().required(),
    examRank: yup.number().positive().integer().required(),
  });
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(handleSaveBtn)}>
      <div className={styles.formRow}>
        <label>Did you take any entrance exam?</label>
        <div className={styles.formRadioRow}>
          <div className={styles.radioInput}>
            <input
              type="radio"
              // className={styles.radioInput}
              name="examTaken"
              value="yes"
              checked={reviewValues.examTaken === "yes"}
              onChange={(e) => handleOnChange(e, "examTaken")}
            />{" "}
            Yes
          </div>
          <div className={styles.radioInput}>
            <input
              type="radio"
              // className={styles.radioInput}
              name="examTaken"
              value="no"
              checked={reviewValues.examTaken === "no"}
              onChange={(e) => handleOnChange(e, "examTaken")}
            />{" "}
            No
          </div>
        </div>
      </div>
      {reviewValues.examTaken === "yes" ? (
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
              {errors.examScore && <span>Error</span>}
              <p>{errors.examScore?.message}</p>
            </div>
            <div>
              <label>Rank</label>
              <input
                type="text"
                name="examRank"
                className={styles.formSelectInput}
                value={reviewValues.examRank}
                onChange={(e) => handleOnChange(e, "examRank")}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.formRow}>
          <label>How did you get admission?</label>
          <input
            type="text"
            name="howYouGotAdmission"
            className={styles.formSelectInput}
            value={reviewValues.howYouGotAdmission}
            onChange={(e) => handleOnChange(e, "howYouGotAdmission")}
          />
        </div>
      )}
      <div className={styles.actionBtnWrapper}>
        <button onClick={handleBackBtn} className={styles.backBtn}>
          Back
        </button>
        <input
          type="submit"
          // onClick={handleSaveBtn}
          className={styles.saveBtn}
          value="Save and next"
        />
      </div>
    </form>
  );
}
