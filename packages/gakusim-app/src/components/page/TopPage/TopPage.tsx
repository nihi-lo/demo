import { Container, Section, VStack } from "@portal-core/ui";

const TopPage = (): JSX.Element => {
  return (
    <VStack as="main">
      <Container>
        <Section headingAs="h1" title="About">
          <p>このページは、 学マス - コンテストシミュ の TopPage です。</p>
        </Section>
      </Container>
    </VStack>
  );
};

export { TopPage };
