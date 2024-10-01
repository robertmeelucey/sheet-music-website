import { Link } from "react-router-dom";
import Banner from "../components/Banner";

function Success() {
  return (
    <div>
      <Banner />
      <h1>Purchase Complete!</h1>
      <p>
        Check the email you used to sign up and you will receive your sheet
        music shortly :)
      </p>
      <Link to="/">
        <button>Keep Browsing</button>
      </Link>
    </div>
  );
}

export default Success;
