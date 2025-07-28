import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

function DarkMode() {
  const [theme, setTheme] = useState('light');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Handle toggle
  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="bg-base-200 rounded-full shadow-lg w-13 h-13 flex items-center justify-center">
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
