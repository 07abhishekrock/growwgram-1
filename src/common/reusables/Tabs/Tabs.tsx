import React from "react";

import "./tabs.css";

interface Props {
  selectedTab: number;
  list: any[];
  onTabChange: (idx: number) => void;
  disabled: boolean;
}

const Tabs: React.FC<Props> = ({
  list,
  disabled,
  selectedTab,
  onTabChange,
}) => {
  return (
    <div>
      <div className="t12Track">
        <div className={`t12Line ${selectedTab === 0 ? "left" : "right"}`} />
      </div>
      <div className="t12Body">
        {list.map(({ Icon, name }, i) => (
          <button
            key={i}
            className={`t12Tab ${selectedTab === i && !disabled && "selected"}`}
            disabled={disabled}
            onClick={() => onTabChange(i)}
          >
            <Icon className={`t12Icon`} /> {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
