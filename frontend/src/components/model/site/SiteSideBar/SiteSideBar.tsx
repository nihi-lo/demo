import { Divider, Link, Tooltip } from "@nextui-org/react";
import { type IconType } from "react-icons";
import {
  TbCheese,
  TbChessKnightFilled,
  TbChristmasTree,
  TbClover,
  TbGhost2,
  TbGlassFullFilled,
  TbHome,
  TbKayak,
  TbLayoutGrid,
  TbPig,
} from "react-icons/tb";

import { VStack, HStack } from "@packages/portal-ui";

import { ThemeToggleButton } from "@/components/model/theme/ThemeToggleButton";

const SiteSideBar = (): JSX.Element => {
  // prettier-ignore
  const medadatas: {
    key: string;
    tipMsg: string,
    Icon: IconType,
    className: string
  }[] = [
    { key: "cheese",            tipMsg: "Cheese",            Icon: TbCheese,            className: "size-12 bg-yellow-500" },
    { key: "ghost",             tipMsg: "Ghost",             Icon: TbGhost2,            className: "size-12 bg-violet-400" },
    { key: "chessKnightFilled", tipMsg: "ChessKnightFilled", Icon: TbChessKnightFilled, className: "size-12 bg-cyan-400" },
    { key: "christmasTree",     tipMsg: "ChristmasTree",     Icon: TbChristmasTree,     className: "size-12 bg-green-400" },
    { key: "clover",            tipMsg: "Clover",            Icon: TbClover,            className: "size-12 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-200" },
    { key: "glassFullFilled",   tipMsg: "GlassFullFilled",   Icon: TbGlassFullFilled,   className: "size-12 bg-red-400" },
    { key: "kayak",             tipMsg: "Kayak",             Icon: TbKayak,             className: "size-12 bg-blue-400" },
    { key: "pig",               tipMsg: "Pig",               Icon: TbPig,               className: "size-12 bg-pink-400" },
  ];

  return (
    <VStack as="aside" align="center" justify="between" className="h-full w-20">
      <VStack align="center" py="sm" gap="sm">
        <Tooltip
          placement="right"
          content="ホーム"
          closeDelay={0}
          classNames={{ base: "pointer-events-none select-none" }}
        >
          <Link
            href="/"
            className="size-12 overflow-hidden rounded-3xl transition-all hover:rounded-large"
          >
            <HStack align="center" justify="center" className="size-12 select-none bg-content2">
              <TbHome className="size-9 text-content2-foreground" />
            </HStack>
          </Link>
        </Tooltip>
        <Divider className="w-4/5" />

        {medadatas.map((medadata) => (
          <HStack
            key={medadata.key}
            align="center"
            justify="between"
            className="relative w-20 flex-row-reverse"
          >
            <div className="h-2 w-1 bg-transparent" />
            <Tooltip
              placement="right"
              content={medadata.tipMsg}
              closeDelay={0}
              classNames={{ base: "pointer-events-none select-none" }}
            >
              <Link
                href={`/${medadata.key}`}
                className="peer size-12 overflow-hidden rounded-3xl transition-all hover:rounded-large"
              >
                <HStack align="center" justify="center" className={medadata.className}>
                  <medadata.Icon className="size-8 text-black" />
                </HStack>
              </Link>
            </Tooltip>
            <div className="h-2 w-1 rounded-e-full bg-divider transition-all peer-hover:h-4 peer-hover:bg-content2-foreground" />
          </HStack>
        ))}
        <Divider className="w-4/5" />

        <Tooltip
          placement="right"
          content="その他のアプリ"
          closeDelay={0}
          classNames={{ base: "pointer-events-none select-none" }}
        >
          <Link
            href="/about"
            className="size-12 overflow-hidden rounded-3xl transition-all hover:rounded-large"
          >
            <HStack align="center" justify="center" className="size-12 bg-content2">
              <TbLayoutGrid className="size-9 text-content2-foreground" />
            </HStack>
          </Link>
        </Tooltip>
      </VStack>
      <VStack align="center" py="sm" gap="sm">
        <ThemeToggleButton />
      </VStack>
    </VStack>
  );
};

export { SiteSideBar };
