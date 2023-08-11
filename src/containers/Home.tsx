import BalanceCard from "@/components/BalanceCard";
import styles from "./styles.module.scss";
import SummaryCard from "@/components/SummaryCard";
export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <BalanceCard count={5200} currency="USD" />
        <div className={styles.summaryArea}>
          <SummaryCard title="Total Income" count={300} currency="USD" />
          <SummaryCard title="Total Expense" count={2500.01} currency="USD" />
        </div>
      </div>
      <div className={styles.tableArea}>Table</div>
    </div>
  );
}
