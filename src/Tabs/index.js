import React from "react";
import "./index.css";

const Tabs = () => {
  const [activetab, setActivetab] = React.useState("tabA");

  const handleActiveKey = (key) => {
    setActivetab(key);
  };

  return (
    <div className="tabs">
      <div className="tabNavigation">
        <button
          className={`tabButton ${activetab === "tabA" ? "activeButton" : ""}`}
          onClick={() => handleActiveKey("tabA")}
        >
          Tab A
        </button>
        <button
          className={`tabButton ${activetab === "tabB" ? "activeButton" : ""}`}
          onClick={() => handleActiveKey("tabB")}
        >
          Tab B
        </button>
        <button
          className={`tabButton ${activetab === "tabC" ? "activeButton" : ""}`}
          onClick={() => handleActiveKey("tabC")}
        >
          Tab C
        </button>
      </div>
      <div className={`tabContent ${activetab === "tabA" ? "active" : ""}`}>
        <div>TAB A : this is the content of tab 1</div>
      </div>
      <div className={`tabContent ${activetab === "tabB" ? "active" : ""}`}>
        <div>Tab B : this is the content of tab 2</div>
      </div>
      <div className={`tabContent ${activetab === "tabC" ? "active" : ""}`}>
        <div>Tab C : this is the content of tab 2</div>
      </div>
    </div>
  );
};

export default Tabs;
