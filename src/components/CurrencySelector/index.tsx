"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
interface CurrencySelectorProps {
  onChange: (newCurrency: string) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ onChange }) => {
  const currencies: string[] = ["USD", "EUR", "GBP", "JPY"];
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newCurrency = event.target.value;
    setSelectedCurrency(newCurrency);
    onChange(newCurrency);
  };

  return (
    <select
      className={styles.currencySelector}
      value={selectedCurrency}
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
