import { VStack, Section } from "@packages/portal-ui";

const AboutPage = (): JSX.Element => {
  return (
    <VStack as="main">
      <Section headingAs="h1" title="This is AboutPage."></Section>
    </VStack>
  );
};
AboutPage.displayName = "AboutPage";

export { AboutPage };
