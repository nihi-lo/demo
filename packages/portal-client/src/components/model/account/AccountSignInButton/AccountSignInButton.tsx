import { Button, Tooltip } from "@nextui-org/react";
import { TbUserSquareRounded } from "react-icons/tb";

import { useAuth } from "@portal-core/hooks";

const AccountSignInButton = (): JSX.Element => {
  const { signIn } = useAuth();

  return (
    <Tooltip
      placement="right"
      content="アカウント"
      closeDelay={0}
      classNames={{ base: "pointer-events-none select-none" }}
    >
      <Button isIconOnly size="lg" variant="light" onClick={signIn}>
        <TbUserSquareRounded className="size-8" />
      </Button>
    </Tooltip>
  );
};
AccountSignInButton.displayName = "AccountSignInButton";

export { AccountSignInButton };
