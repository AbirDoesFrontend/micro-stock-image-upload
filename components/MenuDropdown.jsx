import Link from "next/link";
import Button from "./Button";

const MenuDropdown = () => {
  return (
    <div className="absolute right-0 top-[78px] w-full">
      <div className="flex flex-col justify-center items-center medium-14 bg-white border border-green-50 ">
        <Link
          href="/profile"
          className="w-full flexCenter py-[8px] px-[20px] hover:bg-green-200"
        >
          Your Profile
        </Link>
        <Link
          href="/profile/collections"
          className="w-full flexCenter py-[8px] px-[20px] hover:bg-green-200"
        >
          Your Collections
        </Link>
        <Link
          href="/settings"
          className="w-full flexCenter py-[8px] px-[20px] hover:bg-green-200"
        >
          Settings
        </Link>
        <Link
          href="/"
          className="w-full flexCenter py-[8px] px-[20px] hover:bg-green-200"
        >
          Logout
        </Link>

        <Link href="/upload" className="py-[8px] px-[20px]">
          <Button type="button" title="Upload" variant="btn_green w-full" />
        </Link>
      </div>
    </div>
  );
};

export default MenuDropdown;
