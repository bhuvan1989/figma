import "./Header.css";
import "./App.css";
import sliderImage from "../src/assets/images/slider.png";
import logoImage from "../src/assets/images/logo.png";
import corienderPowder from "../src/assets/images/coriender.png";
import redPowder from "../src/assets/images/redchilli.png";
import tumericPowder from "../src/assets/images/turmeric.png";

// import { searchForWorkspaceRoot } from "vite";
function Header() {
  return (
    <>
      <header className="bg-white">
        <nav className="relative">
          <div className="container flex flex-row mx-auto flex justify-between">
            <div className="basis-4/12 pl-5">
              <img
                src={logoImage}
                alt="logo"
                className="max-w-auto h-auto my-4"
              />
              <div className="basis-4/12 text-alignment">
                <h1 className="heading-text leading-none">
                  Diverse blend of culture and taste
                </h1>
                <p className="sub-text my-3">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  interdum ullamcorper sed pharetra sene.
                </p>

                <a href="#" className="explore my-5">
                  Explore More
                </a>
              </div>
            </div>
            <div className="basis-8/12 slider-Image">
              <div className="basis-12/12 flex items-center justify-end">
                <div className="basis-6/12">
                  <ul
                    id="navigation"
                    className="hidden md:flex space-x-6 lg:float-right text-white rounded-3xl px-20"
                  >
                    <li className="active">
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>

                    <li className="flex relative group">
                      <a href="#" className="mr-1">
                        Pages
                      </a>
                      <i className="fa fa-chevron-down fa-2xs self-center text-sm"></i>

                      <ul className="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                        <li className="text-sm text-black hover:bg-slate-100 leading-8">
                          <a href="#">Pages One</a>
                        </li>
                        <li className="text-sm text-black hover:bg-slate-100 leading-8">
                          <a href="#">Pages Two</a>
                        </li>
                        <li className="text-sm text-black hover:bg-slate-100 leading-8">
                          <a href="#">Pages Three</a>
                        </li>
                        <li className="text-sm text-black hover:bg-slate-100 leading-8">
                          <a href="#">Pages Four</a>
                        </li>
                        <li className="text-sm text-black hover:bg-slate-100 leading-8">
                          <a href="#">Pages Five</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                  </ul>
                </div>
                <div className="basis-3/12 relative flex justify-center">
                  <i className="fa fa-search absolute mt-1 ml-2 text-sm text-white search-icon"></i>
                  <div id="cart" className="flex items-center pl-2">
                    <i className="fa fa-shopping-cart text-white"></i>
                    <div className="w-3 h-3	rounded-full bg-white text-sm search-cart flex items-center justify-center">
                      <span className="text-xs">1</span>
                    </div>
                  </div>
                  <input
                    type="text"
                    id="search"
                    placeholder="Search"
                    className="bg-transparent border-white border rounded-3xl"
                  />
                </div>
              </div>
              <div className="basis-12/12 flex">
                <div className="basis-4/12"></div>
                <div className="basis-8/12">
                  <img src={sliderImage} />
                </div>
              </div>
            </div>
          </div>
          <div className="basis-12/12 flex absolute" style={{ right: "3%" }}>
            <div className="basis-6/12 flex"></div>
            <div className="basis-6/12 flex justify-end">
              <img src={redPowder} width={"120px"} className="pr-3" />
              <img src={tumericPowder} width={"120px"} className="pr-3" />
              <img src={corienderPowder} width={"120px"} className="pr-3" />
            </div>
          </div>
        </nav>

        <div className="clearfix"></div>
      </header>
    </>
  );
}

export default Header;
