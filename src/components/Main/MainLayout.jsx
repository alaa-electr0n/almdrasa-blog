import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import styles from "./MainLayout.module.css";
import Button from "../Button/Button";

const URL = `http://localhost:9000`;

function MainLayout() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchPosts() {
        setIsLoading(true);
        try {
          const res = await fetch(`${URL}/blogPosts`);

          const data = await res.json();
          console.log(data);
          setCards(data);
        } catch {
          throw new Error("Error loading Data from json server");
        } finally {
          setIsLoading(false);
        }
      }
      fetchPosts();
    },
    [setCards, setIsLoading]
  );

  return (
    <main className={styles.mainContent}>
      {isLoading && <Loader />}
      {!isLoading &&
        cards?.length !== 0 &&
        cards?.map((card) => <Card card={card} key={card.id} />)}
      {!isLoading && <Button type="show">Load More</Button>}
    </main>
  );
}

export default MainLayout;
