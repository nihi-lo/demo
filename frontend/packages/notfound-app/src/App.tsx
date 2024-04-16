import { Link } from "@nextui-org/react";
import { TbAlertTriangleFilled } from "react-icons/tb";

import { HStack, VStack } from "@portal-ui";

const AppIcon = (): JSX.Element => {
  return (
    <HStack align="center" justify="center" className="size-12 bg-content2">
      <TbAlertTriangleFilled className="size-8 text-warning" />
    </HStack>
  );
};

const App = (): JSX.Element => {
  return (
    <VStack as="main" align="center" justify="center" gap="md" className="h-full">
      <HStack align="center" gap="sm">
        <TbAlertTriangleFilled className="size-12 text-warning" />
        <p className="text-2xl">不明なアプリ</p>
      </HStack>
      <Link href={`/${1}`} underline="always">
        ホームへ戻る
      </Link>
    </VStack>
  );
};

export { AppIcon, App };
