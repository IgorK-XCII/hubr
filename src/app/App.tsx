import "./styles/index.scss";
import { useTheme } from "@/shared/providers";
import { clsx } from "@/shared/lib";
import { AppRouter } from "./providers";
import { Navbar } from "@/widgets/Navbar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={clsx(["app", theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
