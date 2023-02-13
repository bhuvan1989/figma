import "./App.css";
import "./MediaQuery.css";
import Header from "./Header/Header";
import SectionMain from "./SectionMain";
import SolutionSection from "./SolutionSection";
import MasalaGrid from "./MasalaGrid/MasalaGrid";
import ExperienceSection from "./experience/ExperienceSection";
import FoodyProduct from "./Foody/FoodySection";
import TechnologySection from "./Technology/TechnologySection";
import { MasalaGridData } from "./MasalaGrid/MasalaGridData";

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
      {/* <MasalaGridData /> */}
    </>
  );
}

export default App;
