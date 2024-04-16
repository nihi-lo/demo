import { TbLayoutGrid } from "react-icons/tb";

import { VStack, Section, Container, HStack } from "@portal-ui";

const AppIcon = (): JSX.Element => {
  return (
    <HStack align="center" justify="center" className="size-12 bg-content2">
      <TbLayoutGrid className="size-8 text-content2-foreground" />
    </HStack>
  );
};

const App = (): JSX.Element => {
  return (
    <VStack as="main">
      <Container>
        <Section headingAs="h1" title="その他のアプリ"></Section>
      </Container>
    </VStack>
  );
};

export { AppIcon, App };
