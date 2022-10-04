
import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  function setColor() {
    const color = getComputedStyle(document.documentElement).getPropertyValue('--black');
    if (color === '#f0e7db') {
      document.documentElement.style.setProperty('--black', '#212123');
      document.documentElement.style.setProperty('--white', '#f0e7db');
      document.documentElement.style.setProperty('--lightBox', '#f5f1e9');
      document.documentElement.style.setProperty('--darkBox', '#303034');
    } else {
      document.documentElement.style.setProperty('--black', '#f0e7db');
      document.documentElement.style.setProperty('--white', '#212123');
      document.documentElement.style.setProperty('--lightBox', '#303034');
      document.documentElement.style.setProperty('--darkBox', '#f5f1e9');
    }
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl pinkblue">MARA</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <button type="button" className="md:float-right text-white ml-4 font-bold py-2 px-4 btn hover:border-blue-500 rounded" onClick={() => setColor()}>🌗</button>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right dark mt-2 align-middle heads ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Header;
