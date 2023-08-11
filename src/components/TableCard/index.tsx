"use client";
import { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import styles from "./styles.module.scss";
import { ITransaction } from "@/interfaces";
import { useSelector } from "react-redux";
import { selectSite } from "@/stores/site-store";
export default function TableCard() {
  const [typeFilter, setTypeFilter] = useState<ITransaction["type"] | string>(
    "None"
  );

  const [currencyFilter, setCurrencyFilter] = useState<string>("None");

  const [filteredData, setFilteredData] = useState<ITransaction[]>([]);
  const { transactions } = useSelector(selectSite);

  useEffect(() => {
    let filtered = transactions as ITransaction[];

    if (typeFilter && typeFilter !== "None") {
      filtered = filtered.filter((item) => item.type === typeFilter);
    }

    if (currencyFilter && currencyFilter !== "None") {
      filtered = filtered.filter((item) => item.currency === currencyFilter);
    }

    setFilteredData(filtered);
  }, [typeFilter, currencyFilter]);

  return (
    <div className={styles.card}>
      <TableHead
        typeFilter={typeFilter}
        currencyFilter={currencyFilter}
        setTypeFilter={setTypeFilter}
        setCurrencyFilter={setCurrencyFilter}
      />
      <TableBody data={filteredData} />
    </div>
  );
}
