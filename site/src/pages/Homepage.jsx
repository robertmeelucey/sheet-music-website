import Banner from "../components/Banner";
import { useState } from "react";
import styles from "./Homepage.module.css";
import SheetMusicItem from "../components/SheetMusicItem";
import ReleaseCountdown from "../components/ReleaseCountdown";

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const list = [
    {
      title: "Sheet Music 1 abcd",
      productId: "prod_Qo3e6TFYVUruyn",
      id: "0001",
      priceId: "price_1PwRai08IrP3t4bBLp4FvxS2",
    },
    {
      title: "Sheet Music 2 efgh",
      id: "0002",
      productId: "prod_Qo4XUe41UK4xPn",
      priceId: "price_1PwSOL08IrP3t4bBtwxavbxC",
    },
    {
      title: "Sheet Music 3 ijkl",
      id: "0003",
      productId: "prod_Qo4XhVoe2wndCO",
      priceId: "price_1PwSOr08IrP3t4bBY4WmCWL3",
    },
  ];

  const filteredList = !searchQuery
    ? list
    : list.filter((sm) => {
        return sm.title.toLowerCase().includes(searchQuery.toLowerCase());
      });

  return (
    <div>
      <Banner />
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <input
            className={styles.customInput}
            placeholder="Looking for something in particular?"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <ul className={styles.list}>
            {filteredList.map((sm, index) => (
              <li key={index} className={styles.listItem}>
                <SheetMusicItem sm={sm} />
              </li>
            ))}
          </ul>
        </div>
        <ReleaseCountdown />
      </div>
    </div>
  );
};

export default Homepage;
