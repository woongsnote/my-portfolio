"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { Button } from "./ui/button";
const DarkModeToggle = () => {
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
    <Button onClick={changeTheme}>
      {currentTheme === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </Button>
  );
};

export default DarkModeToggle;
