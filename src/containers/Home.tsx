import BalanceCard from "@/components/BalanceCard";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <BalanceCard count={1500} currency={"USD"} />
    </div>
  );
}
