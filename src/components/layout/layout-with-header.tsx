import React from "react";
import { Header } from "./header";
import { AIGameBackground } from "@/components/ui/ai-game-background";

export const LayoutWithHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="font-[family-name:var(--font-exo2)] font-medium w-screen min-h-screen flex flex-col">
      <AIGameBackground>
        <main className="overflow-x-hidden container mx-auto flex-1 p-4 prevent-scroll-nesting pt-20 lg:pt-24">
          {children}
          <Header />
        </main>
        <footer className="text-sm md:text-lg flex gap-[24px] flex-wrap items-center justify-center text-zinc-600 dark:text-zinc-400 p-4">
          © 2025 Duc Tran. All rights reserved.
        </footer>
      </AIGameBackground>
    </div>
  );
};
