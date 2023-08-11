"use client";
import CurrencySelector from "@/components/CurrencySelector";
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.currencyWrapper}>
        <p>Base Currency:</p>
        <CurrencySelector />
      </div>
    </header>
  );
};

export default Header;
