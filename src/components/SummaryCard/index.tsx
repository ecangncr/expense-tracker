import React from "react";
import styles from "./styles.module.scss";

interface SummaryCardProps {
  title: string;
  count: number;
  currency: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  count,
  currency,
}) => {
  return (
    <div className={styles.summaryCard}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.count}>
        {count} <span className={styles.currency}>{currency}</span>
      </p>
    </div>
  );
};

export default SummaryCard;
