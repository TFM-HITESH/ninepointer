import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/ninelogo.png" alt="NinePointer" width={60} height={60} />
      {/* <p className="ml-2 text-lg font-bold font-jakarta">NinePointer</p> */}
    </div>
  );
};

export default Logo;
