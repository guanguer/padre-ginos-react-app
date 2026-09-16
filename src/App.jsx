import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="Pepperoni"
        description="Pep, cheese, n stuff"
        image={"/public/pizzas/pepperoni.webp"}
      ></Pizza>
      <Pizza
        name="Hawaiian"
        description="Ham, pineapple, n stuff"
        image={"/public/pizzas/hawaiian.webp"}
      ></Pizza>
      <Pizza
        name="Americano"
        description="French fries, hot dogs, n stuff"
        image={"/public/pizzas/big_meat.webp"}
      ></Pizza>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
