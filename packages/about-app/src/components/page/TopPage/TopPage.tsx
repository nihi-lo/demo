import { Button, Link } from "@nextui-org/react";

import { Section, VStack } from "@portal-core/ui";

import { metadata } from "@sub-app/about-app/App";

const TopPage = (): JSX.Element => {
  return (
    <VStack as="main">
      <Section headingAs="h1" title="This is TopPage.">
        <Button href={`/apps/${metadata.id}/about`} as={Link} color="primary">
          Aboutページ
        </Button>
      </Section>
    </VStack>
  );
};

export { TopPage };
