import { classNames } from "@/shared/lib";
import { FC } from "react";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "@/shared/ui";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames([cls.navbar, className])}>
      <div className={classNames([cls.links])}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
