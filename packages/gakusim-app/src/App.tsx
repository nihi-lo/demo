import { Routes, Route } from "react-router-dom";

import { type Metadata } from "@portal-core/types";
import { HStack } from "@portal-core/ui";

import { TopPage } from "@sub-app/gakusim-app/components/page/TopPage";

const metadata: Metadata = {
  id: "6876b3b6-307d-27ca-d845-6577357297c2",
  title: "学マス - コンテストシミュ",
  description: "",
  AppIcon: () => (
    <HStack align="center" justify="center" className="size-12 bg-content3">
      <p className="text-lg font-semibold text-content3-foreground">学</p>
    </HStack>
  ),
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
