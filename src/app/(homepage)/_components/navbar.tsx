import { auth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Navitems from "./navitems";
import Mobilesidebar from "./mobile-sidebar";
import Link from "next/link";
import Logo from "@/components/logo";

const Navbar = async () => {
  const { userId }: { userId: string | null } = auth();

  return (
    <nav className=" text-sm flex items-center justify-between  backdrop-blur-md  p-3 backdrop-filter bg-opacity-90 bg-white fixed   top-0  w-full   z-20 shadow-lg  ">
      <Link href={"/"}>
        <Logo />
      </Link>

      <div className="hidden md:flex">
        <Navitems />
      </div>

      <div className=" flex gap-2">
        {userId ? (
          <Link href="/dashboard">
            <Button className="bg-gradient-to-b from-red-800 to-red-700 hover:-translate-y-[2px] transition-transform shadow-sm hover:shadow-blue-200">
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link href="/sign-in">
            <Button className="bg-gradient-to-b from-red-500 to-red-600 hover:-translate-y-[2px] transition-transform shadow-sm hover:shadow-blue-200">
              Login
            </Button>
          </Link>
        )}
        <Mobilesidebar />
      </div>
    </nav>
  );
};

export default Navbar;
