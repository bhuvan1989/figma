import "./App.css";
import "./MediaQuery.css";
import Header from "./Header/Header";
import SectionMain from "./SectionMain";
import SolutionSection from "./SolutionSection";
import SpiceandHealth from "./Components/SpiceandHealth/SpiceandHealth";
import Spices from "./Components/Spices/Spices";
import Footer from "./Components/Footer/Footer";
import Review from "./Components/Review/Review";
import NewsandBlog from "./Components/NewsandBlog/NewsandBlog";
import HandPicked from "./Components/HandpickedSpices/HandPicked";
import Recipes from "./Components/Recipes/Recipes";
import MasalaGrid from "./MasalaGrid/MasalaGrid"
import ExperienceSection from "./experience/ExperienceSection";
import FoodyProduct from "./Foody/FoodySection";
import TechnologySection from "./Technology/TechnologySection"

function App() {
  return (
    <>
      <Header />
      <SectionMain />
      <FoodyProduct />
      <TechnologySection />
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
