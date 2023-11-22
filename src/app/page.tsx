"use client";

import { Chat } from "@/components/chat";
import { InputMessage } from "@/components/inputMessage";
import { mock } from "@/util/mockBackEndFunction";
import { FormEvent, useEffect, useState } from "react";

type iteration = { text: string; isUser: boolean };

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [lastAnswer, setLastAnswer] = useState("");
  const [iterations, setIterations] = useState<iteration[]>([
    { text: "Hello Aubilous, how can I help you?", isUser: false },
  ]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const firstChild = formElement?.firstChild as HTMLInputElement;
    const value = firstChild.value;

    if (!value || isLoading) return;
    firstChild.value = "";
    setIterations((prev) => {
      return [...prev, { text: value, isUser: true }];
    });
    setIsLoading(true);
    new Promise<string>((resolve) => {
      setTimeout(() => resolve(mock(value)), 1000);
    }).then((data) => {
      setLastAnswer(data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (!isLoading && lastAnswer) {
      setIterations((prev) => {
        return [...prev, { text: lastAnswer, isUser: false }];
      });
      setLastAnswer("");
    }
  }, [isLoading, lastAnswer]);

  return (
    <main style={{ height: "100%" }}>
      <Chat iterations={iterations} isLoading={isLoading}></Chat>
      <InputMessage onSubmit={(e) => handleSubmit(e)} />
    </main>
  );
}
