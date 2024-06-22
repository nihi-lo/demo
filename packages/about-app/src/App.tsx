import { TbMeat } from "react-icons/tb";

import { type Metadata } from "@portal-core/types";
import { HStack, VStack, Section } from "@portal-core/ui";

const metadata: Metadata = {
  id: "cba33044-b71f-aebe-03bd-317228109543",
  title: "ポータルアプリについて",
  description: "",
  AppIcon: () => (
    <HStack align="center" justify="center" className="size-12 bg-[#e17b34]">
      <TbMeat className="size-8 text-black" />
    </HStack>
  ),
};

const App = (): JSX.Element => {
  return (
    <VStack as="main">
      <Section headingAs="h1" title="This is AboutPage."></Section>
    </VStack>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { metadata, App };
