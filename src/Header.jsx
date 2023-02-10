import "./Header.css";
import "./App.css";
function Header() {
  return (
    <header className="bg-white">
      <nav className="relative">
        <div className="container flex flex-row mx-auto flex justify-between">
          <div className="basis-5/12">
            <img
              src="/logo.png"
              alt="logo"
              className="max-w-auto h-auto my-4"
            />
            <div className="basis-4/12 text-alignment">
              <h1 className="heading-text text-5xl font-bold leading-normal">
                Diverse blend <br />
                of culture and <br />
                taste
              </h1>
              <p className="sub-text my-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
                ullamcorper sed pharetra sene.
              </p>

              <a href="#" className="explore my-10">
                Explore More
              </a>
            </div>
          </div>
          <div className="basis-7/12 slider-Image">
            <ul
              id="navigation"
              className="hidden md:flex space-x-6 lg:float-right text-white rounded-3xl py-5 px-20 my-5 mx-5 border border-white"
            >
              <li>
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
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <img src="slider.png" />
          </div>

          <button id="mobile-icon" className="md:hidden">
            <i onclick="changeIcon(this)" className="fa-solid fa-bars"></i>
          </button>
        </div>

        <div className="md:hidden flex justify-center mt-3 w-full">
          <div id="mobile-menu" className="mobile-menu absolute top-23 w-full">
            <ul className="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
              <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                <a href="https://google.com" className="block pl-7">
                  Home
                </a>
              </li>
              <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                <a href="#" className="block pl-7">
                  About
                </a>
              </li>
              <li className="border-b-2 border-white hover:bg-red-400 hover:text-white">
                <a href="#" className="block pl-11">
                  Features
                  <i className="fa-solid fa-chevron-down fa-2xs pt-4"></i>
                </a>

                <ul className="bg-white text-gray-800 w-full">
                  <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                    <a className="block pl-16" href="#">
                      Test
                    </a>
                  </li>
                  <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                    <a className="block pl-16" href="#">
                      Test
                    </a>
                  </li>
                  <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                    <a className="block pl-16" href="#">
                      Test
                    </a>
                  </li>
                  <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                    <a className="block pl-16" href="#">
                      Test
                    </a>
                  </li>
                  <li className="text-sm leading-8 font-normal hover:bg-slate-200">
                    <a className="block pl-16" href="#">
                      Test
                    </a>
                  </li>
                </ul>
              </li>
              <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                <a href="#" className="block pl-7">
                  About
                </a>
              </li>
              <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                <a href="#" className="block pl-7">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="row">
        <div className="col-5 hidden">
          <div className="logo">
            <img src="/logo.png" alt="logo" className="hidden" />
          </div>
          <div className="col-4 text-alignment">
            <div className="">
              <h1 className="heading-text">
                Build your
                <br />
                audience and
                <br />
                grow your brand
              </h1>
              <p className="sub-text">
                Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
                ullamcorper sed pharetra sene.
              </p>
            </div>

            <a href="#" className="explore">
              Explore More
            </a>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </header>
  );
}

export default Header;
