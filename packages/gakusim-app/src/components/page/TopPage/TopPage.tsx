import { Section, VStack } from "@portal-core/ui";

const TopPage = (): JSX.Element => {
  return (
    <VStack as="main">
      <Section headingAs="h1" title="About">
        <p>このページは、 学マス - コンテストシミュ の TopPage です。</p>
      </Section>
    </VStack>
  );
};

export { TopPage };
