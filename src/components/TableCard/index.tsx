"use client";
import { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import styles from "./styles.module.scss";
import { ITransaction } from "@/interfaces";
export default function TableCard() {
  const [typeFilter, setTypeFilter] = useState<ITransaction["type"] | string>(
    "None"
  );

  const [currencyFilter, setCurrencyFilter] = useState<string>("None");

  const [filteredData, setFilteredData] = useState<ITransaction[]>([]);
  const dummyData: ITransaction[] = [
    {
      id: 1,
      type: "Expense",
      amount: 1400,
      currency: "USD",
      Date: new Date(19, 1, 2023),
      explanation: "Deneme",
    },
    {
      id: 2,
      type: "Expense",
      amount: 500,
      currency: "TRY",
      Date: new Date(19, 1, 2023),
      explanation: "Deneme",
    },
    {
      id: 3,
      type: "Income",
      amount: 500,
      currency: "TRY",
      Date: new Date(19, 1, 2023),
      explanation: "Deneme",
    },
    {
      id: 4,
      type: "Income",
      amount: 500,
      currency: "USD",
      Date: new Date(19, 1, 2023),
      explanation: "Deneme",
    },
    {
      id: 5,
      type: "Income",
      amount: 500,
      currency: "USD",
      Date: new Date(19, 1, 2023),
      explanation: "Deneme",
    },
    {
      id: 6,
      type: "Income",
      amount: 500,
      currency: "USD",
      Date: new Date(19, 1, 2023),
      explanation: "Deneme",
    },
    {
      id: 7,
      type: "Income",
      amount: 500,
      currency: "USD",
      Date: new Date(19, 1, 2023),
      explanation: "Deneme",
    },
    {
      id: 8,
      type: "Income",
      amount: 500,
      currency: "USD",
      Date: new Date(19, 1, 2023),
      explanation: "Deneme",
    },
  ];

  useEffect(() => {
    let filtered = dummyData;

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
