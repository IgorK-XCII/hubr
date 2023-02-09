import { useTranslation } from "react-i18next";

export const MainPage = () => {
  const { t } = useTranslation();

  return <div>{t("main")}</div>;
};
