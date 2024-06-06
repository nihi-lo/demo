import { useEffect } from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import { tv } from "tailwind-variants";

import { useWindow, useOS } from "@portal-core/hooks";
import { VStack, HStack } from "@portal-core/ui";

import { SiteBody } from "@portal-client/components/model/site/SiteBody";
import { SiteHeader } from "@portal-client/components/model/site/SiteHeader";
import { SiteSideBar } from "@portal-client/components/model/site/SiteSideBar";
import { useActiveAppStore } from "@portal-client/stores/useActiveAppStore";
import { subApps } from "@portal-client/subApps";

import { App as HomeApp } from "@sub-app/home-app/App";
import { App as NotFoundApp } from "@sub-app/notfound-app/App";

const variants = tv({
  slots: {
    base: "relative h-screen bg-content2",
  },
  variants: {
    hideWindowBorder: {
      true: {
        base: "border-none",
      },
      false: {
        base: "border border-divider",
      },
    },
  },
});

const App = (): JSX.Element => {
  /* Global Stores */
  const setActiveApp = useActiveAppStore((state) => state.setActiveApp);

  /* React hooks */
  const { isMaximised } = useWindow();
  const { os } = useOS();
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
  const { base } = variants({
    hideWindowBorder: os === "macos" || isMaximised,
  });

  return (
    <VStack className={base()}>
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
                elements.push(<Route key={key} path={`/${key}/*`} element={<app.Page />} />);
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