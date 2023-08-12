import { useCustomParams } from "@/utils";
import styles from "./styles.module.scss";
interface Props {
  count: number;
  currency: string;
}

const BalanceCard: React.FC<Props> = ({ count, currency }) => {
  const { updateSearchParams } = useCustomParams();
  const handleClick = (type: string) => {
    updateSearchParams({
      action: "create",
      type,
    });
  };
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Total Ballance</h2>
        <div className={styles.buttonArea}>
          <button
            onClick={() => handleClick("Income")}
            className={styles.primaryButton}>
            Income
          </button>
          <button
            onClick={() => handleClick("Expense")}
            className={styles.secondaryButton}>
            Expense
          </button>
        </div>
      </div>
      <div className={styles.balanceWrapper}>
        <p className={styles.count}>
          {count.toFixed(2)} <span className={styles.currency}>{currency}</span>
        </p>
        <p className={styles.info}>WALLETS AMOUNT</p>
      </div>
    </div>
  );
};
export default BalanceCard;
