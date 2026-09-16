const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Some dope pizza yo",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "French fries & hot dogs, wtf Italy",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "Pineapple and ham, wtf America",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "Chicken nuggies on your pizza, wtf UK",
    }),
    React.createElement(Pizza, {
      name: "Backed Potato Pizza",
      description: "Unholy potato mash, wtf Minnesota",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
