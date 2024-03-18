"use client";
import { useState } from "react";
import { api } from "@/trpc/react";
import { BounceLoader } from "react-spinners";
import { InfoIcon, PlusCircle, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import CustomAlert from "./alert";
import { Filefields, FileUploadModalProps } from "@/types/file/file-types";

function FileUploadModal({ folderId, isFileLoading }: FileUploadModalProps) {
  const [showUploadingModal, setShowUploadingModal] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const router = useRouter();
  const { mutate: createFile } = api.file.createFile.useMutation({
    onSuccess: (result: any) => {
      setShowUploadingModal(false);
      setOpen(false);
      if (result?.code === "PAYLOAD_TOO_LARGE") {
        return setAlertOpen(true);
      }
      toast.success("File created successfully");
      const id = result?.id;
      if (id) {
        router.push(`/chat/${id}`);
      }
    },

    onError: (error) => {
      setShowUploadingModal(false);
      setOpen(false);
      toast.error("Error while creating file");
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Filefields>();
  const validateYouTubeUrl = (url: string): boolean => {
    try {
      const match = url.match(
        /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]*).*/
      );
      if (match !== null && match[1].length === 11) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  };
  const onSubmit: SubmitHandler<Filefields> = async (data: any) => {
    const { url, name } = data;

    setShowUploadingModal(true);
    await createFile({
      folderId: folderId,
      url: url,
      name: name,
    });
    reset();
  };
  return (
    <>
      {alertOpen && (
        <CustomAlert alert={alertOpen} onOpenChange={setAlertOpen} />
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="">
          {isFileLoading ? (
            <Skeleton className="h-10 w-40 bg-gray-400 m-[3.7px]" />
          ) : (
            <button className=" flex flex-row justify-center items-center bg-red-900 font-zen font-extrabold text-3xl px-3 h-12  hover:scale-110 rounded-full transition-all duration-150 ease-in-out border-b-4 border-black hover:border-white text-[#feeedd] ">
              <PlusCircle className="h-6 w-6 m-1" />{" "}
              <p className="m-1">Create File</p>
            </button>
          )}
        </DialogTrigger>

        {showUploadingModal ? (
          <DialogContent
            className="lg:w-[30%] "
            onInteractOutside={(e) => {
              e.preventDefault();
            }}
          >
            <DialogHeader>
              <p className="text-center text-4xl font-semibold text-[#000]">
                Uploading
              </p>
              <DialogDescription className="flex flex-col items-center justify-center py-10">
                <BounceLoader color="#357AF3" />
                <div className="mt-10 text-blue-800">
                  Your video is processing...
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        ) : (
          <DialogContent className="lg:w-[30%]  ">
            <DialogClose className="absolute top-2 right-4">
              <X className="h-5 w-5" />
            </DialogClose>
            <DialogHeader>
              <div className="text-center text-3xl font-semibold font-zen ">
                Create File
              </div>
              <DialogDescription>
                <form
                  action=""
                  className="flex flex-col gap-2 mt-2 "
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="font-bold text-black font-jakarta">
                    Lecture Name
                  </div>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="Name"
                    className="h-7 p-2 text-black rounded-md outline-2 outline-zinc-600 border border-gray-400"
                  />
                  {errors.name && (
                    <div className="text-red-500">{errors.name.message}</div>
                  )}
                  <div className="font-bold text-black font-jakarta">
                    YouTube URL
                  </div>

                  <input
                    {...register("url", {
                      required: "Url is required",
                      validate: validateYouTubeUrl,
                    })}
                    type="text"
                    placeholder="Url"
                    className="h-7 p-2 text-black rounded-md outline-2 outline-zinc-600 border border-gray-400"
                  />
                  {errors.url && (
                    <div className="text-red-500">{errors.url.message}</div>
                  )}
                  {errors.url && errors.url.type === "validate" && (
                    <p className="text-red-300">Invalid YouTube URL.</p>
                  )}
                  <div className="bg-red-700/40 mt-4 rounded-xl text-xs p-[2px] gap-3 text-left text-black border-[1px] flex items-center border-black">
                    <InfoIcon className="h-10 w-10" />{" "}
                    <span className="tracking-tighter">
                      {" "}
                      <span className="underline">Disclaimer</span> - Please
                      make sure that you have your faculty's permission to
                      record their lectures ! We are not responsible for any
                      action taken.{" "}
                    </span>{" "}
                  </div>
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="px-8 py-2 rounded-md  bg-yellow-500/60 border border-black hover:scale-105 hover:bg-yellow-500/90 text-black focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition-all duration-200 ease-in-out"
                  >
                    {isSubmitting ? "Creating" : "Create"}
                  </button>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}

export default FileUploadModal;
