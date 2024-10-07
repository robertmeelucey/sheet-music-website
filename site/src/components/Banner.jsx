import { useNavigate } from "react-router-dom";
import styles from "./Banner.module.css";
import musicLogo from "../assets/musicbyrobert.png"; // Corrected path and usage

function Banner() {
  const navigate = useNavigate();
  return (
    <div className={styles.banner}>
      <h1 className={styles.socialItem}>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>
      </h1>
      <h1 className={styles.socialItem}>
        <a
          href="https://open.spotify.com/user/robertmeelucey?si=e41960c93feb467c"
          target="_blank"
          rel="noopener noreferrer"
        >
          spotify
        </a>
      </h1>
      <img
        src={musicLogo} // Use the imported image
        className={styles.logo}
        alt="Music Logo"
        onClick={() => navigate("/")}
      />

      <h1 className={styles.socialItem}>
        <a
          href="https://www.linkedin.com/in/robertmeelucey"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
      </h1>
      <h1 className={styles.socialItem}>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          youtube
        </a>
      </h1>
    </div>
  );
}

export default Banner;
