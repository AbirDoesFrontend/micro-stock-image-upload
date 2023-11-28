"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import Button from "./Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const Navbar = () => {
  // const {data: session} = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 shadow-sm">
      <Link href="/">
        <div className="text-[26px] font-[900]">
          <span className="text-black">Micro</span>
          <span className="text-green-50">Stock</span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex ">
          <div className="flex items-center gap-3 md:gap-5">
            <Link href="/upload">
              <Button
                type="button"
                title="Upload"
                variant="btn_green"
                icon={<FileUploadIcon />}
              />
            </Link>

            <button
              type="button"
              onClick={() => {
                setToggleDropdown(false);
                signOut();
              }}
              className="bg-green-90 px-6 py-2 text-white transition-all hover:bg-green-50 rounded-full"
            >
              sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/public/profile.jpg"
                alt="profile"
                width={37}
                height={37}
                className="rounded-full "
              />
            </Link>
          </div>
      </div>

      {/* Mobile Navigation  */}
      <div className="sm:hidden flex relative">
          <div className="flex">
            <Image
              src="/public/profile.jpg"
              alt="profile"
              width={37}
              height={37}
              className="rounded-full "
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-green-300 min-w-[210px] flex flex-col gap-2 justify-end items-end">
                <Link
                  href="/profile"
                  onClick={() => setToggleDropdown(false)}
                  className="regular-16 text-gray-800 flexCenter cursor-pointer transition-all hover:font-bold hover:text-green-50"
                >
                  My Profile
                </Link>
                <Link
                  href="/upload"
                  onClick={() => setToggleDropdown(false)}
                  className="regular-16 text-gray-800 flexCenter cursor-pointer transition-all hover:font-bold hover:text-green-50"
                >
                  Upload
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="bg-green-90 px-6 py-1 text-white transition-all hover:bg-green-50 rounded-full"
                >
                  sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="btn_green rounded-full"
                >
                  Join
                </button>
              ))}
          </>
      </div>
    </nav>
  );
};

export default Navbar;
