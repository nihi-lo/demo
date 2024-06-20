---
name: "Page Component"
root: "."
output: "."
ignore: []
questions:
  component_name: "Please enter a component name."
  hasHooks:
    confirm: "Is it has hooks?"
    initial: true
---

# Variables

- componentName: `{{ inputs.component_name | camel }}`
- ComponentName: `{{ inputs.component_name | pascal }}`

# `src/components/page/{{ ComponentName }}/index.ts`

```ts
export * from "./{{ ComponentName }}";
```

# `{{ !inputs.hasHooks && '!' }}src/components/page/{{ ComponentName }}/{{ ComponentName }}.hooks.ts`

```ts
type {{ ComponentName }}Hooks = Record<string, never>;

const use{{ ComponentName }} = (): {{ ComponentName }}Hooks => {
  /* React hooks */
  // Add a react hooks.

  /* Event handlers */
  // Add an event handlers.

  return {};
};

export { type {{ ComponentName }}Hooks, use{{ ComponentName }} };
```

# `src/components/page/{{ ComponentName }}/{{ ComponentName }}.tsx`

```ts
import { VStack } from "@portal-client/components/ui/layout";
import { Heading } from "@portal-client/components/ui/typography";

{{ inputs.hasHooks && "import { use" + ComponentName + ' } from "./' + ComponentName + '.hooks";' }}

const {{ ComponentName }} = (): JSX.Element => {
  {{ inputs.hasHooks && "const { ..._hooks } = use" + ComponentName + "();" }}

  return (
    <VStack as="main" align="center" gap="xl">
      <Heading as="h1" className="text-7xl font-extrabold">
        This is <span className="text-primary">{{ ComponentName }}</span>.
      </Heading>
    </VStack>
  );
};

export { {{ ComponentName }} };
```
