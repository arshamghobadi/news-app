import Link from 'next/link';

function Navlink({ category, isActive }) {
  return (
    <Link
      className={`navLink ${
        isActive &&
        'underline decoration-orange-400 underline-offset-4 font-bold text-lg'
      }`}
      href={`/news/${category}`}
    >
      {category}
    </Link>
  );
}

export default Navlink;
