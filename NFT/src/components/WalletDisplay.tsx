import toast from "react-hot-toast";
import { useActiveWallet } from "@/hooks/useActiveWallet";
import { getTruncatedAddress } from "@/utils/address";

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success("Address copied to clipboard");
};

export const WalletDisplay = () => {
  const { wallet, walletBalance } = useActiveWallet();

  console.log(`wallet`, wallet);

  return (
    wallet && (
      <div className="flex gap-4 items-center">
        <span className="text-gray-400 font-sans">
          {getTruncatedAddress(wallet.address.toB256() as string)}
        </span>
        <img
          src="/copy.svg"
          alt="copy"
          className="cursor-pointer h-5 hover:opacity-80 active:scale-[90%]"
          onClick={() => copyToClipboard(wallet.address.toB256() as string)}
        />
        <span className="text-gray-400 font-sans">
          Balance: {walletBalance?.format()} ETH
        </span>
      </div>
    )
  );
};
