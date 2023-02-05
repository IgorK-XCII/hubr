import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "@/shared/providers";
import { classNames } from "@/shared/lib";
import { AppRouter } from "./providers";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", { hovered: true, asd: true }, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter />
    </div>
  );
};
