"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BreadCrumbs = () => {
  const router = useRouter();

  return (
    <div className="md:flex gap-1 hidden">
      <Link
        href="/dashboard"
        className="flex items-center justify-center hover:text-red-900 font-salt transition-all duration-100 ease-in-out font-bold text-2xl ml-3"
      >
        Folders
      </Link>
      <p className="font-salt font-bold text-2xl px-2">&gt;</p>
      <button
        onClick={() => router.back()}
        className="flex items-center justify-center hover:text-red-900 font-salt transition-all duration-100 ease-in-out font-bold text-2xl"
      >
        File
      </button>
      <p className="font-salt font-bold text-2xl px-2">&gt;</p>

      <button className="flex items-center justify-center text-red-900 gap-[4px] font-salt transition-all duration-100 ease-in-out font-bold text-2xl">
        Chat
      </button>
    </div>
  );
};

export default BreadCrumbs;
