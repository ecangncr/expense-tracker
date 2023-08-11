"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { actions as siteActions } from "@/stores/site-store";
import { selectSite } from "@/stores/site-store";

const CurrencySelector: React.FC = () => {
  const { rates } = useSelector(selectSite);
  const currencies: string[] = Object.keys(rates);
  const { currency } = useSelector(selectSite);
  const dispatch = useDispatch();

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCurrency = event.target.value;
    dispatch(siteActions.changeCurrency(newCurrency));
  };

  return (
    <select
      className={styles.currencySelector}
      value={currency}
      onChange={handleCurrencyChange}>
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;
