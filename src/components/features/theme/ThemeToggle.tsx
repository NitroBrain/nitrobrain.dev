import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import Button from "../../ui/Button";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial = saved ? saved === "dark" : systemDark;

    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  const toggleTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);

    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <Button onClick={toggleTheme} ariaLabel="Toggle theme">
      {dark ? <CiLight size={18} /> : <CiDark size={18} />}
    </Button>
  );
}
