"use client";

import { Form, InputMessageWrapper } from "@/style/inputMessage";
import { HTMLAttributes } from "react";

export const InputMessage = (props: HTMLAttributes<HTMLFormElement>) => (
  <InputMessageWrapper>
    <Form {...props}>
      <input type="text" placeholder="Write your message here." />
      <button type="submit">Send</button>
    </Form>
  </InputMessageWrapper>
);
