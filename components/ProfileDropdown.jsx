import Link from "next/link";
import React from "react";

const ProfileDropdown = () => {
  return (
    <div className="absolute top-[70px] right-[156px] ">
      <div className="arrow-up "></div>
      <div className="flex flex-col medium-14 bg-white border border-green-50">
        <Link href="/profile" className="py-[8px] px-[20px] hover:bg-green-200">
          Your Profile
        </Link>
        <Link
          href="/profile/collections"
          className=" py-[8px] px-[20px] hover:bg-green-200"
        >
          Your Collections
        </Link>
        <Link
          href="/settings"
          className=" py-[8px] px-[20px] hover:bg-green-200"
        >
          Settings
        </Link>
        <Link href="/" className=" py-[8px] px-[20px] hover:bg-green-200">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default ProfileDropdown;
