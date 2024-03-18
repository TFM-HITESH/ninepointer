"use client";
import { api } from "@/trpc/react";

import { ConversationProps } from "@/types/chat/chat-types";

function QuizConversation({
  setAiThinking,
  fileId,
  collection,
  refetchMessages,
}: ConversationProps) {
  const { mutate: createMessage } = api.chat.createMessage.useMutation({
    onSuccess: (result: string) => {},
    onSettled: () => {
      refetchMessages();
      setAiThinking(false);
    },
    onError: () => {
      alert("Error creating message");
      setAiThinking(false);
    },
  });

  const handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void = (
    event
  ) => {
    const messageText =
      "Give me one objective type question related to the previous content. Do not change the context and stay relevant to the topic. Keep track of the previous questions and make sure that you never repeat a question. I will answer them. Tell me if they are right or wrong in a detailed way with proper structuring. Make sure you explain why my answer is wrong.";
    createMessage({ fileId, collection, message: messageText as string });
    setAiThinking(true);
  };

  // const handleTriple = () => {
  //   for (let i = 0; i < 3; i++) {
  //     handleClick(event); // Assuming you have a global event object available
  //   }
  // };

  return (
    // <div className="grid md:grid-cols-2 grid-cols-1 gap-4  w-5/6 ">
    <div className="flex flex-row w-full justify-center items-center h-full">
      <button
        className=" cursor-pointer h-12 flex items-center justify-center outline outline-2 outline-blue-400 text-center outline-offset-2 rounded-lg text-xs hover:shadow-lg px-2 group transition-all duration-200 font-bold text-white   hover:text-white hover:scale-110 border-[0.15rem] hover:-translate-y-1 border-black bg-black"
        onClick={handleClick}
      >
        Ask an MCQ Question
      </button>
      {/* <div
        className="bg-gradient-to-b from-slate-100 to-slate-200 cursor-pointer h-16 flex items-center justify-center outline outline-2 outline-blue-400 text-center outline-offset-2 rounded-lg text-xs hover:shadow-lg"
        onClick={(event) => {
          const messageText =
            "Give me one subjective type question related to the previous content. Do not change the context and stay relevant to the topic. Keep track of the previous questions and make sure that you never repeat a question. The user will answer them. Tell me if they are right or wrong in a detailed way with proper structuring. Make sure you explain why a user's answer is wrong. Also grade the answers out of 5 giving proper reasoning.";
          createMessage({ fileId, collection, message: messageText as string });
          setAiThinking(true);
        }}
      >
        Start a Subjective quiz
      </div> */}
    </div>
  );
}

export default QuizConversation;
