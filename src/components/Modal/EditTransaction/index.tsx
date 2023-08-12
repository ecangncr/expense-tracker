"use client";
import { useCustomParams } from "@/utils";

import styles from "./styles.module.scss";
import Modal from "..";

import { useState } from "react";
import CurrencySelector from "@/components/CurrencySelector";
import { useDispatch, useSelector } from "react-redux";
import { actions as siteActions, selectSite } from "@/stores/site-store";
import { ITransaction } from "@/interfaces";

const EditTransactionModal: React.FC = () => {
  const { updateSearchParams, searchParams } = useCustomParams();
  const { transactions } = useSelector(selectSite);

  const id = searchParams.get("id");

  const selectedTransaction = (transactions as ITransaction[])?.find(
    (transaction) => transaction.id.toString() === id
  );

  const [amount, setAmount] = useState<number | undefined>(
    selectedTransaction?.amount || 1
  );
  const [currency, setCurrency] = useState(
    selectedTransaction?.currency || "EUR"
  );
  const [explanation, setExplanation] = useState<string | undefined>(
    selectedTransaction?.explanation
  );

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

    const data = {
      id: Number(id),
      type: selectedTransaction?.type,
      amount,
      currency,
      explanation,
      date,
    };
    dispatch(siteActions.changeTransaction(data));
    setTimeout(() => {
      updateSearchParams({
        action: "",
        id: "",
        type: "",
      });
    }, 300);
  };

  return (
    <Modal title={`Edit Transaction`}>
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
              <CurrencySelector _currency={currency} onChange={setCurrency} />
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

export default EditTransactionModal;
