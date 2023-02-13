import "./App.css";
function SectionMain() {
  return (
    <div className="container mt-401 bg-no-repeat relative">
      <div className="basis-12/12 flex taste-cooking">
        <div className="basis-1/12 cooking-dis"></div>
        <div className="basis-10/12">
          <h2 className="text-center my-5">
            Revolutionized Cooking - But Authentic Rajasthani Taste!!
          </h2>
        </div>
        <div className="basis-1/12 cooking-dis"></div>
      </div>
      <div className="basis-12/12">
        <div className="basis-2/12"></div>
        <div className="basis-8/12">
          <p class="taste-text text-center text-md font-normal">
            onceptualized by a foodie Sister-Brother duo, while craving for
            Rajasthani flavors during their stint in Mumbai. Spice Platter was
            created to ensure authentic traditional flavours are made available
            at each table in the purest form, so nobody away from home has to
            trouble relatives for pure and authentic Masala! Honoring the rich
            cuisine, culture, and the ideology of their parents
          </p>
        </div>

        <div className="basis-2/12"></div>
      </div>

      <div className="basis-12/12 flex my-3 px-5">
        <div className="basis-1/12 cooking-dis"></div>
        <div className="basis-10/12">
          <img src={mOne} class="max-w-full h-auto" />
        </div>
        <div className="basis-1/12 cooking-dis"></div>
      </div>
    </div>
  );
}
export default SectionMain;
