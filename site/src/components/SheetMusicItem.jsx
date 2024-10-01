/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./SheetMusicItem.module.css";

function SheetMusicItem({ sm }) {
  return (
    <Link
      to={`product/${sm.id}`}
      style={{ textDecorationLine: "none", width: "100%" }}
    >
      <div className={styles.box}>
        <p>{sm.title}</p>
      </div>
    </Link>
  );
}

export default SheetMusicItem;
