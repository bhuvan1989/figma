import "./App.css";
function SolutionSection() {
  return (
    <div class="container hidden">
      <div class="row">
        <div class="col-12 section-margin1 section-margin2"></div>

        <div class="col-12 bussiness-Flex">
          <div class="col-6 solution-background">
            <img src="spices.png" class="solution-image" />
          </div>
          <div class="col-1"></div>

        <div className="basis-4/12 self-center spices-pad">
          <h1 class="bussiness-head-mobile my-3">
            Get the Desired Flavour and Aroma with PlanetsEra Spices
          </h1>

            <p class="bussiness-text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <a href="#" class="common-explore">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionSection;
