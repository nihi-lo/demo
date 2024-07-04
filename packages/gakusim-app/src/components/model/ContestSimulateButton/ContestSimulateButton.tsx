import { Button } from "@nextui-org/react";
import { TbArrowRight } from "react-icons/tb";

import { useContestSimulateButton } from "./ContestSimulateButton.hooks";
import { contestSimulateButtonVariants } from "./ContestSimulateButton.variants";

const ContestSimulateButton = (): JSX.Element => {
  const {
    state: { isLoading, variantProps },
    action: { SimulateContest },
  } = useContestSimulateButton();

  const { startContent } = contestSimulateButtonVariants(variantProps);

  return (
    <Button
      color="primary"
      isLoading={isLoading}
      onClick={SimulateContest}
      size="lg"
      startContent={<TbArrowRight className={startContent()} />}
    >
      対戦開始
    </Button>
  );
};

export { ContestSimulateButton };
