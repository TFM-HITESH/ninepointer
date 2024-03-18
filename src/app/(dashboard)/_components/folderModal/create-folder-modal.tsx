import React, { useState } from "react";
import { api } from "@/trpc/react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Formfields {
  name: string;
  description: string;
}

function CreateFolderModal() {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const { mutate: createFolder } = api.folder.createFolder.useMutation({
    onSuccess: (result: any) => {
      toast.success("Folder created successfully");

      setOpen(false);
      const id = result?.id;
      if (id) {
        router.push(`/dashboard/folder/${id}`);
      }
    },
    onSettled: () => {
      reset();
    },
    onError: () => {
      toast.error("Error while creating folder");
      setOpen(false);
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Formfields>();
  const onSubmit: SubmitHandler<Formfields> = async (data: any) => {
    const { name, description } = data;
    await createFolder({
      folderName: name,
      folderDescription: description,
    });
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="flex items-center justify-center">
          <button className=" flex flex-row justify-center items-center bg-red-900 font-zen font-extrabold text-3xl px-3 h-12  hover:scale-110 rounded-full transition-all duration-150 ease-in-out border-b-4 border-black hover:border-white text-[#feeedd]  ">
            <PlusCircle className="h-6 w-6 m-1" />
            <p className="m-1">Create Folder</p>
          </button>
        </DialogTrigger>

        <DialogContent className=" lg:w-[30%] ">
          <DialogClose className="absolute top-3 right-4">
            <X className="h-5 w-5" />
          </DialogClose>
          <DialogHeader>
            <DialogTitle className="flex items-center justify-center gap-2">
              {" "}
              Create new folder{" "}
            </DialogTitle>
            <DialogDescription className="w-full flex flex-col   justify-center mx-auto ">
              <form
                action=""
                className="flex flex-col gap-3 mt-5 "
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>Name</div>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Name"
                  className="h-7 p-2 text-black rounded-none outline-2 outline-zinc-600 border-2 border-black"
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
                <div>Description</div>

                <input
                  {...register("description", {
                    required: "Description is required",
                  })}
                  type="text"
                  placeholder="Description"
                  className="h-7 p-2 text-black rounded-none outline-2 outline-zinc-600 border-2 border-black"
                />
                {errors.description && (
                  <div className="text-red-500">
                    {errors.description.message}
                  </div>
                )}
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
                >
                  {isSubmitting ? "Creating" : "Create"}
                </button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CreateFolderModal;
