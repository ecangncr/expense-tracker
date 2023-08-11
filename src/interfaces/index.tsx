export interface ITransaction {
  id: number;
  type: "Income" | "Expense";
  amount: number;
  currency: string;
  date: string;
  explanation: string;
}
