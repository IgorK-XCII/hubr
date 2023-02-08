import { clsx } from "@/shared/lib";
import { FC } from "react";
import cls from "./Navbar.module.scss";
import { AppLink } from "@/shared/ui";
import { RouterPaths } from "@/shared/config";
import { APP_ROUTES } from "@/shared/config/router/appRoutes";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={clsx([cls.navbar, className])}>
      <ThemeSwitcher />
      <div className={clsx([cls.links])}>
        <AppLink theme={"primary"} to={RouterPaths[APP_ROUTES.MAIN]}>
          Главная
        </AppLink>
        <AppLink theme={"primary"} to={RouterPaths[APP_ROUTES.ABOUT]}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
