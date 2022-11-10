import { shortenAddress } from "../utils/shortenAddress";

const Connectbtn = ({ connectWallet, CurrentAccount, setCurrentAccount }) => {
  return (
    <button
      href="/"
      onClick={connectWallet}
      className="p-3 px-6 pt-2 text-white bg-darkBlue rounded-full baseline hover:bg-darkGrayishBlue"
    >
      {CurrentAccount != "" ? `${shortenAddress(CurrentAccount)}` : "Connect"}
    </button>
  );
};
export default Connectbtn;
