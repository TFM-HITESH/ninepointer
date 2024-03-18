"use client";
import Image from "next/image";
import { PuffLoader } from "react-spinners";
import { useState } from "react";
import { api } from "@/trpc/react";
import { Textarea } from "@/components/ui/textarea";
import Conversation from "./chat-conversation";
import Chats from "./chats";
import { questionProps, Message } from "@/types/chat/chat-types";
import QuizConversation from "./quiz-conversation";
const Question = ({ id, collection }: questionProps) => {
  const {
    data: messages,
    isLoading: isMessageLoading,
    refetch: refetchMessages,
  } = api.chat.getRecentChat.useQuery({
    fileId: id,
  });

  const [input, setInput] = useState<string>("");
  const [isAiThinking, setAiThinking] = useState<boolean>(false);

  const { mutate: createMessage } = api.chat.createMessage.useMutation({
    onSuccess: (result: string) => {
      refetchMessages();
    },
    onSettled: () => {
      setAiThinking(false);
    },
    onError: () => {
      alert("Error creating message");
      setAiThinking(false);
    },
  });
  const handleSendMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    const question = input;
    setInput("");
    setAiThinking(true);
    createMessage({ fileId: id, message: question, collection });
  };
  return (
    <div className="md:w-5/12 w-full flex flex-col items-center justify-center relative shadow-inner">
      <div className="flex flex-row w-full px-2 items-center justify-center shadow-inner p-2 my-auto">
        <div className="w-1/3">
          <QuizConversation
            setAiThinking={setAiThinking}
            fileId={id}
            collection={collection}
            refetchMessages={refetchMessages}
          />
        </div>

        <form className="w-full flex h-full p-2" onSubmit={handleSendMessage}>
          <Textarea
            placeholder="Ask a question about your upload"
            value={input}
            required
            onChange={(e) => setInput(e.target.value)}
            rows={0}
            maxRows={4}
            autoFocus
            className="w-full h-12 max-h-12 text-sm p-3 bg-gray-300 z-20 relative items-center text-wrap outline-none overflow-x-scroll overflow-y-hidden outline-2 outline-blue-500 outline-offset-2 focus:outline-none focus:ring focus:border-blue-500 resize-none scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch rounded-md border-none m-1"
          />

          <button
            disabled={isAiThinking}
            type="submit"
            className="ml-2 h-full rounded-md z-20 bg-gradient-to-r from-blue-500 to-blue-700 p-2 w-16  flex items-center justify-center text-white group transition-all duration-200 font-bold text-xl  hover:text-white hover:scale-110 border-[0.15rem] hover:-translate-y-1 border-black"
          >
            {isAiThinking ? <PuffLoader color="white" size={25} /> : "Ask"}
          </button>
        </form>
      </div>
      <div className="w-full flex flex-col items-center justify-center h-full ">
        {messages?.length === 0 && !isAiThinking ? (
          <>
            <div className=" w-1/3 text-xs text-center text-slate-500 flex flex-col items-center">
              <Image
                src="/message-chat-1.svg"
                alt="chat"
                width={50}
                height={50}
              />
              You can ask qustion about your uploaded lecture and your answer
              will appear here
            </div>
            <Conversation
              setAiThinking={setAiThinking}
              fileId={id}
              collection={collection}
              refetchMessages={refetchMessages}
            />
          </>
        ) : (
          <Chats
            messages={messages as unknown}
            isMessageLoading={isMessageLoading}
            isAiThinking={isAiThinking}
          />
        )}
      </div>
    </div>
  );
};

export default Question;
