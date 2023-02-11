import Link from 'next/link';

import { HiBars3 } from 'react-icons/hi2';
function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <HiBars3 className=" h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h3 className="font-serif text-4xl text-center">
            Daily{' '}
            <span className="underline decoration-6 decoration-orange-400">
              Nicki
            </span>{' '}
            news
          </h3>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* {darkmode butoon} */}

          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 rounded-full dark:bg-slate-800">
            subscribe Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
