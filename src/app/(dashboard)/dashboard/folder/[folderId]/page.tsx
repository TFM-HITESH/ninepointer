"use client";

import { useEffect } from "react";

import { api } from "@/trpc/react";
import FileUploadModal from "../_components/file-upload-modal";
import { Separator } from "@/components/ui/separator";
import FileTable from "../_components/table";
import { FileSkeleton } from "../_components/file-skeleton";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BackgroundCircle from "@/components/BackgroundCircle";

const FolderPage = ({ params }: any) => {
  const router = useRouter();
  const {
    data: Files,
    isLoading: fileLoading,
    refetch: refetchFile,
  } = api.file.getFiles.useQuery({ folderId: params.folderId });
  useEffect(() => {
    refetchFile();
  }, [Files]);
  if (!fileLoading && !Files) {
    router.push("/404");
    return null;
  }
  return (
    <div className="h-full bg-[#cfcbc2] flex flex-col md:items-center items-center w-full mx-auto text-black max-w-screen-2xl   ">
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
      <div className="md:text-4xl text-3xl py-[7px] md:px-3 md:pl-10 px-2 lg:pl-[118px]  flex justify-between w-11/12 items-center ">
        <div className="md:text-2xl font-bold text-xl flex gap-2 ">
          <Link
            href="/dashboard"
            className=" hover:text-red-900 font-salt transition-all duration-100 ease-in-out"
          >
            Folders
          </Link>
          <p className="font-salt">&gt;</p>

          <Link
            href="#"
            className="hover:text-red-900 font-salt transition-all duration-100 ease-in-out"
          >
            Files
          </Link>
        </div>

        <FileUploadModal
          folderId={params.folderId}
          isFileLoading={fileLoading}
        />
      </div>
      {/* <Separator className="bg-gray-400 w-full" /> */}

      {fileLoading ? (
        <FileSkeleton />
      ) : (
        <div className="lg:w-5/6 w-full mt-4 p-2 lg:ml-28 ">
          <FileTable data={Files as any} />
        </div>
      )}
    </div>
  );
};

export default FolderPage;
