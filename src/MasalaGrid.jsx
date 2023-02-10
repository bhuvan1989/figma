import "./App.css";
import bg1 from ".././src/assets/images/img-1.png";
import bg2 from ".././src/assets/images/img-2.png";
import bg5 from ".././src/assets/images/img-5.png";
import bg4 from ".././src/assets/images/img-4.png";
import bg8 from ".././src/assets/images/img-8.png";
import bg6 from ".././src/assets/images/img-6.png";
import masalaBackground from ".././src/assets/images/masalabg.png";

function MasalaGrid() {
  return (
    <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
      <div className="basis-12/12">
        <h2 className="text-center my-5 bussiness-head">
          Perfect spicy twist for every occasion
        </h2>
        <p className="taste-text text-center text-md font-normal mb-3">
          PlanetsEra has an extensive range of spices to make your day - amazing
          and extraordinary.
        </p>
      </div>
      <div className="relative">
        <div className="basis-12/12 flex mt-10">
          <div className="basis-3/12 flex h-80">
            <div className="w-full p-1 md:p-2 relative flex justify-center">
              <div className=" flex justify-center items-end absolute h-3/6 gra-box">
                <h3 className="mb-4 text-white">Black Pepper Powder</h3>
              </div>
              <img src={bg1} className="absolute gra-img" />
            </div>
          </div>

          <div className="basis-3/12 flex">
            <div className="w-full p-1 md:p-2 relative flex justify-center">
              <div className=" flex justify-center items-end absolute h-3/6 gra-box-1">
                <h3 className="mb-4 text-white">Jaljeera Masala</h3>
              </div>
              <img src={bg2} className="absolute gra-img" />
            </div>
          </div>
          <div className="basis-3/12 flex">
            <div className="w-full p-1 md:p-2 relative flex justify-center">
              <div className=" flex justify-center items-end absolute h-3/6 gra-box-2">
                <h3 className="mb-4 text-white">Garam Masala</h3>
              </div>
              <img src={bg5} className="absolute gra-img" />
            </div>
          </div>
          <div className="basis-3/12 flex">
            <div class="w-full p-1 md:p-2 relative flex justify-center">
              <div className=" flex justify-center items-end absolute h-3/6 gra-box-4">
                <h3 className="mb-4 text-white">Cumin Powder</h3>
              </div>
              <img src={bg4} className="absolute gra-img" />
            </div>
          </div>
        </div>

        <div className="basis-12/12 flex mt-40 mb-10">
          <div className="basis-3/12 flex h-80">
            <div className="w-full p-1 md:p-2 relative flex justify-center">
              <div className=" flex justify-center items-end absolute h-3/6 gra-box-8">
                <h3 className="mb-4 text-white">Aamchur Powder</h3>
              </div>
              <img src={bg8} className="absolute gra-img" />
            </div>
          </div>

          <div className="basis-3/12 flex">
            <div className="w-full p-1 md:p-2 relative flex justify-center">
              <div className=" flex justify-center items-end absolute h-3/6 gra-box-6">
                <h3 className="mb-4 text-white">Jaljeera Masala</h3>
              </div>
              <img src={bg6} className="absolute gra-img" />
            </div>
          </div>
          <div className="basis-3/12 flex">
            <div className="w-full p-1 md:p-2 relative flex justify-center">
              <div className=" flex justify-center items-end absolute h-3/6 gra-box-2">
                <h3 className="mb-4 text-white">Jaljeera Masala</h3>
              </div>
              <img src={bg5} className="absolute gra-img" />
            </div>
          </div>
          <div className="basis-3/12 flex">
            <div class="w-full p-1 md:p-2 relative flex justify-center">
              <div className=" flex justify-center items-end absolute h-3/6 gra-box-8">
                <h3 className="mb-4 text-white">Aamchur Powder</h3>
              </div>
              <img src={bg8} className="absolute gra-img" />
            </div>
          </div>
        </div>
        <img src={masalaBackground} className="masala-background" />
      </div>
      <div className="basis-12/12 flex">
        <div className="basis-5/12"></div>
        <div className="basis-3/12 flex justify-center items-center">
          <a
            href="#"
            className="masala-button mx-auto flex justify-center items-center"
          >
            See All
          </a>
        </div>
        <div className="basis-4/12"></div>
      </div>
    </div>
  );
}
export default MasalaGrid;
