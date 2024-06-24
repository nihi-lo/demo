import { TbAlertTriangleFilled } from "react-icons/tb";
import { Routes, Route } from "react-router-dom";

import { type Metadata } from "@portal-core/types";
import { HStack } from "@portal-core/ui";

import { TopPage } from "@sub-app/notfound-app/components/page/TopPage";

const metadata: Metadata = {
  id: "1891b219-a8ef-3c9a-1b0a-c0bad1fad2e9",
  title: "不明なアプリ",
  description: "",
  AppIcon: () => (
    <HStack align="center" justify="center" className="size-12 bg-content2">
      <TbAlertTriangleFilled className="size-8 text-warning" />
    </HStack>
  ),
};

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/*" element={<TopPage />} />
    </Routes>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { metadata, App };
