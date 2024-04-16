import { Input, Button } from "@nextui-org/react";
import { TbHome } from "react-icons/tb";

import { Container, VStack, Section, HStack } from "@portal-ui";

import { useApp } from "./App.hooks";

const AppIcon = (): JSX.Element => {
  return (
    <HStack align="center" justify="center" className="size-12 bg-content2">
      <TbHome className="size-8 text-content2-foreground" />
    </HStack>
  );
};

const App = (): JSX.Element => {
  const { inputName, resultText, handleGreetClick, handleInputChange } = useApp();

  return (
    <VStack as="main">
      <Container>
        <VStack gap="md">
          <Section headingAs="h1" title="Welcome Wails App.">
            <VStack align="start" justify="center" gap="sm">
              <div>Please enter your name below 👇</div>
              <HStack align="center" justify="center" gap="sm">
                <Input
                  label="Name"
                  defaultValue={inputName}
                  onChange={(e) => handleInputChange(e.target.value)}
                />
                <Button color="primary" onClick={handleGreetClick}>
                  Greet
                </Button>
              </HStack>
              {resultText && <div>{resultText}</div>}
            </VStack>
          </Section>
          <Section headingAs="h1" title="Dummy">
            <div className="h-screen"></div>
          </Section>
        </VStack>
      </Container>
    </VStack>
  );
};

export { AppIcon, App };
