import "@/styles/globals.scss";
import DashboardLayout from "@/components/Layout";
import { store } from "@/stores";
import Providers from "@/stores/Provider";
import { getRates } from "@/stores/site-store";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
const mulishFontFamily = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Expense Tracker Case",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await store.dispatch(getRates());
  const state = store.getState();
  return (
    <html lang="en" className={mulishFontFamily.className}>
      <Providers preloadedState={state}>
        <body className="container">
          <DashboardLayout>{children}</DashboardLayout>
        </body>
      </Providers>
    </html>
  );
}
