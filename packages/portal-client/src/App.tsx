import { useEffect } from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import { tv } from "tailwind-variants";

import { useWindow, useOS } from "@portal-core/hooks";
import { VStack, HStack } from "@portal-core/ui";

import { SiteBody } from "@portal-client/components/model/site/SiteBody";
import { SiteHeader } from "@portal-client/components/model/site/SiteHeader";
import { SiteSideBar } from "@portal-client/components/model/site/SiteSideBar";
import { NotFoundPage } from "@portal-client/components/page/NotFoundPage";
import { useActiveAppIdStore } from "@portal-client/stores/useActiveAppIdStore";
import { APP_ID_HOME, subApps } from "@portal-client/subapp";

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
  const topMatch = useMatch("/");
  const appsMatch = useMatch("/apps/:appId/*");

  useEffect(() => {
    // 現在のURLから起動アプリを判別し、 ActiveAppId に設定する
    if (topMatch) {
      setActiveAppId(APP_ID_HOME);
    } else if (appsMatch) {
      setActiveAppId(appsMatch.params.appId!);
    } else {
      setActiveAppId(null);
    }
  });

  /* ClassName variants */
  const { base } = variants({
    hideWindowBorder: os === "macos" || isMaximised,
  });

  const homeApp = subApps.get(APP_ID_HOME);

  return (
    <VStack className={base()}>
      <SiteHeader />
      <HStack grow="1" className="overflow-hidden overscroll-y-auto">
        <HStack className="sticky top-0 z-10">
          <SiteSideBar />
        </HStack>
        <SiteBody>
          <Routes>
            <Route path="/" element={homeApp!.Page()} />
            {(() => {
              const elements: JSX.Element[] = [];
              subApps.forEach((app, key) => {
                elements.push(<Route key={key} path={`/apps/${key}/*`} element={<app.Page />} />);
              });
              return elements;
            })()}
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </SiteBody>
      </HStack>
    </VStack>
  );
};

export { App };
