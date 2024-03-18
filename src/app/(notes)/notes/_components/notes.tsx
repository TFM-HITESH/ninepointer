import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { toast } from "sonner";
import { File, FolderClosed, Trash2Icon } from "lucide-react";
import { format } from "date-fns";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { FolderProps } from "@/types/folder/folder-types";
import { api } from "@/trpc/react";
// import EditModal from "./folderModal/edit-modal";
const Notes = ({ id, title, description, createdAt }: FolderProps) => {
  //   const { mutate: deleteFolder } = api.folder.deleteFolder.useMutation({
  //     onSuccess: () => {
  //       toast.success("Folder Deleted successfully");
  //       window.location.reload();
  //     },

  //     onError: () => {
  //       toast.error("Error while deleting folder");
  //     },
  //   });

  const getBorderColor = () => {
    const colors = [
      "hover:border-green-600",
      "hover:border-blue-700",
      "hover:border-yellow-500",
      "hover:border-red-700",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  //   const formatDate = format(createdAt, "d MMM yyyy");
  return (
    <div
      className={` font-zen h-48 w-full bg-[#e5d6c4] hover:border-red-900  hover: rounded-xl flex flex-col items-center justify-center cursor-pointer shadow-xl hover:shadow-2xl relative  border-[1.5px] border-b-[0.3rem] hover:border-b-[0.5rem] hover:scale-105 transition-all duration-150 ease-in-out border-gray-900 mx-auto hover:-translate-y-2 `}
    >
      <Sheet>
        <SheetTrigger>
          <div className="mt-auto w-full h-full flex flex-row px-3 justify-start items-center">
            <Image
              src="/notes.svg"
              alt="notes"
              width={35}
              height={35}
              className="hover:scale-110 transition-all duration-150 ease-in-out m-3"
            />
            <div className="text-center m-3 text-4xl font-bold text-black">
              {title}
            </div>
          </div>
        </SheetTrigger>

        <SheetContent className="bg-[#efede6d7] text-black ">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-6   justify-start">
              {" "}
              <File className="h-4 w-4" />
              <p>Folder Preview</p>
            </SheetTitle>
            {/* <Separator /> */}
            <SheetDescription className="flex flex-col gap-4 relative">
              <div className=" text-lg flex flex-col items-center justify-center ">
                <div className="p-6 bg-gray-100 rounded-lg">
                  <FolderClosed className="text-red-500 h-16 w-16" />
                </div>
              </div>
              {/* <Separator /> */}
              <div className=" text-2xl leading-5 flex flex-col items-start gap-2 text-black font-semibold">
                <span>{title}</span>
                <span className="text-xs font-light text-gray-500">HEllo</span>
              </div>
              {/* <Separator /> */}
              <div className=" text-lg leading-5 flex flex-col items-start gap-2">
                <span className="font-semibold text-lg text-black">
                  {" "}
                  Folder Description{" "}
                </span>
                <span className="text-base">{description}</span>
              </div>
              <Separator />
              {/* <div className="flex justify-between mt-5 ">
                <EditModal title={title} description={description} id={id} />

                <ConfirmModal
                  onConfirm={() => {
                    deleteFolder({ folderId: id });
                  }}
                >
                  <Button variant="destructive">
                    <Trash2Icon className="h-4 w-4" />
                  </Button>
                </ConfirmModal>
              </div> */}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <div className="border-t-2 border-t-gray-600 w-5/6 bg-[#e5d6c4] flex justify-between rounded-b-md mt-3 py-3   items-center ">
        <div className="text-black flex hover:scale-105 hover:-translate-y-1 transition-all duration-150 sm:bg-[#adada7b1] md:bg-transparent hover:bg-[#adada7b1] ease-in-out p-1 rounded-lg">
          {" "}
          <span className="font-bold text-lg px-1 "> Created on :</span>{" "}
          <span className="text-lg font-bold text-gray-700 px-1">Hello</span>{" "}
        </div>
        <Link href={`/dashboard/folder/${id}`}>
          <button className="p-[3px] relative">
            {/* <div className="absolute inset-0 bg-black rounded-lg" /> */}
            <div className="px-4 py-1  bg-black rounded-[6px]  relative group transition-all duration-200 font-bold text-white text-xl  hover:text-white hover:scale-110 border-[0.15rem] hover:-translate-y-1 border-black ">
              Open
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Notes;
