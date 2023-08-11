import styles from "./styles.module.scss";
import { ITransaction } from "@/interfaces";
import Actions from "./Actions";
type Props = {
  data: ITransaction[] | [];
};
const TableBody: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.tableBody}>
      {data?.length <= 0 ? (
        <h2 className={styles.errorText}>No Match...</h2>
      ) : (
        data?.map((item) => (
          <div key={item.id} className={styles.tableRow}>
            <p>{item.type}</p>
            <p>{item.amount}</p>
            <p>{item.currency}</p>
            <p>{item.date}</p>
            <p>{item.explanation}</p>
            <Actions item={item} />
          </div>
        ))
      )}
    </div>
  );
};

export default TableBody;
