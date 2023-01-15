import "./App.css";
import logo from "./assets/logo.svg";
import iconMenu from "./assets/icon-menu.svg";
import imagewebmobile from "./assets/image-web-3-mobile.jpg";
import iconMenuClose from "./assets/icon-menu-close.svg";
import imagewebdesktop from "./assets/desktopimage-web-3-desktop.jpg";
import NewsCard from "./NewsBoxes/NewsCard";
import newsData from "./NewsBoxes/newsData";
import FooterData from "./FooterBoxes/FooterData";
import FooterCard from "./FooterBoxes/FooterCard";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const NewsCards = newsData.map((item) => {
    return <NewsCard {...item} />;
  });

  const footerBoxes = FooterData.map((item) => {
    return <FooterCard {...item} />;
  });

  function openScroll() {
    setSidebar(true);
    //document.getElementsByClassName('scrolled')[0].classList.add('toggle');
  }

  function closeScroll() {
    setSidebar(false);
    //document.getElementsByClassName('scrolled')[0].classList.remove('toggle');
  }

  return (
    <div className="App">
      <div
        className="scrolled"
        style={{
          display: sidebar ? "block" : "none",
          zIndex: sidebar ? "1" : "0",
          transform: sidebar
            ? "transform: translateX(0)"
            : "transform: translateX(256px)",
        }}
        width=""
        height=""
      >
        <img
          src={iconMenuClose}
          onClick={closeScroll}
          style={{ marginTop: "22px", cursor: "pointer" }}
        ></img>
        <div className="mobileNavbar">
          <a href="">Home</a>
          <a href="">New</a>
          <a href="">Populer</a>
          <a href="">Trending</a>
          <a href="">Categories</a>
        </div>
      </div>
      <header>
        <img src={logo} width="45px" height="28px" alt="logo"></img>
        <i>
          <img
            src={iconMenu}
            onClick={openScroll}
            width="40px"
            height="17px"
            style={{ cursor: "pointer" }}
          ></img>
        </i>
        <div className="navbarLinks">
          <a href="">Home</a>
          <a href="">New</a>
          <a href="">Popular</a>
          <a href="">Trending</a>
          <a href="">Categories</a>
        </div>
      </header>
      <div className="middlePart">
        <div className="Container">
          <img
            className="imgMobile"
            src={imagewebmobile}
            width="343px"
            height="300px"
          ></img>
          <img
            className="imgDesk"
            src={imagewebdesktop}
            width="343px"
            height="300px"
          ></img>
          <div className="main-paragraph">
            <h1>The Bright Future of Web 3.0?</h1>
            <div className="text-introductory">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button style={{ cursor: "pointer" }}>READ MORE</button>
            </div>
          </div>
        </div>
        <div className="news">
          <h1>News</h1>
          {NewsCards}
        </div>
      </div>
      <footer>{footerBoxes}</footer>
    </div>
  );
}

export default App;
