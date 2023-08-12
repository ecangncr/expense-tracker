"use client";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "./styles.module.scss";
import Dropdown from "@/components/Dropdown";
import { ITransaction } from "@/interfaces";
import { useSelector } from "react-redux";
import { selectSite } from "@/stores/site-store";

interface Props {
  typeFilter: ITransaction["type"] | string;
  currencyFilter: string;
  setTypeFilter: Dispatch<SetStateAction<"Income" | "Expense" | string>>;
  setCurrencyFilter: Dispatch<SetStateAction<string>>;
}

const TableHead: React.FC<Props> = ({
  typeFilter,
  currencyFilter,
  setTypeFilter,
  setCurrencyFilter,
}) => {
  const typleList: ITransaction["type"][] = ["Income", "Expense"];

  const { rates } = useSelector(selectSite);
  const currencies: string[] = Object.keys(rates);

  const handleClear = () => {
    setCurrencyFilter("None");
    setTypeFilter("None");
  };
  return (
    <div className={styles.head}>
      <div className={styles.wrapper}>
        <p>Latest Transactions</p>
        <Dropdown>
          <div className={styles.dropdownContent}>
            <label className={styles.title}>Filter</label>
            <select
              value={typeFilter || "None"}
              onChange={(e) => setTypeFilter(e.target.value)}>
              <option value="None">None</option>
              {typleList.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              value={currencyFilter || "None"}
              onChange={(e) => setCurrencyFilter(e.target.value)}>
              <option value="None">None</option>
              {currencies.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button className={styles.clearButton} onClick={handleClear}>
              Clear Filters
            </button>
          </div>
        </Dropdown>
      </div>
      <div className={styles.thead}>
        <h5>Type</h5>
        <h5>Amount</h5>
        <h5>Currency</h5>
        <h5>Date</h5>
        <h5>Explanation</h5>
      </div>
    </div>
  );
};

export default TableHead;
