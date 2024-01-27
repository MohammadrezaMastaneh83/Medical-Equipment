import styles from "./page.module.css";
import HomeImage from "./components/imageHome/imageHome";
import GuideCard from "./components/Guidecard/Guidecard";
import CardBox from "./components/cardBox/cardbox";
import ShowPlace from "./components/showplace/showplace";
import ShowPlace_Pic from "./components/showPlacepic/showPlace_pic";
import BestSell from "./components/bestSell/bestSell";
import Auction from "./components/Auction/Auction";
import AboutKhorshid from "./components/about khorshid/about khorshid";
import Self_Expression from "./components/self-expression/self-expression";
import Group_of_Medical_Equipment from "./components/group of Medical Equipment/group of Medical Equipment";
import App from "./components/keen slider/keenSlider";
import Landing_News from "./components/landpage news/news";
import RootLayout from "./layout";
import Header2 from "./components/header2/header2";
import AboutMe from "./components/aboutme/aboutme";
import PurchaseExpert from "./components/purchaseExport/purchase";
import Market from "./components/market/market";
import Product from "./components/market/pruduct/product";
import Slider from "./components/market/slider/slider";
import About from "./aboutme/page";
export default function Home() {
  return (
    <div className={styles.background}>
      <HomeImage />
        <GuideCard />
        <CardBox />
        <ShowPlace />
        <ShowPlace_Pic />
        <BestSell />
        <Auction />
        <AboutKhorshid />
        <Self_Expression />
        <App />
        <Group_of_Medical_Equipment />
        <Landing_News/>
    </div>
  );
}
