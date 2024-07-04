import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@nextui-org/react";

import { usePlanDropdownViewModel } from "./PlanDropdown.hooks";

const PlanDropdown = (): JSX.Element => {
  const {
    state: { dropdownItemList, selectedKeys, selectedValue },
    action: { setSelectedKeys },
  } = usePlanDropdownViewModel();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button size="sm" variant="bordered" className="capitalize">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {dropdownItemList.map((item: { key: string; value: string }) => (
          <DropdownItem key={item.key}>{item.value}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export { PlanDropdown };
