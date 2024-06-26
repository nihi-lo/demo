import { type Selection } from "@react-types/shared";
import { useMemo, useState } from "react";

import { type ViewModelFunc } from "@portal-core/types";

interface DropdownItem {
  key: string;
  value: string;
}

interface State {
  dropdownItemList: DropdownItem[];
  selectedKeys: Set<string>;
  selectedValue: string;
}

interface Action {
  setSelectedKeys: (keys: Selection) => void;
}

const usePlanDropdownViewModel: ViewModelFunc<State, Action> = () => {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set(["センス"]));

  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(new Set(Array.from(keys).map(String)));
  };

  return {
    state: {
      dropdownItemList: [
        { key: "センス", value: "センス" },
        { key: "ロジック", value: "ロジック" },
      ],
      selectedKeys,
      selectedValue: useMemo(
        () => Array.from(selectedKeys).join(", ").replace("_", " "),
        [selectedKeys],
      ),
    },
    action: {
      setSelectedKeys: handleSelectionChange,
    },
  };
};

export { usePlanDropdownViewModel };
