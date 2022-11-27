import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link className="font-bold text-lg text-white bg-black p-3" href="/">
          WEB3DEV
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3>
            <Link href="/aboutus">O nás</Link>
          </h3>
          <h3>
            <Link href="/contact"> Kontakt</Link>
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
        <div className="mr-2">
          <SocialIcon
            className="grayscale opacity-50 hover:opacity-100"
            style={{ height: 30, width: 30 }}
            url="https://twitter.com/Web3devCZ"
          />
        </div>
        <div className="mr-2">
          <SocialIcon
            className="grayscale opacity-50 hover:opacity-100"
            style={{ height: 30, width: 30 }}
            url="https://www.instagram.com/web3dev.cz/"
          />
        </div>
        <div className="mr-2">
          <SocialIcon
            className="grayscale opacity-50 hover:opacity-100"
            style={{ height: 30, width: 30 }}
            url="https://www.facebook.com/profile.php?id=100088223800566"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
