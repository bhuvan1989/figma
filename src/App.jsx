import "./App.css";
import Header from "./Header";
import SectionMain from "./SectionMain";
import FoodyProduct from "./FoodyProduct";
import BussinessSection from "./BussinessSection";
import SolutionSection from "./SolutionSection";
import SpiceandHealth from "./Components/SpiceandHealth/SpiceandHealth";
import Spices from "./Components/Spices/Spices";
import Footer from "./Components/Footer/Footer";
import Review from "./Components/Review/Review";
import NewsandBlog from "./Components/NewsandBlog/NewsandBlog";
import HandPicked from "./Components/HandpickedSpices/HandPicked";
import Recipes from "./Components/Recipes/Recipes";
import MasalaGrid from "./MasalaGrid";
import ExperienceSection from "./ExperienceSection";

function App() {
  return (
    <>
      <Header />
      <SectionMain />
      <FoodyProduct />
      <BussinessSection />
      <SolutionSection />
      <ExperienceSection />
      <MasalaGrid />
      <Recipes />
      <HandPicked />
      <NewsandBlog />
      <Review />
      <SpiceandHealth />
      <Spices />
      <Footer />
    </>
  );
}

export default App;
