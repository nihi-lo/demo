import { Image } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";

import { type Metadata } from "@portal-core/types";

import AppIconImage from "@sub-app/gakusim-app/assets/img/AppIcon400x400.png";
import { TopPage } from "@sub-app/gakusim-app/components/page/TopPage";

const metadata: Metadata = {
  id: "6876b3b6-307d-27ca-d845-6577357297c2",
  title: "学マス コンテストシミュ",
  description: "",
  AppIcon: () => <Image alt="アプリアイコン" radius="none" src={AppIconImage} width={48} />,
};

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
    </Routes>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { metadata, App };
