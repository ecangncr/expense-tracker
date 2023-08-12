"use client";
import BalanceCard from "@/components/BalanceCard";
import styles from "./styles.module.scss";
import SummaryCard from "@/components/Summary Card";
import TableCard from "@/components/TableCard";
import { selectSite } from "@/stores/site-store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ITransaction } from "@/interfaces";

export default function Home() {
  const { currency, transactions, rates } = useSelector(selectSite);

  const [totalBalance, setTotalBalance] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalExpense, setTotalExpense] = useState<number>(0);

  useEffect(() => {
    let _totalIncome = 0;
    let _totalExpense = 0;
    let _totalBalance = 0;

    (transactions as ITransaction[]).forEach((item) => {
      let baseRate = rates[currency];
      let itemRate = rates[item.currency];

      let total = (item.amount / itemRate) * baseRate;

      if (item.type === "Income") {
        _totalIncome += total;
      } else {
        _totalExpense += total;
      }
    });
    _totalBalance = _totalIncome - _totalExpense;

    setTotalBalance(_totalBalance);
    setTotalExpense(_totalExpense);
    setTotalIncome(_totalIncome);
  }, [transactions, currency, rates]);

  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <BalanceCard count={totalBalance} currency={currency} />
        <div className={styles.summaryArea}>
          <SummaryCard
            title="Total Income"
            count={totalIncome}
            currency={currency}
          />
          <SummaryCard
            title="Total Expense"
            count={totalExpense}
            currency={currency}
          />
        </div>
      </div>
      <div className={styles.tableArea}>
        <TableCard />
      </div>
    </div>
  );
}
