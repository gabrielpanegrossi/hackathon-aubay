"use client";

import { Header } from "@/components/header";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import { TemplateWrapper } from "@/style/template";
import { Footer } from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <TemplateWrapper>
            <Header />
            {children}
            <Footer />
          </TemplateWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
