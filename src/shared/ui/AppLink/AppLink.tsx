import { classNames } from "@/shared/lib";
import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  theme = AppLinkTheme.PRIMARY,
  children,
  ...props
}) => {
  return (
    <Link
      className={classNames([cls.appLink, className, cls[theme]])}
      {...props}
    >
      {children}
    </Link>
  );
};
