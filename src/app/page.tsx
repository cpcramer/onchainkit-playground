import Title from "../pages/Title";
import ConnectWallet from "../pages/ConnectWallet";

export default function Home() {
  return (
    <main
      id="main-text"
      className="flex justify-center p-6 border border-white"
    >
      <div className="flex-col">
        <Title/>
        <ConnectWallet />
      </div>
    </main>
  );
}
