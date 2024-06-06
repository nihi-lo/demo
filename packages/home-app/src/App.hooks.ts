import { useCallback, useState } from "react";

import { Greet } from "@wailsjs/go/homeapp/App";

import { useUserStore } from "@portal-app/stores/useUserStore";

interface AppHooks {
  inputName: string;
  resultText: string | undefined;
  handleGreetClick: () => void;
  handleInputChange: (newValue: string) => void;
}

const useApp = (): AppHooks => {
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

export { type AppHooks, useApp };
