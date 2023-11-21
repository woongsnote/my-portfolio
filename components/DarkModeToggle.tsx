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
    <Button onClick={changeTheme} className="w-10 h-10 p-2">
      {currentTheme === "dark" ? (
        <BsSunFill size={18} />
      ) : (
        <BsMoonFill size={18} />
      )}
    </Button>
  );
};

export default DarkModeToggle;
