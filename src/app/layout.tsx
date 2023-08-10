import DashboardLayout from "@/components/Layout";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
const mulishFontFamily = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Expense Tracker Case",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mulishFontFamily.className}>
      <body className="container">
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
