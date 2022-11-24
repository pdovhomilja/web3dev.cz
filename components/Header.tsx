import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link className="font-bold text-lg text-white bg-black p-3" href="/">
          WEB3DEV
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>O nás</h3>
          <h3>Kontakt</h3>
          <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <h3 className="">Sign In</h3>
        <h3 className="border px-4 rounded-full border-green-600">
          Get Started
        </h3>
      </div>
    </header>
  );
}

export default Header;
