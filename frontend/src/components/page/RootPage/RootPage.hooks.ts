import { useCallback, useState } from "react";

import { Greet } from "@wailsjs/go/main/App";

import { useUserStore } from "@/stores/useUserStore";

interface RootPageHooks {
  inputName: string;
  resultText: string | undefined;
  handleGreetClick: () => void;
  handleInputChange: (newValue: string) => void;
}

const useRootPage = (): RootPageHooks => {
  /* React hooks */
  const { name, updateName } = useUserStore();
  const [resultText, setResultText] = useState<string>();

  /* Event handlers */
  const handleGreetClick = () => {
    void Greet(name).then((value) => setResultText(value));
  };
  const handleInputChange = (newValue: string) => {
    updateName(newValue);
  };

  return {
    inputName: name,
    resultText,
    handleGreetClick: useCallback(handleGreetClick, [name]),
    handleInputChange: useCallback(handleInputChange, [updateName]),
  };
};

export { type RootPageHooks, useRootPage };
