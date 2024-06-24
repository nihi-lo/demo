import { Link } from "@nextui-org/react";
import { TbAlertTriangleFilled } from "react-icons/tb";

import { VStack, HStack } from "@portal-core/ui";

import { APP_ID_HOME } from "@portal-client/subapp";

const NotFoundPage = (): JSX.Element => {
  return (
    <VStack as="main" align="center" justify="center" gap="md" className="h-full">
      <HStack align="center" gap="sm">
        <TbAlertTriangleFilled className="size-12 text-warning" />
        <p className="text-2xl">404 Not Found</p>
      </HStack>
      <Link href={`/apps/${APP_ID_HOME}`} underline="always">
        ホームアプリへ
      </Link>
    </VStack>
  );
};

export { NotFoundPage };
