import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

function DarkMode() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    window.dispatchEvent(new Event('themeChanged'));
  };

  return (
    <div className="rounded-full bg-blue-950/40 backdrop-blur-lg border border-white/20 text-white shadow-lg w-13 h-13 flex items-center justify-center">
        <label className="swap swap-rotate">
            <input
            type="checkbox"
            checked={theme === 'light'}
            onChange={handleThemeChange}
            />
            <Moon className="swap-on rounded-full" />
            <Sun className="swap-off" />
        </label>
    </div>
  );
}

export default DarkMode;