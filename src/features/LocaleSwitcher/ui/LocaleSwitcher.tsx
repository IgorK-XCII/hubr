import { clsx } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import cls from "./LocaleSwitcher.module.scss";

interface LocaleSwitcherProps {
  className?: string;
}

export const LocaleSwitcher: FC<LocaleSwitcherProps> = ({ className }) => {
  const { i18n, t } = useTranslation();

  const handleToggle = async () =>
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");

  return (
    <Button
      theme="clear"
      onClick={handleToggle}
      className={clsx([cls.localeSwitcher, className])}
    >
      {t("language")}
    </Button>
  );
};
