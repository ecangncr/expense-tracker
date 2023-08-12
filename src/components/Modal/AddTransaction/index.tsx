"use client";
import { useCustomParams } from "@/utils";

import styles from "./styles.module.scss";
import Modal from "..";

import { useState } from "react";
import CurrencySelector from "@/components/CurrencySelector";
import { useDispatch, useSelector } from "react-redux";
import { actions as siteActions, selectSite } from "@/stores/site-store";

const AddTransactionModal: React.FC = () => {
  const { updateSearchParams, searchParams } = useCustomParams();

  const type = searchParams.get("type");

  const { currency: baseCurrency } = useSelector(selectSite);
  const [amount, setAmount] = useState<number>(1);
  const [currency, setCurrency] = useState(baseCurrency || "EUR");
  const [explanation, setExplanation] = useState("");

  const dispatch = useDispatch();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const date = `${day}/${month}/${year} ${hours}:${minutes}`;

    const id = Math.floor((Math.random() + 1) * 1000000);

    const data = {
      id,
      type,
      amount,
      currency,
      explanation,
      date,
    };
    dispatch(siteActions.addTransaction(data));

    setTimeout(() => {
      updateSearchParams({
        action: "",
        id: "",
        type: "",
      });
    }, 300);
  };

  return (
    <Modal title={`Create ${type} Transaction`}>
      <div className={styles.card}>
        <form onSubmit={onSubmit}>
          <div className={styles.inputWrapper}>
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              placeholder="Money Amount"
              min={0.01}
              step="any"
              required
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="currency">Currency</label>
            <div className={styles.currencyWrapper}>
              <CurrencySelector onChange={setCurrency} />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="explanation">Explanation</label>
            <input
              id="explanation"
              type="text"
              placeholder="Detail"
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.saveButton}>
            SAVE
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddTransactionModal;
