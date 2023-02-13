import "./App.css";
function FoodyProduct() {
  return (
    <div class="container flex my-20">
      <div class="basis-12/12 foodyBackground flex bg-cover bg-no-repeat">
        <div className="basis-5/12 p-5">
          <h3 className="foodyHeading mt-28 mb-3 text-5xl text-white font-bold">
            We Create the best foody product
          </h3>
          <p className="leading-8 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <div className="basis-8/12 flex leading-8">
            <i className="fa fa-check text-white mr-2 self-center"></i>
            <p> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          </div>

          <div className="basis-8/12 flex leading-8">
            <i className="fa fa-check text-white mr-2 self-center"></i>
            <p> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          </div>
          <div className="basis-8/12 flex leading-8">
            <i className="fa fa-check text-white mr-2 self-center"></i>
            <p> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          </div>

          <div className="basis-4/12"></div>
          <div class="clearfix"></div>
          <a
            href="#"
            className="flex bg-white text-pink-600 text-base rounded-full w-4/12 p-4 h-11 justify-center items-center my-3
            hover:bg-black hover:text-white"
          >
            Explore More
          </a>
        </div>
        <div class="col-2"></div>
        <div className="basis-5/12 self-center">
          <div className="basis-12/12">
            <img src="product-1.png" class="mx-w-full height-auto" />
          </div>
          <div className="basis-12/12 flex">
            <div className="basis-6/12">
              <img src="product-2.png" class="mx-w-full height-auto" />
            </div>
            <div className="basis-6/12">
              <img src="product-3.png" class="mx-w-full height-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FoodyProduct;
