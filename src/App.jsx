import "./App.css";
import "./MediaQuery.css";
import Header from "./Header/Header";
import SectionMain from "./SectionMain";
import SolutionSection from "./SolutionSection";
import MasalaGrid from "./MasalaGrid";
import ExperienceSection from "./ExperienceSection";
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
    </>
  );
}

export default App;
