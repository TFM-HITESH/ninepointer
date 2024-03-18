import Link from "next/link";
import { auth } from "@clerk/nextjs";
export default function Banner() {
  const { userId } = auth();
  return (
    <div
      key="1"
      className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#6b493a] to-[#471c09] text-black py-12 px-2 flex flex-col justify-between items-center w-full mt-96 md:mt-20"
    >
      <div className="flex justify-between max-w-7xl w-full mx-auto items-center p-2 ">
        <div>
          <p className="text-sm text-white pb-2 ">Start your journey today</p>
          <h1 className="text-2xl font-bold text-white pb-4">
            Unlock the power of communication - seamlessly communicate with past
            lectures !
          </h1>
        </div>
        {userId ? (
          <Link
            href="/dashboard"
            className="bg-red-600 border-2 border-black hover:-translate-y-[2px] transition-transform shadow-sm text-white p-3 text-lg rounded-lg"
          >
            Try it out now <span>-&gt;</span>
          </Link>
        ) : (
          <Link
            href="/sign-in"
            className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500 to-red-700 hover:-translate-y-[2px] transition-transform shadow-sm text-white p-2 text-sm rounded-lg w-full md:w-[120px] items-center text-center"
          >
            Try it for free{" "}
          </Link>
        )}
      </div>
      <p className="text-center text-white w-full text-xs mt-3 bottom-0">
        NinePointer.me | Made with Love by Hitesh, Shreya, Tharun
      </p>
    </div>
  );
}
