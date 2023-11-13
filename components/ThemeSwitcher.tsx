import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { css } from "@/styled-system/css";

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
    <button
      className={css({
        rounded: "full",
        cursor: "pointer",
        _hover: { color: "blue.500" },
      })}
      onClick={() => {
        changeTheme();
      }}>
      {currentTheme === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </button>
  );
};

export default ThemeSwitcher;
