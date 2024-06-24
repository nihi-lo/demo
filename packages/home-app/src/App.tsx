import { TbHome } from "react-icons/tb";
import { Routes, Route } from "react-router-dom";

import { type Metadata } from "@portal-core/types";
import { HStack } from "@portal-core/ui";

import { TopPage } from "@sub-app/home-app/components/page/TopPage";

const metadata: Metadata = {
  id: "9758b097-c421-e215-1892-b9faf92fda64",
  title: "ホーム",
  description: "",
  AppIcon: () => (
    <HStack align="center" justify="center" className="size-12 bg-content2">
      <TbHome className="size-8 text-content2-foreground" />
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
