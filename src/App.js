import React from "react";
import pizzaData from "./Data/PizzaData";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import "./index.css"

const App = () => {
  const pizzas = pizzaData

  const NunberOfPizzas = pizzas.length
  return (
    <main className="menu">
      <Header />
      <ul className="pizzas">
        {NunberOfPizzas > 0 ? pizzas.map((pizza) => <Menu pizza={pizza} />) : <h1>no pizzas available</h1>}
      </ul>
      <Footer />
    </main>
  )
}

export default App