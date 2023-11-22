"use client";
import Image from "next/image";
import { HeaderWrapper } from "@/style/header";

export const Header = () => (
  <HeaderWrapper>
    <h1>AubayBot</h1>
    <Image src={"/aubay.png"} width={120} height={37} alt="Aubay logo" />
  </HeaderWrapper>
);
