import React, { useState } from "react";
import { Button, Dropdown, Label } from "@heroui/react";
const CheckFilter = ({
  selected,
  onFilterChange,
  fieldKey,
  state,
  animals,
}) => {
  const [open, setOpen] = useState(false);
  const uniqueVal = [...new Set(animals.map((item) => item[fieldKey]))];
  console.log(uniqueVal);
  const handleChange = (item) => {
    const updated = selected.includes(item)
      ? selected.filter((x) => x !== item)
      : [...selected, item];

    onFilterChange(fieldKey, updated);
  };
  return (
    <div
      tabIndex={0}
      className={`collapse collapse-arrow bg-base-100 border-base-300 border ${open ? "collapse-open" : "collapse-close"}`}
    >
      <div
        onClick={() => setOpen(!open)}
        className="collapse-title font-semibold"
      >
        {state}
      </div>
      <div className="collapse-content flex flex-col text-sm">
        {uniqueVal.map((item) => {
          return (
            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                checked={selected.includes(item)}
                onChange={() => handleChange(item)}
                type="checkbox"
                className="checkbox checkbox-sm"
              />
              {item}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CheckFilter;
