"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {
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
    <Button
      isIconOnly
      color="primary"
      radius="full"
      variant="shadow"
      className="z-50 fixed bottom-4 right-4"
      onClick={() => {
        changeTheme();
      }}
    >
      {currentTheme === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </Button>
  );
};

export default ThemeSwitcher;
