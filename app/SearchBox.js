'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useState } from 'react';

function SearchBox() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    if (!input) return;
    router.push(`/search/${input}`);
  };
  return (
    <form
      onSubmit={handleSearch}
      className="max-w-6xl mx-auto flex justify-between items-center px-5"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search"
        type="text"
        className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400"
      />
      <button
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
      >
        SearchBox
      </button>
    </form>
  );
}

export default SearchBox;
