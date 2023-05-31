import { ReactElement } from "react";
import htmlLogo from "../../assets/images/technologies/html-5.png";
import cssLogo from "../../assets/images/technologies/css-3.png";
import scssLogo from "../../assets/images/technologies/sass.png";
import jsLogo from "../../assets/images/technologies/js.png";
import tsLogo from "../../assets/images/technologies/typescript.png";
import reactLogo from "../../assets/images/technologies/physics.png";
import reduxLogo from "../../assets/images/technologies/fantom-redux.icon.png";
import firebaseLogo from "../../assets/images/technologies/firebase.png";
import jestLogo from "../../assets/images/technologies/Jest.png";
import routesVideo from "../../assets/videos/routes.mp4";
import realtimeSearchingVideo from "../../assets/videos/realtime-searching.mp4";
import renderingDataVideo from "../../assets/videos/rendering-data.mp4";
import streamingVideo from "../../assets/videos/streaming.mp4";
import loginVideo from "../../assets/videos/login.mp4";
import setFavoriteVideo from "../../assets/videos/set-favorite.mp4";
import commentsVideo from "../../assets/videos/comments.mp4";
import validationVideo from "../../assets/videos/validation.mp4";
import debounceVideo from "../../assets/videos/debounce.mp4";
import lazyloadingVideo from "../../assets/videos/lazyloading.mp4";
import decompositionVideo from "../../assets/videos/decomposition.mp4";
import memoizationVideo from "../../assets/videos/memoization.mp4";
import styles from "./About.module.scss";

function About(): ReactElement {
  return (
    <div className={[styles.container, "wrapperM"].join(" ")}>
      <h1>About project</h1>
      <span>
        For better experience, you should disable the ad blocker that conflicts
        with the API.
      </span>

      <span>
        The code can be seen on{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/EgorLin/anime-app"
        >
          GitHub
        </a>
        .
      </span>

      <h2>Technology stack</h2>
      <ul>
        <li>
          <img src={htmlLogo} height="16px" width="16px" alt="" /> HTML5
        </li>
        <li>
          <img height="16px" width="16px" src={cssLogo} alt="" /> CSS3
        </li>
        <li>
          <img src={scssLogo} height="16px" width="16px" alt="" /> SCSS
        </li>
        <li>
          <img src={jsLogo} height="16px" width="16px" alt="" /> JavaScript
        </li>
        <li>
          <img src={tsLogo} height="16px" width="16px" alt="" /> TypeScript
        </li>
        <li>
          <img src={reactLogo} height="16px" width="16px" alt="" /> React (React
          Hooks, React Router)
        </li>
        <li>
          <img src={reduxLogo} height="16px" width="16px" alt="" /> Redux (Redux
          Toolkit)
        </li>
        <li>
          <img src={firebaseLogo} height="16px" width="16px" alt="" /> Firebase
        </li>
        <li>
          <img src={jestLogo} height="16px" width="16px" alt="" /> Testing
          Library (JEST)
        </li>
      </ul>
      <h2>Features</h2>
      <h3>Protected routes</h3>
      <video src={routesVideo} typeof="video/mp4" autoPlay loop muted />
      <h3>Fetching and rendering data from API</h3>
      <video src={renderingDataVideo} typeof="video/mp4" autoPlay loop muted />
      <h3>Dynamic searching</h3>
      <video
        src={realtimeSearchingVideo}
        typeof="video/mp4"
        autoPlay
        loop
        muted
      />
      <h3>Video streaming</h3>
      <video src={streamingVideo} typeof="video/mp4" autoPlay loop muted />
      <h3>Log in and sign up</h3>
      <video src={loginVideo} typeof="video/mp4" autoPlay loop muted />
      <h3>Adding favorites</h3>
      <video src={setFavoriteVideo} typeof="video/mp4" autoPlay loop muted />
      <h3>Leaving comments</h3>
      <video src={commentsVideo} typeof="video/mp4" autoPlay loop muted />
      <h3>Self-written validation for inputs</h3>
      <video src={validationVideo} typeof="video/mp4" autoPlay loop muted />
      <h2>UI</h2>
      <p>
        This project doesn't use any ready UI Library, because it uses
        self-written to improve understanding of CSS/SCSS writing and separation
        of business logic and view. An example of a template that was used and
        modified for educational purposes is{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://flixtv.volkovdesign.com/main/index.html"
        >
          here
        </a>
        .
      </p>
      <h2>Optimization</h2>
      <h3>Debounce for searching inputs</h3>
      <video src={debounceVideo} typeof="video/mp4" autoPlay loop muted />
      <h3>Lazy loading for pages, data and components</h3>
      <video src={lazyloadingVideo} typeof="video/mp4" autoPlay loop muted />
      <h3>Decomposition components</h3>
      <video src={decompositionVideo} typeof="video/mp4" autoPlay loop muted />
      <h3>Memoization of arrays and functions where necessary</h3>
      <video src={memoizationVideo} typeof="video/mp4" autoPlay loop muted />
      <h2>Design pattern</h2>
      <p>
        This project does not use any design pattern, but uses decomposition,
        container components that share logic and view and state management.
      </p>
    </div>
  );
}

export default About;
