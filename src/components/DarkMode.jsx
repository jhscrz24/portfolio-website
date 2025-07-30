import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

function DarkMode() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    window.dispatchEvent(new Event('themeChanged'));
  };

  return (
    <div className="rounded-full bg-base-200/30 backdrop-blur-lg shadow-lg w-13 h-13 flex items-center justify-center">
        <label className="swap swap-rotate">
            <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={handleThemeChange}
            />
            <Sun className="swap-on rounded-full" />
            <Moon className="swap-off" />
        </label>
    </div>
  );
}

export default DarkMode;