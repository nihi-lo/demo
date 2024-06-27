import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@nextui-org/react";

import { usePlanDropdownViewModel } from "./PlanDropdown.hooks";

const PlanDropdown = (): JSX.Element => {
  const vm = usePlanDropdownViewModel();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button size="sm" variant="bordered" className="capitalize">
          {vm.state.selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={vm.state.selectedKeys}
        onSelectionChange={vm.action.setSelectedKeys}
      >
        {vm.state.dropdownItemList.map((item: { key: string; value: string }) => (
          <DropdownItem key={item.key}>{item.value}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export { PlanDropdown };
