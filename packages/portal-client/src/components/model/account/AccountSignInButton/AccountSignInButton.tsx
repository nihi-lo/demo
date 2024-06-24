import { Button, Image, Tooltip } from "@nextui-org/react";
import { TbUserSquareRounded } from "react-icons/tb";

import { useAuth, useSession } from "@portal-core/hooks";

const AccountSignInButton = (): JSX.Element => {
  const { data: session, status } = useSession();
  const { signIn } = useAuth();

  return (
    <Tooltip
      placement="right"
      content={session ? `${session.user.name} でサインイン中` : "サインイン"}
      closeDelay={0}
      classNames={{ base: "pointer-events-none select-none" }}
    >
      {status === "authenticated" ? (
        <Button isIconOnly size="lg" variant="light" radius="full">
          <Image width={48} height={48} src={session!.user.image} />
        </Button>
      ) : (
        <Button isIconOnly size="lg" variant="light" onClick={signIn}>
          <TbUserSquareRounded className="size-8" />
        </Button>
      )}
    </Tooltip>
  );
};

export { AccountSignInButton };
