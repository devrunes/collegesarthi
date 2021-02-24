import React from "react";
import styles from "../steps.module.scss";
import { useForm } from "react-hook-form";

export default function Step2({
  reviewValues,
  handleOnChange,
  handleSaveBtn,
  handleBackBtn,
}) {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(handleSaveBtn)}>
      <div className={styles.formRow}>
        <label>Step2</label>
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
      <div className={styles.actionBtnWrapper}>
        <button
          type="button"
          onClick={handleBackBtn}
          className={styles.backBtn}
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
