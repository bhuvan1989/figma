import "./App.css";
import experience1 from "../src/assets/images/experience-1.png";
import experience2 from "../src/assets/images/experience-2.png";
import experience3 from "../src/assets/images/experience-3.png";
import experience4 from "../src/assets/images/experience-4.png";
import experience5 from "../src/assets/images/experience-5.png";
import experience6 from "../src/assets/images/experience-6.png";
import foodImage from "../src/assets/images/foodimage.png";
function ExperienceSection() {
  return (
    <div className="container flex px-5 py-2 mx-auto lg:pt-24 relative">
      <div className="basis-6/12 pl-14">
        <div className="flex flex-wrap m-1 md:-m-2">
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <img src={experience1} className="mb-2" />
            </div>
            <div className="w-1/2 self-end">
              <img src={experience2} className="mb-2" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap  m-1 md:-m-2">
          <div className="basis-4/12">
            <img src={experience3} />
          </div>
          <div className="basis-4/12">
            <img src={experience4} />
          </div>
          <div className="basis-4/12">
            <img src={experience5} />
            <img src={experience6} />
          </div>
        </div>
      </div>

      <div className="basis-5/12 self-center pr-5">
        <h1 className="experience-heading mb-3">
          Exta ordinary taste And Experienced
        </h1>
        <p class="taste-text text-md font-normal mb-10">
          Families are created by love and warmth. Your love towards our spices
          has brought us together as a family because it is said, “ A family
          that eats together, stays together.”
          <br />
          Your love and trust has made us one of the most trustworthy masala
          manufacturers and has enabled us to give years of excellence in taste.
        </p>

        <div className="experience-bg flex justify-around items-center">
          <div className="experience">
            <span>30+</span>
          </div>
          <div>
            <span className="experience-point-1">Year of</span>
            <br />
            <span className="experience-point-2">Experienced</span>
          </div>
        </div>
      </div>
      <img src={foodImage} className="experienceFood" />
    </div>
  );
}

export default ExperienceSection;
