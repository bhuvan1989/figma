import "./App.css";
function BussinessSection() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-12 section-margin1">
          <h2 class="bussiness-heading section-margin2">
            Revolutionized Cooking - BUT Authentic Rajasthani Taste!!
          </h2>
        </div>

        <div class="col-12 bussiness-Flex">
          <div class="col-4 bussiness-Item">
            <h1 class="bussiness-head">
              The newest business analytics platform
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
          <div class="col-3"></div>
          <div class="col-5 bussiness-background">
            <img src="machine.png" class="bussiness-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BussinessSection;
