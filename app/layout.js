import './globals.css';
import Header from './Header';
import NavLinks from './NavLinks';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className=" bg-gray-200 dark:bg-zinc-900 transition-all duration-700">
        <Header />
        <div className="max-w-6xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
