import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MeetTheCreator = () => {
  return (
    <div
      className="mt-20 h-full  w-full flex flex-col items-center justify-center p-2 max-w-7xl "
      id="teams"
    >
      <div className="md:text-4xl text-3xl font-semibold">
        Meet the Creators
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-10 md:w-4/5 w-full items-center justify-center  h-72 ">
        <CreatorCard
          name="Tharun Ravuru"
          role="Left Stack Developer"
          linkedln="https://www.linkedin.com/in/tharun-ravuru-35889227a/"
          github="https://github.com/THARUN2939"
          imgUrl="/tharun.jpg"
        />
        <CreatorCard
          name="Hitesh Shivkumar"
          role="Middle Stack Developer"
          linkedln="https://www.linkedin.com/in/hitesh-shivkumar/"
          github="https://github.com/TFM-HITESH"
          imgUrl="/hitesh.jpg"
        />
        <CreatorCard
          name="Shreya Gupta"
          role="Right Stack Developer"
          linkedln="https://www.linkedin.com/in/shreya-gupta-158239275/"
          github="https://github.com/shreyaGupta1202"
          imgUrl="/shreya.jpg"
        />
      </div>
    </div>
  );
};

export default MeetTheCreator;

const CreatorCard = ({
  name,
  role,
  linkedln,
  github,
  imgUrl,
}: {
  name: string;
  role: string;
  linkedln: string;
  github: string;
  imgUrl: string;
}) => {
  return (
    <div className="w-full h-72 relative bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-[#d7cac1] to-[#ffffff] mx-auto transition-all duration-150 ease-in-out flex flex-col items-center  pt-10 gap-3 rounded-xl shadow-lg hover:shadow-2xl shadow-red-900/20 hover:-translate-y-1">
      <div>
        <Avatar className="h-20 w-20">
          <AvatarImage src={imgUrl} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
      </div>
      <div className="text-xl font-semibold">{name}</div>
      <div className="text-sm font-semibold">{role}</div>
      <div className="flex gap-2 absolute bottom-6">
        <Link
          href={github}
          target="_blank"
          className="bg-white rounded-xl hover:bg-[#5c5852] transition-all duration-150 ease-in-out  px-2 py-1 cursor-pointer border-2 border-gray-900 flex justify-center items-center "
        >
          <Image
            src="/icons8-github.svg"
            alt="twitter"
            height={25}
            width={25}
          />
        </Link>{" "}
        <Link
          href={linkedln}
          target="_blank"
          className="bg-white rounded-xl hover:bg-[#5c5852] transition-all duration-150 ease-in-out  px-2 py-1 cursor-pointer border-2 border-gray-900 flex justify-center items-center "
        >
          <Image src="/linkedin.svg" alt="twitter" height={25} width={25} />
        </Link>
      </div>
    </div>
  );
};
