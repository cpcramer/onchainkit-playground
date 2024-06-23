'use client';
import Title from "@/components/Title"
import Swap from "@/components/Swap"
import AccountConnect from "@/components/AccountConnect";

export default function Home() {
  return (
    <main
      id="main-text"
      className="max-w-screen-xl mx-auto relative border border-white md:px-0 md:mb-[64px] min-h-screen"
    >
      <header className="w-full py-4 text-white flex justify-between items-center px-6">
        <div className="text-xl font-bold">Onchain Playground</div>
        <div>
          < AccountConnect />
        </div>
      </header>
      <div className="flex justify-center items-center p-6 border border-white min-h-[80vh]">
        <div className="flex flex-col items-center justify-center">
          <Title />
          <Swap />
        </div>
      </div>
    </main>
  );
}
