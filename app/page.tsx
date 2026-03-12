"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-6xl font-bold">Netfritz</h1>
        <p className="text-md text-muted-foreground">Métodos completos do Fritz Kroepsch com tracker de progresso!</p>
        <Button className="cursor-pointer" onClick={() => window.location.href = "/method"}>Começar agora</Button>
      </div>
    </div>
  );
}
