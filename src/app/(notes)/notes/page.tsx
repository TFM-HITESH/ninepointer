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
    <div className="h-full flex flex-col md:items-center bg-[#f3f3f3] items-center w-full mx-auto text-black max-w-screen-2xl   ">
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
          title={"Java"}
          description={"Java Notes created by Hitesh"}
          createdAt={"Shreya"}
        />
        <Notes
          id={""}
          title={"OOPS"}
          description={"Java Notes created by Hitesh"}
          createdAt={"Shreya"}
        />
        <Notes
          id={""}
          title={"Python"}
          description={"Java Notes created by Hitesh"}
          createdAt={"Shreya"}
        />
        <Notes
          id={""}
          title={"Complex Math"}
          description={"Java Notes created by Hitesh"}
          createdAt={"Shreya"}
        />
        <Notes
          id={""}
          title={"DSD"}
          description={"Java Notes created by Hitesh"}
          createdAt={"Shreya"}
        />
        <Notes
          id={""}
          title={"Random"}
          description={"Java Notes created by Hitesh"}
          createdAt={"Shreya"}
        />
      </div>
    </div>
  );
};

export default Dashboard;
