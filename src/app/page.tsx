import Title from "../pages/Title";
import Swap from "../pages/Swap";

export default function Home() {
  return (
    <main id="main-text" className="max-w-screen-xl mx-auto relative border border-white md:px-0 md:mb-[64px] min-h-screen">
      <header className="w-full py-4 bg-gray-800 text-white flex justify-between items-center px-6">
        <div className="text-xl font-bold">
          Base Onchain
        </div>
        <a href="#" className="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white">
          Connect Wallet
        </a>
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
