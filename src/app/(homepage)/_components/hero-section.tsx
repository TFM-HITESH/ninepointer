import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import BackgroundCircle from "@/components/BackgroundCircle";
const Hero = () => {
  const { userId }: { userId: string | null } = auth();
  return (
    <>
      <div className="relative items-center justify-center flex mx-auto"></div>

      <BackgroundCircle
        radius="15%"
        position={{ top: "55%", left: "25%" }}
        color="#7F4205"
        opacity={0.3}
        blur={120}
      />
      <BackgroundCircle
        radius="20%"
        position={{ top: "70%", left: "80%" }}
        color="#824E09"
        opacity={0.8}
        blur={170}
      />
      <BackgroundCircle
        radius="20%"
        position={{ top: "15%", left: "65%" }}
        color="#824E09"
        opacity={0.6}
        blur={140}
      />
      <BackgroundCircle
        radius="20%"
        position={{ top: "70%", left: "50%" }}
        color="#824E09"
        opacity={0.5}
        blur={150}
      />
      <BackgroundCircle
        radius="10%"
        position={{ top: "70%", left: "30%" }}
        color="#a74d11"
        opacity={1}
        blur={150}
      />
      <BackgroundCircle
        radius="25%"
        position={{ top: "50%", left: "30%" }}
        color="#9F5000"
        opacity={0.4}
        blur={120}
      />
      <BackgroundCircle
        radius="45%"
        position={{ top: "0%", left: "40%" }}
        color="#a74d11"
        opacity={0.3}
        blur={150}
      />

      <div className="md:text-5xl text-3xl text-black md:text-center text-center font-semibold p-3 z-10 ">
        Relive your lectures ! <br /> Can&apos;t make it to a lecture ? Working
        on something else ? <br />{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r font-extrabold hover:scale-105 from-red-600 to-red-900">
          NinePointer
        </span>{" "}
        got you covered.
      </div>
      <div className="md:text-xl text-lg text-slate-600 md:text-center text-center font-semibold md:px-40 w-full p-4 mx-auto">
        Helping everybody achieve their dream of being a 9 Pointer.
      </div>
      {userId ? null : (
        <div className="flex gap-4 flex-col md:flex-row p-4 w-full max-w-7xl mx-auto items-center justify-center cursor-pointer">
          <Link href="/sign-in" className="w-full md:w-1/5  h-10">
            <Button className="w-full bg-gradient-to-b from-blue-500 to-blue-600  ">
              Get Started
            </Button>
          </Link>
          <Link href="/sign-up" className="w-full md:w-1/5  h-10">
            <button className="p-[3px] relative w-full h-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg" />
              <div className="px-4 py-1  bg-white rounded-[6px]  relative group transition duration-200 text-black hover:text-white hover:bg-transparent">
                Sign Up
              </div>
            </button>
          </Link>
        </div>
      )}
      {/* <div className="text-white  flex gap-2 rounded-full bg-gradient-to-b from-slate-800 to-black p-3 text-sm items-center">
        {" "}
        <CreditCard className="h-4 w-4" /> No credit card required
      </div> */}
    </>
  );
};

export default Hero;
