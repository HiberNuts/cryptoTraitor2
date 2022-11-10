const Herobtn = ({ askContractToMintNft }) => {
  return (
    <button
      onClick={askContractToMintNft}
      href="/"
      class="p-3 px-6 pt-2 text-white btn-grad rounded-full baseline "
    >
      Mint
    </button>
  );
};
export default Herobtn;
