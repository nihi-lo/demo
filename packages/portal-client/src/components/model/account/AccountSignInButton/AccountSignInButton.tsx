import { Button, Image, Tooltip } from "@nextui-org/react";
import { TbUserSquareRounded } from "react-icons/tb";

import { useAuth } from "@portal-core/hooks";
import { useSessionStore } from "@portal-core/stores";

const AccountSignInButton = (): JSX.Element => {
  const session = useSessionStore((state) => state.session);

  const { signIn } = useAuth();

  return (
    <Tooltip
      placement="right"
      content="アカウント"
      closeDelay={0}
      classNames={{ base: "pointer-events-none select-none" }}
    >
      {session ? (
        <Button isIconOnly size="lg" variant="light">
          <Image width={48} height={48} src={session.user.image} />
        </Button>
      ) : (
        <Button isIconOnly size="lg" variant="light" onClick={signIn}>
          <TbUserSquareRounded className="size-8" />
        </Button>
      )}
    </Tooltip>
  );
};
AccountSignInButton.displayName = "AccountSignInButton";

export { AccountSignInButton };
