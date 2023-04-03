import Styles from "../index.module.scss";

let { orange, green } = {
  orange: {
    color: "orange",
  },
  green: {
    color: "green",
  },
};

export default function () {
  return (
    <div>
      <div className={Styles.flex}></div>
      <div href="https://github.com/k1-1960" className={Styles.flex}>
        <img
          href="https://github.com/k1-1960"
          className={Styles.social_icon}
          src="https://i.imgur.com/x4qA62R.png"
          alt="GitHub"
        />
        <div className={Styles.social_desc}>
          <h3 href="https://github.com/k1-1960" style={green}>
            GitGub
          </h3>
          <p href="https://github.com/k1-1960">
            github.com/<a href="https://github.com/k1-1960" style={orange}>k1-1960</a>
          </p>
        </div>
      </div>
      <div className={Styles.flex}></div>
    </div>
  );
}
