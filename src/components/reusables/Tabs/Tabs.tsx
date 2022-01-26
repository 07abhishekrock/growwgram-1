import React from "react";

import "./Tabs.css";

interface Props {
  selectedTab: number;
  list: any[];
  onTabChange: (idx: number) => void;
}

const Tabs: React.FC<Props> = ({ list, selectedTab, onTabChange }) => {
  return (
    <div className="t12Body">
      {list.map(({ Icon, name }, i) => (
        <button
          key={i}
          className={`t12Tab ${selectedTab === i && "selected"}`}
          onClick={() => onTabChange(i)}
        >
          <Icon className={`t12Icon`} /> {name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
