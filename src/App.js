import './App.css';
import logo from './assets/logo.svg';
import iconMenu from './assets/icon-menu.svg';
import imagewebmobile from './assets/image-web-3-mobile.jpg';
import imagewebdesktop from './assets/desktopimage-web-3-desktop.jpg';
import NewsCard from './NewsBoxes/NewsCard';
import newsData from './NewsBoxes/NewsData';
import FooterData from './FooterBoxes/FooterData';
import FooterCard from './FooterBoxes/FooterCard';

function App() {
  const NewsCards = newsData.map((item) => {
    return <NewsCard {...item} />;
  });

  const footerBoxes = FooterData.map((item) => {
    return <FooterCard {...item} />;
  });

  return (
    <div className="App">
      <header>
        <img src={logo} width="45px" height="28px" alt="logo"></img>
        <i>
          <img src={iconMenu} width="40px" height="17px"></img>
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
              <button>READ MORE</button>
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
