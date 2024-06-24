import { useCallback, useState } from "react";

import { Greet } from "@wailsjs/go/homeapp/App";

import { useUserStore } from "@sub-app/home-app/stores/useUserStore";

interface TopPageHooks {
  inputName: string;
  resultText: string | undefined;

  handleGreetClick: () => void;
  handleInputChange: (newValue: string) => void;
}

const useTopPage = (): TopPageHooks => {
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

export { type TopPageHooks, useTopPage };
