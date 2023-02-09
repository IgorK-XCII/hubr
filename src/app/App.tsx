import "./styles/index.scss";
import { useTheme } from "@/shared/providers";
import { clsx } from "@/shared/lib";
import { AppRouter } from "./providers";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/SIdebar";
import { Suspense } from "react";
import "@/shared/config/i18n";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={clsx(["app", theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className="content-block">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
