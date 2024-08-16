import React from "react";
import { useTheme } from "./ThemeContext";
import classNames from "classnames";
import "./toggle.css"; 

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id="theme-switch"
        className="theme-switch-input"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <label htmlFor="theme-switch" className="theme-switch-label">
        <span
          className={classNames("theme-switch-ball", {
            "theme-switch-ball-dark": theme === "dark",
          })}
        />
      </label>
    </div>
  );
};

export default ThemeToggle;
