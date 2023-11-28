'use client'

import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import { useSession } from "next-auth/react";

const EditProfilePage = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col my-12 max-container px-9 sm:w-[700px]">
      <h1 className="sm:bold-40 bold-32 flexCenter">Profile settings</h1>

      <div className="flex flex-col sm:flex-row sm:space-x-7 space-y-3 items-center mt-14 sm:mt-20 ">
      <Image
          src={session?.user.image}
          alt="profile"
          width={100}
          height={100}
          className="rounded-full "
        />
        <div>
          <Button
            type="button"
            title="Change Image"
            variant="btn_dark_green "
          />
        </div>
      </div>

      <div className="mt-8">
        <form className="grid sm:grid-cols-2 gap-4">
          <div>
            <p>Display Name</p>
            <input
              type="text"
              className=" border border-green-50 rounded-lg py-1 px-3 w-full "
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="text"
              className=" border border-green-50 rounded-lg py-1 px-3 w-full "
            />
          </div>
          <div>
            <p className="mb-1">Password</p>
            <Button
              type="submit"
              title="Change Password"
              variant="btn_white hover:bg-green-200 rounded-xl"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
