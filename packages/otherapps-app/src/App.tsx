import { TbLayoutGrid } from "react-icons/tb";

import { type Metadata } from "@portal-core/types";
import { Container, HStack, VStack, Section } from "@portal-core/ui";

const metadata: Metadata = {
  title: "アプリ一覧",
  description: "",
  AppIcon: () => (
    <HStack align="center" justify="center" className="size-12 bg-content2">
      <TbLayoutGrid className="size-8 text-content2-foreground" />
    </HStack>
  ),
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

// eslint-disable-next-line react-refresh/only-export-components
export { metadata, App };
