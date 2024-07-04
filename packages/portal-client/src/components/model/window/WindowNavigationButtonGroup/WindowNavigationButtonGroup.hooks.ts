import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { type ViewModelFunc } from "@portal-core/types";

interface State {
  backButtonIsDisabled: boolean;
  forwardButtonIsDisabled: boolean;
}

interface Action {
  handleBackPage: () => void;
  handleForwardPage: () => void;
}

const useWindowNavigationButtonGroup: ViewModelFunc<State, Action> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [canGoBackPage, setCanGoBackPage] = useState(false);
  const [canGoForwardPage, setCanGoForwardPage] = useState(false);

  useEffect(() => {
    setCanGoBackPage(location.key !== "default");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    setCanGoForwardPage(window.history.length > window.history.state.idx + 1);
  }, [location.key]);

  return {
    state: {
      backButtonIsDisabled: !canGoBackPage,
      forwardButtonIsDisabled: !canGoForwardPage,
    },
    action: {
      handleBackPage: () => navigate(-1),
      handleForwardPage: () => navigate(1),
    },
  };
};

export { useWindowNavigationButtonGroup };
