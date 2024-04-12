import { Routes, Route } from "react-router-dom";
import { tv } from "tailwind-variants";

import { useWindow } from "@packages/portal-hooks";
import { HStack, VStack } from "@packages/portal-ui";

import { SiteBody } from "@/components/model/site/SiteBody";
import { SiteHeader } from "@/components/model/site/SiteHeader";
import { SiteSideBar } from "@/components/model/site/SiteSideBar";
import { AboutPage } from "@/components/page/AboutPage";
import { NotFoundPage } from "@/components/page/NotFoundPage";
import { RootPage } from "@/components/page/RootPage";

const variants = tv({
  slots: {
    base: "relative h-screen bg-content2",
  },
  variants: {
    windowIsMaximised: {
      true: "border-none",
      false: "border border-divider",
    },
  },
});

const App = (): JSX.Element => {
  /* React hooks */
  const { isMaximised } = useWindow();

  /* ClassName variants */
  const { base } = variants();

  return (
    <VStack className={base({ windowIsMaximised: isMaximised })}>
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
