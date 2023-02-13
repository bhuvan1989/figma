import "./Header.css";

import sliderImage from "../assets/images/slider.png";
import logoImage from "../assets/images/logo.png";
import corienderPowder from "../assets/images/coriender.png";
import redPowder from "../assets/images/redchilli.png";
import tumericPowder from "../assets/images/turmeric.png";
import LogoSection from "../navigation/LogoSection";
import NavItem from "../navigation/NavItem";
import CartSection from "../navigation/CartSection";

// import { searchForWorkspaceRoot } from "vite";
function Header() {
  const toggleClick = () => {
    document.getElementById("navDropdown").style.display = "none";
  };
  return (
    <>
      <header className="bg-white">
        <nav className="relative">
          <div id="mobileNav" className="container flex w-full">
            <div className="basis-3/12 pl-3">
              <img
                src={logoImage}
                alt="logo"
                className="max-w-auto h-auto my-4"
              />
            </div>
            <div className="basis-9/12 flex justify-end pr-3">
              <i
                class="fa fa-bars self-center"
                aria-hidden="true"
                style={{ fontSize: "28px" }}
                onClick={toggleClick}
              ></i>
            </div>
          </div>
          <div id="navDropdown" className="w-full">
            <ul id="mobilenavigation">
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
              </li>
            </ul>
          </div>
          <div className="container nav-flex">
            <LogoSection />
            <div className="basis-8/12 slider-Image">
              <div className="basis-12/12 flex items-center justify-end">
                <div className="basis-6/12">
                  <NavItem />
                </div>

                <CartSection />
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
