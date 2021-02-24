import React from "react";
import styles from "../steps.module.scss";
import { useForm } from "react-hook-form";

export default function Step0({
  reviewValues,
  handleOnChange,
  handleSaveBtn,
  handleBackBtn,
}) {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(handleSaveBtn)}>
      <div className={styles.formRow}>
        <label>Institution Name</label>
        <select
          name="instituteName"
          ref={register}
          className={styles.formSelectInput}
          value={reviewValues.instituteName}
          // onChange={(e) => setInstituteName(e.target.value)}
          onChange={(e) => handleOnChange(e, "instituteName")}
        >
          <option value="JIIT">JIIT</option>
          <option value="IITD">IITD</option>
        </select>
      </div>
      <div className={styles.formRow}>
        <label>Course</label>
        <select
          name="course"
          ref={register}
          className={styles.formSelectInput}
          value={reviewValues.course}
          onChange={(e) => handleOnChange(e, "course")}
        >
          <option value="BTech">BTech</option>
          <option value="MBA">MBA</option>
          <option value="BSc">BSc</option>
          <option value="BBA">BBA</option>
          <option value="MSc">MSc</option>
        </select>
      </div>
      <div className={styles.formRow}>
        <label>Graduation Date</label>
        <input
          type="date"
          name="graduationDate"
          className={styles.formSelectInput}
          value={reviewValues.graduationDate}
          onChange={(e) => handleOnChange(e, "graduationDate")}
        />
      </div>
      <div className={styles.actionBtnWrapper}>
        <button
          type="button"
          onClick={handleBackBtn}
          className={styles.backBtn}
          disabled={true}
        >
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
