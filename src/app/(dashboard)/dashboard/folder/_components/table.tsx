import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

import Link from "next/link";
import { MessagesSquare, Trash2, YoutubeIcon } from "lucide-react";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import { FileTableProps } from "@/types/file/file-types";

const FileTable = ({ data }: FileTableProps) => {
  const { mutate: deleteFile } = api.file.deleteFile.useMutation({
    onSuccess: () => {
      toast.success("File Deleted successfully");
      window.location.reload();
    },

    onError: () => {
      toast.error("Error deleting file");
    },
  });

  const formatDate = (date: Date | string): string => {
    if (date instanceof Date) {
      return date.toLocaleDateString();
    } else {
      const parsedDate = new Date(date);
      if (!isNaN(parsedDate.getTime())) {
        return parsedDate.toLocaleDateString();
      } else {
        return "Invalid Date";
      }
    }
  };

  return (
    <div className="border-2 border-gray-400 w-full rounded-md">
      {data.length === 0 ? (
        <div className="text-center h-40 flex items-center justify-center shadow-xl bg-white rounded-md">
          👋 Welcome to NinePointer ! Create a file.
        </div>
      ) : (
        <Table className="rounded-md ">
          <TableHeader className="bg-[#efede6d7] font-zen text-2xl text-black">
            <TableRow>
              <TableHead className="w-[50%] font-bold text-gray-900">
                <p className="hover:translate-x-1 transition-all duration-100 ease-in-out">
                  File name
                </p>
              </TableHead>
              <TableHead className="font-bold text-gray-900">
                {" "}
                <p className="hover:translate-x-1 transition-all duration-100 ease-in-out">
                  Chat
                </p>{" "}
              </TableHead>
              <TableHead className="font-bold text-gray-900">
                <p className="hover:translate-x-1 transition-all duration-100 ease-in-out">
                  Created At
                </p>
              </TableHead>
              <TableHead className="font-bold text-gray-900">
                <p className="hover:translate-x-1 transition-all duration-100 ease-in-out">
                  Actions
                </p>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="bg-[#fcfbf5f0]">
            {data?.map((file) => (
              <TableRow key={file.id} className="border-t-2 border-gray-400">
                <TableCell className="flex items-center   gap-1 hover:-translate-y-0.5 transition-all duration-100 ease-in-out ">
                  <YoutubeIcon className="text-gray-700" />{" "}
                  <span>{file.name} </span>{" "}
                </TableCell>

                <TableCell className="hover:-translate-y-0.5 transition-all duration-100 ease-in-out">
                  <Link
                    href={`/chat/${file.id}`}
                    className="hover:text-blue-700 cursor-pointer transition-all duration-100 ease-in-out"
                  >
                    <MessagesSquare />
                  </Link>
                </TableCell>
                <TableCell className="hover:-translate-y-0.5 transition-all duration-100 ease-in-out">
                  {formatDate(file.createdAt)}
                </TableCell>
                <TableCell className="hover:-translate-y-0.5 transition-all duration-100 ease-in-out">
                  <ConfirmModal
                    onConfirm={() => {
                      deleteFile({ fileId: file.id });
                    }}
                  >
                    <Trash2 className="h-5 w-5 ml-2 text-red-500 hover:text-red-600 cursor-pointer" />
                  </ConfirmModal>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default FileTable;
