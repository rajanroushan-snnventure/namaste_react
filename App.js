const heading = React.createElement("div", {}, [React.createElement("child1", {}, [React.createElement("h1", {},"My h1 tag"), React.createElement("h2", {},"My h2 tag")]), React.createElement("child2", {}, [React.createElement("h1", {},"My h1 tag"), React.createElement("h2", {},"My h2 tag")])]);
//const heading = React.createElement("h1", {id:"heading"}, "Hello React!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);