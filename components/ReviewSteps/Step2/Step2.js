import React from "react";
import styles from "../steps.module.scss";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Step2({
  reviewValues,
  handleOnChange,
  handleSaveBtn,
  handleBackBtn,
}) {
  const schema = yup.object().shape({
    paymentId: yup.string().required(),
  });
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <form onSubmit={handleSubmit(handleSaveBtn)}>
      <div className={styles.formRow}>
        <label>Payment Method</label>
        <select
          name="paymentMethod"
          ref={register}
          className={styles.formSelectInput}
          value={reviewValues.paymentMethod}
          onChange={(e) => handleOnChange(e, "paymentMethod")}
        >
          <option value="Paytm">Paytm</option>
          <option value="UPI">UPI</option>
        </select>
      </div>
      <div className={styles.formRow}>
        <label>
          {reviewValues.paymentMethod === "Paytm" ? "Paytm Number" : "UPI Id"}
        </label>
        <input
          type="text"
          name="paymentId"
          ref={register}
          className={styles.formSelectInput}
          value={reviewValues.paymentId}
          onChange={(e) => handleOnChange(e, "paymentId")}
        />
        <p className={styles.errorMsg}>{errors.paymentId?.message}</p>
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
