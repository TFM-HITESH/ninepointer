"use client";
import { useEffect } from "react";
import Folder from "../_components/folder";
import { FolderSkeleton } from "../_components/folder-skeleton";
import { useUser } from "@clerk/nextjs";
import CreateFolderModal from "../_components/folderModal/create-folder-modal";
import { api } from "@/trpc/react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Folder as FolderTypes } from "@/types/folder/folder-types";
import Notes from "./_components/notes";
import BackgroundCircle from "@/components/BackgroundCircle";

const Dashboard = () => {
  const {
    data: Folders,
    isLoading: folderLoading,
    refetch: refetchFolder,
  } = api.folder.getFolders.useQuery<FolderTypes[]>();
  let count = 0;
  useEffect(() => {
    refetchFolder();
  }, [Folders, refetchFolder]);
  const user = useUser();
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("imgUrl", user?.user?.imageUrl as string);
  }
  return (
    <div className="h-full flex flex-col md:items-center bg-[#cfcbc2] items-center w-full mx-auto text-black max-w-screen-2xl   ">
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
      <div className="md:text-4xl text-3xl py-[7px] md:px-3 md:pl-10 px-2 lg:pl-32  flex justify-between w-11/12 items-center ">
        <div className="md:text-2xl font-bold text-xl font-salt mt-2">
          Notes
        </div>

        {!folderLoading ? (
          <CreateFolderModal />
        ) : (
          <Skeleton className="h-10 w-40 bg-gray-700 m-[3.7px]" />
        )}
      </div>
      <Separator className="bg-gray-700 rounded-full w-5/6 h-[3px] md:ml-[5%] my-[1%]" />

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 lg:pl-32  p-3 md:pb-10 pb-20 w-11/12 mt-3  ">
        <Notes
          id={""}
          title={"Java Theory"}
          description={"Theory Notes"}
          createdAt={"Shreya Gupta"}
          link="https://drive.google.com/file/d/1GLvZ92FMBaBiSPXIINevB5_70Rsa7r-H/view"
        />
        <Notes
          id={""}
          title={"Physics Lab"}
          description={"Lab Notes"}
          createdAt={"Shreya Gupta"}
          link="https://drive.google.com/file/d/12WEmo5aNc_mxlrpctZi1vo104sEIEM0n/view"
        />
        <Notes
          id={""}
          title={"DSA"}
          description={"DSA Notes"}
          createdAt={"Shreya Gupta"}
          link="https://drive.google.com/file/d/15nnp76TcbTsbgyIPlQFPQfYhviA3iuuk/view?usp=sharing"
        />
        <Notes
          id={""}
          title={"MPMC"}
          description={"MPMC"}
          createdAt={"Hitesh Shivkumar"}
          link="https://drive.google.com/file/d/1slcOYwXRcVju3ATJ4By9zlmtVFnTm9Q_/view?usp=sharing"
        />
        <Notes
          id={""}
          title={"Java Lab"}
          description={"Java Lab Notes"}
          createdAt={"Hitesh Shivkumar"}
          link="https://drive.google.com/file/d/1IvsW20wZdHjHHvjd_1VxLooXiIJSRCjt/view?usp=sharing"
        />
        <Notes
          id={""}
          title={"Random"}
          description={"Java Notes"}
          createdAt={"Hitesh Shivkumar"}
          link="\"
        />
      </div>
    </div>
  );
};

export default Dashboard;
