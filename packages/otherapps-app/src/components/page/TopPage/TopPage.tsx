import { Container, Section, VStack } from "@portal-core/ui";

const TopPage = (): JSX.Element => {
  return (
    <VStack as="main">
      <Container>
        <Section headingAs="h1" title="その他のアプリ"></Section>
      </Container>
    </VStack>
  );
};

export { TopPage };
