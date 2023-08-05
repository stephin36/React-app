const heading = React.createElement("h1", {id: "heading"}, "Hello World!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, 
               [React.createElement("h1", {}, "This is h1 tag"), React.createElement("h2", {}, "This is h2 tag" )]));

root.render(parent);


