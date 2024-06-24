import { Button, Link } from "@nextui-org/react";

import { Section, VStack } from "@portal-core/ui";

import { metadata } from "@sub-app/about-app/App";

const AboutPage = (): JSX.Element => {
  return (
    <VStack as="main">
      <Section headingAs="h1" title="This is AboutPage.">
        <Button href={`/apps/${metadata.id}`} as={Link} color="primary">
          Topページ
        </Button>
      </Section>
    </VStack>
  );
};

export { AboutPage };
