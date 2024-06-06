import { TbMeat } from "react-icons/tb";

import { HStack, VStack, Section } from "@portal-core/ui";

const AppIcon = (): JSX.Element => {
  return (
    <HStack align="center" justify="center" className="size-12 bg-[#e17b34]">
      <TbMeat className="size-8 text-black" />
    </HStack>
  );
};

const App = (): JSX.Element => {
  return (
    <VStack as="main">
      <Section headingAs="h1" title="This is AboutPage."></Section>
    </VStack>
  );
};

export { AppIcon, App };
