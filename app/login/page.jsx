import Button from "@/components/Button";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

const LoginPage = () => {
  return (
    <form className="mt-24 flexCenter mx-5 sm:mx-44 ">
      <div className="bg-white w-full lg:w-[600px] rounded-lg p-5 space-y-1 shadow-xl shadow-green-200">
        <h3 className="flexCenter bold-18 text-green-50">Login</h3>
        <p>Display Name:</p>
        <input
          type="text"
          className=" border border-green-50 rounded-lg p-1 w-full "
        />
        <p>Your Email:</p>
        <input
          type="text"
          className=" border border-green-50 rounded-lg p-1 w-full "
        />
        <p>Password:</p>
        <input
          type="text"
          className=" border border-green-50 rounded-lg p-1 w-full"
        />
        <p>Confirm Password:</p>
        <input
          type="text"
          className=" border border-green-50 rounded-lg p-1 w-full"
        />
        <div className="py-1">
          <Link href="/">
            <Button
              type="submit"
              title="Login"
              variant="btn_green w-full mt-5"
              icon={<PersonIcon />}
            />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
