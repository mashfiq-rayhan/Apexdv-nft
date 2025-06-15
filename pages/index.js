import BuildNftMarket from "../components/BuildNftMarket/BuildNftMarket";
import BuildNftMarketPlace from "../components/BuildNftMarketPlace/BuildNftMarketPlace";
import BuildNftPlatform from "../components/BuildNftPlatform/BuildNftPlatform";
import ContactUs from "../components/ContactUsSection/ContactUs";
import CreateHighNft from "../components/CreateHighNft/CreateHighNft";
import CreateNft from "../components/CreateNft/CreateNft";
import CustomNftMarket from "../components/CustomNftMarket/CustomNftMarket";
import FAQ from "../components/FAQ/FAQ";
import HeroSec from "../components/HeroSec/HeroSec";
import IncreaseTheProfit from "../components/IncreaseTheProfit/IncreaseTheProfit";
import JawDroppingFeatures from "../components/JawDroppingFeatures/JawDroppingFeatures";
import JustLimitedNFT from "../components/JustLimitedNFT/JustLimitedNFT";
import LaunchNft from "../components/LaunchNft/LaunchNft";
import MarketplaceDev from "../components/MarketplaceDev/MarketplaceDev";
import MostReliableNFT from "../components/MostReliableNFT/MostReliableNFT";
import NFTArtCompany from "../components/NFTArtCompany/NFTArtCompany";
import NftDevCompany from "../components/NftDevCompany/NftDevCompany";
import NftMarketPlace from "../components/NftMarketPlace/NftMarketPlace";
import NFTMarketplaceCre from "../components/NFTMarketplaceCre/NFTMarketplaceCre";
import OurLocations from "../components/OurLocations/OurLocations";
// import OurPortfolio from "../components/OurPortfolio/OurPortfolio";
import Portfolios from "../components/Portfolios/Portfolios";
import TechStack from "../components/TechStack/TechStack";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";


export default function Home() {
  return (

    <div>
      <HeroSec />     
      <MarketplaceDev /> 
      <BuildNftPlatform />
      <LaunchNft />
      <NFTMarketplaceCre />
      <CreateNft />
      <NftMarketPlace />
      <BuildNftMarket />
      <JawDroppingFeatures />
      <NftDevCompany />
      <JustLimitedNFT />
      <CustomNftMarket />
      <IncreaseTheProfit />
      <CreateHighNft />      
      <NFTArtCompany />
      <NftDevCompany />
      {/* <OurPortfolio /> */}
      <Portfolios />
      <MostReliableNFT />
      <TechStack />
      <BuildNftMarketPlace />
      <WhyChooseUs />
      <FAQ />
      <ContactUs />
      <OurLocations />
    </div>
  );
}
