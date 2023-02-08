import { clsx } from "@/shared/lib";
import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";

type AppLinkTheme = "primary" | "secondary";

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
  className,
  theme = "primary",
  children,
  ...props
}) => {
  return (
    <Link className={clsx([cls.appLink, className, cls[theme]])} {...props}>
      {children}
    </Link>
  );
};
