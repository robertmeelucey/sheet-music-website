import { Link } from "react-router-dom";
import Banner from "../components/Banner";

function Cancel() {
  return (
    <div>
      <Banner />
      <h1>Something went wrong :(</h1>
      <Link to="/checkout">
        <button> Try Again?</button>
      </Link>
      <Link to="/">
        <button>Back to Homepage</button>
      </Link>
    </div>
  );
}

export default Cancel;
