import Countdown from "react-countdown";
import styles from "./ReleaseCountdown.module.css";
function ReleaseCountdown() {
  const date = new Date(2024, 9, 10, 13, 0, 0);
  return (
    <div className={styles.timerContainer}>
      <p className={styles.title}>release countdown...</p>
      <Countdown date={date} className={styles.countdown} />
    </div>
  );
}

export default ReleaseCountdown;
