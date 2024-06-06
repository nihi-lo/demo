---
name: "Model Component"
root: "."
output: "."
ignore: []
questions:
  model_name: "Please enter a model name."
  component_name: "Please enter a component name."
---

# Variables

- modelName: `{{ inputs.model_name | camel }}`
- componentName: `{{ inputs.component_name | camel }}`
- ComponentName: `{{ inputs.component_name | pascal }}`

# `src/components/model/{{ modelName }}/{{ ComponentName }}/index.ts`

```ts
export * from "./{{ ComponentName }}";
```

# `src/components/model/{{ modelName }}/{{ ComponentName }}/{{ ComponentName }}.tsx`

```ts
import {
  type {{ ComponentName }}VariantProps as VariantProps,
  {{ componentName }}Variants as variants,
} from "./{{ ComponentName }}.variants";

type {{ ComponentName }}Props = VariantProps;

const {{ ComponentName }} = ({ ...props }: {{ ComponentName }}Props): JSX.Element => {
  /* ClassName variants */
  const { base } = variants();

  return <div className={base()} {...props}></div>;
};
{{ ComponentName }}.displayName = "{{ ComponentName }}";

export { type {{ ComponentName }}Props, {{ ComponentName }} };
```

# `src/components/model/{{ modelName }}/{{ ComponentName }}/{{ ComponentName }}.variants.ts`

```ts
import { tv, type VariantProps } from "tailwind-variants";

const {{ componentName }}Variants = tv({
  slots: {
    base: "",
  },
  variants: {},
});

type {{ ComponentName }}VariantProps = VariantProps<typeof {{ componentName }}Variants>;

export { {{ componentName }}Variants, type {{ ComponentName }}VariantProps };
```
