"use client";

import { ChatWrapper } from "@/style/chat";
import { ChatMessage } from "./chatMessage";
import { useLayoutEffect, useRef } from "react";

export const Chat = ({
  iterations,
  isLoading,
}: {
  iterations: { text: string; isUser: boolean }[];
  isLoading: boolean;
}) => {
  const chat = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (chat && chat.current)
      chat.current.scroll({
        top: chat.current.scrollHeight,
        behavior: "smooth",
      });
  }, [iterations]);

  return (
    <ChatWrapper ref={chat}>
      {iterations.map((iteration, indice) => (
        <ChatMessage
          key={indice + "-" + iteration.text}
          iteration={iteration}
        />
      ))}
      {isLoading && (
        <ChatMessage iteration={{ text: "answering...", isUser: false }} />
      )}
    </ChatWrapper>
  );
};
