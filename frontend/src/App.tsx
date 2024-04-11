import { type JSX } from "react";
import { Routes, Route } from "react-router-dom";

import { HStack, VStack } from "@packages/cosmos-ui";

import { SiteBody } from "@/components/model/site/SiteBody";
import { SiteHeader } from "@/components/model/site/SiteHeader";
import { SiteSideBar } from "@/components/model/site/SiteSideBar";
import { AboutPage } from "@/components/page/AboutPage";
import { NotFoundPage } from "@/components/page/NotFoundPage";
import { RootPage } from "@/components/page/RootPage";

const App = (): JSX.Element => {
  return (
    <VStack className="relative h-screen bg-content2">
      <SiteHeader />
      <HStack grow="1" className="overflow-hidden overscroll-y-auto">
        <HStack className="sticky top-0">
          <SiteSideBar />
        </HStack>
        <SiteBody>
          <Routes>
            <Route path="/" element={<RootPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SiteBody>
      </HStack>
    </VStack>
  );
};

export { App };
