import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faEthereum } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <footer class="pt-8 pb-6">
    <div >
      <div class="flex-auto flex-wrap text-center lg:text-center">
        <div class="w-full  px-4 flex-auto">
          <h4 class="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
          <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div class="mt-6 lg:mb-0 mb-6">
            <a class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4" href='https://twitter.com/bbanft' >
            <FontAwesomeIcon icon={faTwitter} /></a><a class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" href='/'>
            <FontAwesomeIcon icon={faEthereum}/></a>
             
           
          </div>
        </div>
        
      </div>
      <hr class="my-6 border-blueGray-300"/>
      <div class="flex flex-wrap items-center md:justify-between justify-center">
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © <span id="get-current-year">2021</span><a href="/" class="text-blueGray-500 hover:text-gray-800" target="_blank"> Notus JS by</a>
            <a href="/" class="text-blueGray-500 hover:text-blueGray-800">Creative Tim</a>.
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;