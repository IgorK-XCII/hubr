import "./styles/index.scss";
import { useTheme } from "@/shared/providers";
import { classNames } from "@/shared/lib";
import { AppRouter } from "./providers";
import { Navbar } from "@/widgets/Navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(["app", theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};
