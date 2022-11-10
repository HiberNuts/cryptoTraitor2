import Herobtn from "./Herobtn";
import image from "../assets/Traitor3.png";
import Count from "./Count";
const Hero = ({ connectWallet, CurrentAccount, setCurrentAccount, noOfMint, setnoOfMint, askContractToMintNft }) => {
  return (
    // <!-- Hero Section -->
    <section id="hero">
      {/* <!-- Flex Container --> */}
      <div class="container flex flex-row items-center px-6 mx-auto mt-10 mt-40 space-y-0 md:space-y-0 md:flex-row">
        {/* <!-- Left item --> */}
        <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Bored & Better Azurians</h1>
          <p class="max-w-sm text-center  md:text-left font-bold" >You are about to mint your Azurian. Choose the quantity you want to mint then Proceed. Welcome to Azurland.</p>
          <div class="flex justify-center md:justify-start">
            <Herobtn askContractToMintNft={askContractToMintNft} />
          </div>
          <Count noOfMint={noOfMint} setnoOfMint={setnoOfMint} />
        </div>
        {/* <!-- Image --> */}
        {/* <div class="md:w-1/2">
          <img src={image} alt="img" />
        </div> */}
      </div>
    </section>
  );
};
export default Hero;

// text-darkGrayishBlue
