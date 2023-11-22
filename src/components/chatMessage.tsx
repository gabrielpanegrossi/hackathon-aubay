"use client";

import {
  ChatMessageWrapper,
  UserProfilePictureWrapper,
} from "@/style/chatMessage";
import Image from "next/image";

export const ChatMessage = ({
  iteration,
}: {
  iteration: { text: string; isUser: boolean };
}) => (
  <ChatMessageWrapper type={iteration.isUser ? "user" : "system"}>
    {iteration.isUser ? (
      <UserProfilePictureWrapper>
        <Image src="/user-icon.png" alt="User icon" height={32} width={38} />
      </UserProfilePictureWrapper>
    ) : (
      <UserProfilePictureWrapper>
        <Image src="/small-logo.png" alt="aubay logo" height={32} width={38} />
      </UserProfilePictureWrapper>
    )}

    <div>
      <h2>{iteration.isUser ? "User" : "AubayBot"}</h2>
      <p>{iteration.text}</p>
    </div>
  </ChatMessageWrapper>
);
