import styles from "./styles.module.scss";
interface Props {
  count: number;
  currency: string;
}

const BalanceCard: React.FC<Props> = ({ count, currency }) => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Total Ballance</h2>
        <div className={styles.buttonArea}>
          <button className={styles.primaryButton}>Income</button>
          <button className={styles.secondaryButton}>Expense</button>
        </div>
      </div>
      <div className={styles.balanceWrapper}>
        <p className={styles.count}>
          {count} <span className={styles.currency}>{currency}</span>
        </p>
        <p className={styles.info}>WALLETS AMOUNT</p>
      </div>
    </div>
  );
};
export default BalanceCard;
