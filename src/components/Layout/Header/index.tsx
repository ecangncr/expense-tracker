"use client";
import CurrencySelector from "@/components/CurrencySelector";
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  const handleCurrencyChange = (newCurrency: string) => {
    console.log("Seçilen para birimi:", newCurrency);
  };
  return (
    <header className={styles.header}>
      <div className={styles.currencyWrapper}>
        <p>Base Currency:</p>
        <CurrencySelector onChange={handleCurrencyChange} />
      </div>
    </header>
  );
};

export default Header;
