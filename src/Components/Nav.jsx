import Styles from "../index.module.scss";
import ReactDOM from "react-dom/client";
import ReactDOMServer from "react-dom/server";

function Link({ to, text, disable }) {
  return (
    <a
      className={disable ? Styles.nav_link_disable : Styles.nav_link}
      href={
        to ? (to.startsWith("http") ? to : process.env.PUBLIC_URL + to) : "#"
      }
    >
      {text}
    </a>
  );
}

function ToggleMenu() {
  let menu = document.getElementById("NavigationMenu");

  let menu_state = menu.attributes.state.value;
  if (menu_state === "off") {
    menu.style.display = "flex";
    menu.attributes.state.value = "on";
  }
  if (menu_state === "on") {
    menu.style.display = "none";
    menu.attributes.state.value = "off";
  }
}

let vi = {
  display: "none",
};

export default function () {
  return (
    <div>
      <div state="off" style={vi} id="NavigationMenu" className={Styles.Menu}>
        <Link to="/" text="HOME" />
        <Link to="/links" text="LINKS" />
        <Link disable="true" text="&#160;DOCS&#160;" />
        <a onClick={ToggleMenu} className={Styles.nav_link}>
          CLOSE
        </a>
      </div>
      <div className={Styles.nav}>
        <div className={Styles.nav_title}>
          <h1>K1</h1>
        </div>
        <div className={Styles.nav_icon}>
          <span className="material-symbols-outlined" onClick={ToggleMenu}>
            menu
          </span>
        </div>
      </div>
    </div>
  );
}
