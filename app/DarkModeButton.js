'use client';
import { HiMoon, HiSun } from 'react-icons/hi2';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { useState } from 'react';

function DarkModeButton() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div>
      {currentTheme === 'dark' ? (
        <HiSun
          className="h-8 w-8 cursor-pointer text-yellow-500"
          onClick={() => setTheme('light')}
        />
      ) : (
        <HiMoon
          className="h-8 w-8 cursor-pointer text-gray-900"
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  );
}

export default DarkModeButton;
