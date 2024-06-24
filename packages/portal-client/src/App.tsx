import { useEffect } from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import { tv } from "tailwind-variants";

import { useWindow, useOS } from "@portal-core/hooks";
import { VStack, HStack } from "@portal-core/ui";

import { SiteBody } from "@portal-client/components/model/site/SiteBody";
import { SiteHeader } from "@portal-client/components/model/site/SiteHeader";
import { SiteSideBar } from "@portal-client/components/model/site/SiteSideBar";
import { useActiveAppIdStore } from "@portal-client/stores/useActiveAppIdStore";
import { APP_ID_HOME, APP_ID_NOTFOUND, subApps } from "@portal-client/subapp";

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
  const setActiveAppId = useActiveAppIdStore((state) => state.setActiveAppId);

  /* React hooks */
  const { isMaximised } = useWindow();
  const { os } = useOS();
  const appMatch = useMatch("/apps/:path");

  useEffect(() => {
    // これから起動するアプリを ActiveApp に設定する
    if (appMatch !== null) {
      const { path } = appMatch.params;
      if (path !== undefined) {
        setActiveAppId(path);
      }
    }
  });

  /* ClassName variants */
  const { base } = variants({
    hideWindowBorder: os === "macos" || isMaximised,
  });

  const homeApp = subApps.get(APP_ID_HOME);
  const notFoundApp = subApps.get(APP_ID_NOTFOUND);

  return (
    <VStack className={base()}>
      <SiteHeader />
      <HStack grow="1" className="overflow-hidden overscroll-y-auto">
        <HStack className="sticky top-0 z-10">
          <SiteSideBar />
        </HStack>
        <SiteBody>
          <Routes>
            <Route path="/" element={homeApp?.Page()} />
            {(() => {
              const elements: JSX.Element[] = [];
              subApps.forEach((app, key) => {
                elements.push(<Route key={key} path={`/apps/${key}/*`} element={<app.Page />} />);
              });
              return elements;
            })()}
            <Route path="/*" element={notFoundApp?.Page()} />
          </Routes>
        </SiteBody>
      </HStack>
    </VStack>
  );
};

export { App };
