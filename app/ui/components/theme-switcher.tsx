"use client";

import { css } from "@/styled-system/css";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  const changeTheme = () => {
    return currentTheme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <button className={themeSwitcherStyle} onClick={changeTheme}>
      {currentTheme === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </button>
  );
};

const themeSwitcherStyle = css({
  rounded: "full",
  cursor: "pointer",
  color: { base: "blue.500", _dark: "blue.300" },
  zIndex: 50,
  pos: "fixed",
  bottom: "4",
  right: "4",
  shadow: "lg",
  fontSize: { base: "lg", lg: "2xl" },
  p: "2",
  shadowColor: "blue.600",
  bgColor: { base: "white", _dark: "black" },
});
