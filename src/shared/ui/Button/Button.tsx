import { clsx } from "@/shared/lib";
import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";

type ThemeButton = "clear";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = "clear",
  ...props
}) => {
  return (
    <button {...props} className={clsx([cls.button, cls[theme], className])}>
      {children}
    </button>
  );
};
