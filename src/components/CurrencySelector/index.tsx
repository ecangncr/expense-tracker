"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { selectSite } from "@/stores/site-store";
interface CurrencySelectorProps {
  onChange: (newCurrency: string) => void;
  _currency?: string;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  onChange,
  _currency,
}) => {
  const { rates } = useSelector(selectSite);
  const currencies: string[] = Object.keys(rates);
  const { currency: baseCurrency } = useSelector(selectSite);
  const [currency, setCurrency] = useState(
    _currency ? _currency : baseCurrency
  );

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCurrency = event.target.value;
    setCurrency(newCurrency);
    onChange(newCurrency);
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
