"use client";
import Dropdown from "@/components/Dropdown";
import styles from "./styles.module.scss";
import { useCustomParams } from "@/utils";
import { ITransaction } from "@/interfaces";
import { useDispatch } from "react-redux";
import { actions as siteActions } from "@/stores/site-store";
type Props = {
  item: ITransaction;
};
const Actions: React.FC<Props> = ({ item }) => {
  const { updateSearchParams } = useCustomParams();
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(siteActions.deleteTransaction(id));
  };
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
          onClick={() => handleDelete(item.id)}>
          Delete
        </button>
      </div>
    </Dropdown>
  );
};

export default Actions;
