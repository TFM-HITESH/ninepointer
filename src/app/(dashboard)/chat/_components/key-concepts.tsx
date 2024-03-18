import { TwitterShareButton } from "react-share";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { KeyConceptProps } from "@/types/chat/chat-types";
export default function KeyConcepts({
  concepts,
}: {
  concepts: KeyConceptProps[];
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="bg-gradient-to-br from-purple-300 to-purple-400 dark:bg-purple-800  cursor-pointer relative overflow-hidden group hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ease-in-out border-2 border-black">
        <CardHeader>
          <CardTitle className="text-purple-600 dark:text-purple-300 hover:translate-x-1 transition-all duration-100 ease-in-out">
            {concepts[0].concept}
          </CardTitle>
          <CardDescription className="text-purple-600 dark:text-purple-400">
            {concepts[0].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-purple-800 dark:text-purple-200">
            {concepts[0].explanation}
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-yellow-300 to-yellow-400 dark:bg-yellow-800  cursor-pointer relative overflow-hidden group hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ease-in-out border-2 border-black">
        <CardHeader>
          <CardTitle className="text-yellow-700 dark:text-yellow-300 hover:translate-x-1 transition-all duration-100 ease-in-out">
            {concepts[1].concept}
          </CardTitle>
          <CardDescription className="text-yellow-600 dark:text-yellow-400">
            {concepts[1].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-yellow-800 dark:text-yellow-200">
            {concepts[1].explanation}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-green-300 to-green-400 dark:bg-green-800  cursor-pointer relative overflow-hidden group hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ease-in-out border-2 border-black">
        <CardHeader>
          <CardTitle className="text-green-700 dark:text-green-300 hover:translate-x-1 transition-all duration-100 ease-in-out">
            {concepts[2].concept}
          </CardTitle>
          <CardDescription className="text-green-600 dark:text-green-400">
            {concepts[2].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-green-800 dark:text-green-200">
            {concepts[2].explanation}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-blue-300 to-blue-400 dark:bg-blue-800  cursor-pointer relative overflow-hidden group hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ease-in-out border-2 border-black">
        <CardHeader>
          <CardTitle className="text-blue-700 dark:text-blue-300 hover:translate-x-1 transition-all duration-100 ease-in-out">
            {concepts[3].concept}
          </CardTitle>
          <CardDescription className="text-blue-600 dark:text-blue-400">
            {concepts[3].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-blue-800 dark:text-blue-200">
            {concepts[3].explanation}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-red-300 to-red-400 dark:bg-red-800  cursor-pointer relative overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-0.5 duration-200 ease-in-out border-2 border-black">
        <CardHeader>
          <CardTitle className="text-red-700 dark:text-red-300 hover:translate-x-1 transition-all duration-100 ease-in-out">
            {concepts[4].concept}
          </CardTitle>
          <CardDescription className="text-red-600 dark:text-red-400">
            {concepts[4].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-red-800 dark:text-red-200">
            {concepts[4].explanation}
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gradient-to-br from-pink-300 to-pink-400 dark:bg-pink-800 cursor-pointer relative overflow-hidden group hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 ease-in-out border-2 border-black">
        <CardHeader>
          <CardTitle className="text-pink-700 dark:text-pink-300 hover:translate-x-1 transition-all duration-100 ease-in-out">
            {concepts[5].concept}
          </CardTitle>
          <CardDescription className="text-pink-600 dark:text-pink-400">
            {concepts[5].header}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-pink-800 dark:text-red-200">
            {concepts[5].explanation}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
