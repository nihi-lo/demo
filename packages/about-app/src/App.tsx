import { TbMeat } from "react-icons/tb";
import { Routes, Route } from "react-router-dom";

import { type Metadata } from "@portal-core/types";
import { HStack } from "@portal-core/ui";

import { AboutPage } from "@sub-app/about-app/components/page/AboutPage";
import { TopPage } from "@sub-app/about-app/components/page/TopPage";

const metadata: Metadata = {
  id: "cba33044-b71f-aebe-03bd-317228109543",
  title: "ポータルアプリについて",
  description: "",
  AppIcon: () => (
    <HStack align="center" justify="center" className="size-12 bg-[#e17b34]">
      <TbMeat className="size-8 text-black" />
    </HStack>
  ),
};

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { metadata, App };
