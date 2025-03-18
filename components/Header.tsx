"use client";

import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="web-view hidden md:flex gap-x-2 items-center">
          <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretLeft
              size={24}
              onClick={() => router.back()}
              className="text-white"
            />
          </button>
          <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition">
            <RxCaretRight
              size={24}
              onClick={() => router.forward()}
              className="text-white"
            />
          </button>
        </div>

        <div className="mobile-view flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex justify-center items-center hover:opacity-75 transition">
            <HiHome size={20} className="text-black" />
          </button>
          <button className="rounded-full p-2 bg-white flex justify-center items-center hover:opacity-75 transition">
            <BiSearch size={20} className="text-black" />
          </button>
        </div>

        <div className="flex justify-center items-center gap-x-4">
          <>
            <div>
                <Button className="bg-transparent text-neutral-300 font-medium" onClick={()=> {}}>Sign Up</Button>
            </div>
            <div>
                <Button className="bg-white px-6 py-2" onClick={()=> {}}>Login</Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
