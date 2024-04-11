import { Link } from "@nextui-org/react";
import { TbAlertTriangleFilled } from "react-icons/tb";

import { HStack, VStack } from "@packages/cosmos-ui";

const NotFoundPage = (): JSX.Element => {
  return (
    <VStack as="main" align="center" justify="center" gap="md" className="h-full">
      <HStack align="center" gap="sm">
        <TbAlertTriangleFilled className="size-12 text-warning" />
        <p className="text-2xl">This app doesn't exist.</p>
      </HStack>
      <Link href="/" underline="always">
        ホームへ戻る
      </Link>
    </VStack>
  );
};
NotFoundPage.displayName = "NotFoundPage";

export { NotFoundPage };
