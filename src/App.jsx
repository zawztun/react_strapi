import { useState, useEffect } from "react";
import "./App.css";

import Card from "./card/Card";

function App() {
  const [items, setItems] = useState({ data: [] });

  let getToken = async () => {
    let value = await JSON.parse(sessionStorage.getItem("token"));
    return await value;
  };

  const productInfo = async () => {
    let token = await getToken();

    const res = await fetch(`http://localhost:1337/api/products?populate=*`, {
      headers: {
        Authorization: `Bearer ${token.jwt}`,
      },
    });
    const products = await res.json();

    setItems(products);
  };

  useEffect(() => {
    productInfo();
  }, []);

  return (
    <div className="hero__container">
      <h1 className="hero__header">Our Latest News</h1>
      <div className="card_list">
        {!items.data ? (
          <div>No item </div>
        ) : (
          items.data.map((item, id) => <Card item={item} key={id} />)
        )}
      </div>
    </div>
  );
}

export default App;
