import { Routes, Route } from "react-router-dom";
import { tv } from "tailwind-variants";

import { App as HomeApp } from "@packages/home-app";
import { App as NotFoundApp } from "@packages/notfound-app";
import { useWindow } from "@packages/portal-hooks";
import { HStack, VStack } from "@packages/portal-ui";

import { SiteBody } from "@/components/model/site/SiteBody";
import { SiteHeader } from "@/components/model/site/SiteHeader";
import { SiteSideBar } from "@/components/model/site/SiteSideBar";

import { subApps } from "@/subApps";

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
        <HStack className="sticky top-0 z-10">
          <SiteSideBar />
        </HStack>
        <SiteBody>
          <Routes>
            <Route path="/" element={<HomeApp />} />
            {(() => {
              const elements: JSX.Element[] = [];
              subApps.forEach((app) => {
                elements.push(
                  <Route
                    key={app.metadata.key}
                    path={`/${app.metadata.key}`}
                    element={<app.Page />}
                  />,
                );
              });
              return elements;
            })()}
            <Route path="*" element={<NotFoundApp />} />
          </Routes>
        </SiteBody>
      </HStack>
    </VStack>
  );
};

export { App };
