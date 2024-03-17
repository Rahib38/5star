
import "./App.css";
import Cart from "./Components/Cart";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import Recipes from "./Components/Recipes/Recipes";

function App() {
  const [items, setItems] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("item.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  // console.log(items);

  const handleToAdd = (item) => {
    setCarts([...carts, item]);

  };
  console.log(carts);
  return (
    <>
      <div>
        <Header></Header>

        <div className="flex flex-col lg:flex-row md:flex-row justify-between gap-4 mt-6">
          <Recipes handleToAdd={handleToAdd} items={items}></Recipes>
          <div>
            <div className="border bg-gray-200 rounded-xl">
              <Cart carts={carts}></Cart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
