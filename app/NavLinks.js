'use client';
import { categories } from '@/components/constants';
import { usePathname } from 'next/navigation';
import Navlink from './Navlink';

function NavLinks() {
  const pathname = usePathname();
  const isActive = (path) => {
    return pathname?.split('/').pop() === path;
  };
  return (
    <nav
      className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4
    pb-10 max-w-6xl mx-auto border-b"
    >
      {categories.map((category) => (
        <Navlink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default NavLinks;
