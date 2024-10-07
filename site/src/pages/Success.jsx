import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import styles from "./Success.module.css";

function Success() {
  return (
    <div>
      <Banner />
      <div className={styles.container}>
        <h1 className={styles.title}>Purchase Complete!</h1>
        <p className={styles.text}>
          Check the email you used to sign up and you will receive your sheet
          music shortly :)
        </p>
        <Link to="/">
          <button className={styles.backBtn}>Keep Browsing</button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
