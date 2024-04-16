import { useEffect } from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import { tv } from "tailwind-variants";

import { App as HomeApp } from "@packages/home-app";
import { App as NotFoundApp } from "@packages/notfound-app";
import { useWindow } from "@packages/portal-hooks";
import { HStack, VStack } from "@packages/portal-ui";

import { useActiveAppStore } from "@/stores/useActiveAppStore";

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
  /* Global Stores */
  const { setActiveApp } = useActiveAppStore();

  /* React hooks */
  const { isMaximised } = useWindow();
  const match = useMatch("/:path");

  useEffect(() => {
    // これから起動するアプリを ActiveApp に設定する
    if (match !== null) {
      const { path } = match.params;
      if (path !== undefined) {
        setActiveApp(path);
      }
    }
  });

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
              subApps.forEach((app, key) => {
                elements.push(<Route key={key} path={`/${key}`} element={<app.Page />} />);
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
