"use client";
import CurrencySelector from "@/components/CurrencySelector";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { actions as siteActions } from "@/stores/site-store";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const handleChange = (currency: string) => {
    dispatch(siteActions.changeCurrency(currency));
  };
  return (
    <header className={styles.header}>
      <div className={styles.currencyWrapper}>
        <p>Base Currency:</p>
        <CurrencySelector onChange={handleChange} />
      </div>
    </header>
  );
};

export default Header;
