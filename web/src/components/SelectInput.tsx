import * as Select from "@radix-ui/react-select";
import { CaretDown, Check } from "phosphor-react";

interface SelectInputProps {
  placeholder?: string;
  items: any[];
  name: string;
}

export function SelectInput({
  placeholder,
  items,
  name
}:SelectInputProps)  {
  return (
    <Select.Root name={name} defaultValue="">
      <Select.Trigger
        className="bg-zinc-900 py-3 px-4 rounded text-sm flex items-center justify-between hover:bg-neutral-900 outline-none"
        aria-label=""
      >
        <Select.Value placeholder={placeholder ? placeholder : "Selecione"} />
        <Select.Icon>
          <CaretDown className="w-6 h-6 caret-zinc-400" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content className="bg-zinc-900 rounded text-sm flex items-center justify-between cursor-default w-full p-2">

        <Select.ScrollUpButton />
        <Select.Viewport className="flex w-full">
          <Select.Group className="w-full">
            {items.map((item, key) => {
              return (
                <Select.Item
                  value={item.id}
                  key={key}
                  className="select-none rounded hover:bg-violet-500 p-1 flex items-center"
                >
                  <Select.ItemText>{item.title}</Select.ItemText>
                  <Select.ItemIndicator className="left-0 w-[25px] inline-flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </Select.ItemIndicator>
                </Select.Item>
              )
            })}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton />

      </Select.Content>
    </Select.Root>
  );
};
