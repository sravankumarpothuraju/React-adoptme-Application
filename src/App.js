//your code goes here for now
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h1", {}, animal),
    React.createElement("h1", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt me !"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havenese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cocktatiel"
    }),

    React.createElement(Pet, { name: "Doink ", animal: "Cat", breed: "Mixed" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
