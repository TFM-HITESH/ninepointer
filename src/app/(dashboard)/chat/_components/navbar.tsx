import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import BreadCrumbs from "./bread-crumbs";
import Logo from "@/components/logo";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-2 h-16 bg-[#cfcbc2] shadow-lg">
      <div className="flex flex-row justify-center items-center p-2">
        <Link href={"/"} className="px-2">
          <Logo />
        </Link>
        <BreadCrumbs />
      </div>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
