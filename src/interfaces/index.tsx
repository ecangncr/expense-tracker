export interface ITransaction {
  id: number;
  type: "Income" | "Expense";
  amount: number;
  currency: string;
  Date: Date;
  explanation: string;
}
