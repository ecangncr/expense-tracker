"use client";
import Dropdown from "@/components/Dropdown";
import styles from "./styles.module.scss";
import { useCustomParams } from "@/utils";
import { ITransaction } from "@/interfaces";
type Props = {
  item: ITransaction;
};
const Actions: React.FC<Props> = ({ item }) => {
  const { updateSearchParams } = useCustomParams();
  return (
    <Dropdown>
      <div className={styles.dropdownContent}>
        <label className={styles.title}>Actions</label>

        <button
          className={styles.clearButton}
          onClick={() => {
            updateSearchParams({
              action: "edit",
              id: item.id,
            });
          }}>
          Edit
        </button>

        <button
          className={styles.clearButton}
          onClick={() => {
            updateSearchParams({
              action: "delete",
              id: item.id,
            });
          }}>
          Delete
        </button>
      </div>
    </Dropdown>
  );
};

export default Actions;
