import React from "react";
import Img from "./assets/img.jpg";
import Slack from "./assets/slack.svg";
import Github from "./assets/Github.svg";
import Zuri from "./assets/Zuri.Internship_Logo.svg";
import I4G from "./assets/I4G.svg";

function App() {
  return (
    <div className="App">
      <header className="img-wrapper">
        <img id="profile__img" src={Img} alt="profile-img" />
        <h1 id="username">Franklin Ohaegbulam</h1>
      </header>
      <a id="twitter" href="" className="link">
        Twitter Link
      </a>
      <a
        id="btn__zuri"
        href="https://training.zuri.team/"
        className="link"
        title="Find books about design and coding"
      >
        Zuri Team
      </a>
      <a id="books" href="https://books.zuri.team/" className="link">
        Zuri Books
      </a>
      <a
        id="book__python"
        href="https://books.zuri.team/python-for-beginners?ref_id=frankiefab100"
        className="link"
      >
        Python Books
      </a>
      <a id="pitch" href="https://background.zuri.team/" className="link">
        Background Check for Coders
      </a>
      <a
        id="pitch"
        href="https://books.zuri.team/design-rules"
        className="link"
      >
        Design Books
      </a>

      <div className="social-icons">
        <img id="slack" src={Slack} alt="slack" />
        <img src={Github} alt="github" />
      </div>

      <div className="footer">
        <img src={Zuri} alt="zuri logo" />
        <p>HNG Internship 9 Frontend Track </p>
        <img src={I4G} alt="Ingressive4Good" />
      </div>
    </div>
  );
}

export default App;
