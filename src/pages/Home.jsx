import React from "react";
import Styles from "../index.module.scss";

const color = {
  o: {
    color: "orange",
  },
  g: {
    color: "green",
  },
};

const bd = {
  "border-bottom-style": "solid",
  "border-bottom-width": "2px",
  "border-bottom-color": "#fff",
  "text-align": "center"
};

function Home() {
  return (
    <div>
      <div className={Styles.flex}></div>
      <div className={Styles.profile}>
        <img
          className={Styles.pp}
          src="https://gravatar.com/avatar/5f6cbd799f7780e07973a202f51d78cd?s=256"
          alt="Parezco loco XD"
        />
        <div className={Styles.pd}>
          <h3 style={bd}>
            Hola, soy <b style={color.o}>K1</b>.
          </h3>
          <p>
            Estudiante de <b style={color.g}>Ingeniería en Software</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
