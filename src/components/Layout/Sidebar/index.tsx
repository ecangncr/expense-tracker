import LogoIcon from "@/components/Icons/Logo";
import styles from "./styles.module.scss";
import DashboardIcon from "@/components/Icons/Dashboard";
import InvoiceIcon from "@/components/Icons/Invoice";
import WalletsIcon from "@/components/Icons/Wallets";
import ReportsIcon from "@/components/Icons/Reports";
import TransactionsIcon from "@/components/Icons/Transactions";
import SettingsIcon from "@/components/Icons/Settings";
import HelpIcon from "@/components/Icons/Help";
import ArrowLeftIcon from "@/components/Icons/ArrowLeft";
import Link from "next/link";
const Sidebar: React.FC = (props) => {
  const navigation = [
    {
      id: "dashboard",
      text: "Dashboard",
      href: "#",
      icon: <DashboardIcon />,
    },
    {
      id: "invoice",
      text: "Invoice",
      href: "#",
      icon: <InvoiceIcon />,
    },
    {
      id: "wallets",
      text: "Wallets",
      href: "#",
      icon: <WalletsIcon />,
    },
    {
      id: "reports",
      text: "Reports",
      href: "#",
      icon: <ReportsIcon />,
    },
    {
      id: "transactions",
      text: "Transactions",
      href: "#",
      icon: <TransactionsIcon />,
    },
    {
      id: "settings",
      text: "Settings",
      href: "#",
      icon: <SettingsIcon />,
    },
    {
      id: "Help",
      href: "/",
      text: "Help",
      icon: <HelpIcon />,
    },
    {
      id: "logout",
      href: "/",
      text: "Log Out",
      icon: <ArrowLeftIcon />,
    },
  ];
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <LogoIcon />
      </div>
      <nav className={styles.nav}>
        {navigation.map((item) => (
          <Link key={item.id} href={item.href} className={`${styles.navItem} `}>
            {item.icon}
            <p>{item.text}</p>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
