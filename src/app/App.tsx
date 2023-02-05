import "./styles/index.scss";
import { Routes, Route, Link } from "react-router-dom";
import { AboutPageLazy, MainPageLazy } from "@/pages";
import { useTheme } from "@/shared/providers";
import { classNames } from "@/shared/lib";
import { Suspense } from "react";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", { hovered: true, asd: true }, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageLazy />} />
          <Route path="/" element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
