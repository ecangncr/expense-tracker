import { ITransaction } from "@/interfaces";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: {
  rates: any;
  currency: string;
  transactions: ITransaction[];
} = {
  rates: [],
  currency: "EUR",
  transactions: [],
};

export const getRates = createAsyncThunk("site/getRates", async () => {
  const API_KEY = process.env.API_KEY;
  const response = await fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&currencies=&base_currency=EUR`,
    {
      next: { revalidate: 3600 },
    }
  );
  const rates = await response.json();

  return rates["data"];
});

export const { reducer, actions } = createSlice({
  name: "site",
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.currency = action.payload;
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
    addTransaction: (state, action) => {
      state.transactions = [...state.transactions, action.payload];
    },
    changeTransaction: (state, action) => {
      const index = state.transactions.findIndex(
        (transaction) => transaction.id === action.payload.id
      );

      if (index !== -1) {
        state.transactions[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRates.fulfilled, (state, action) => {
      state.rates = action.payload;
    });
  },
});

export const selectSite = (state: any) => state.site;
