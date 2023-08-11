"use client";
import BalanceCard from "@/components/BalanceCard";
import styles from "./styles.module.scss";
import SummaryCard from "@/components/Summary Card";
import TableCard from "@/components/TableCard";
import { actions as siteActions, selectSite } from "@/stores/site-store";
import { useSelector } from "react-redux";

export default function Home() {
  const { currency } = useSelector(selectSite);

  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <BalanceCard count={5200} currency={currency} />
        <div className={styles.summaryArea}>
          <SummaryCard title="Total Income" count={300} currency={currency} />
          <SummaryCard
            title="Total Expense"
            count={2500.01}
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
