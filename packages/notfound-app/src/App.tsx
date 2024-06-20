import { Link } from "@nextui-org/react";
import { TbAlertTriangleFilled } from "react-icons/tb";

import { type Metadata } from "@portal-core/types";
import { HStack, VStack } from "@portal-core/ui";

import { APP_ID_HOME } from "@portal-client/subApps";

const metadata: Metadata = {
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
    <VStack as="main" align="center" justify="center" gap="md" className="h-full">
      <HStack align="center" gap="sm">
        <TbAlertTriangleFilled className="size-12 text-warning" />
        <p className="text-2xl">不明なアプリ</p>
      </HStack>
      <Link href={`/${APP_ID_HOME}`} underline="always">
        ホームへ戻る
      </Link>
    </VStack>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { metadata, App };
