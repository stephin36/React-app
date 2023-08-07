import React from "react";
import ReactDOM from "react-dom";

//const heading = React.createElement("h1", {id: "heading"}, "Hello World!");

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

//const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, 
               //[React.createElement("h1", {}, "This is h1 tag"), React.createElement("h2", {}, "This is h2 tag" )]));

const Heading = () => (<><h1 id="heading" className="parent">Hello World from JSX!</h1><h2>Stephin Joseph</h2></>);

const HeadComponent = () => 
    (<div id="container"> 
    <Heading />
    <h1>Welcome to React</h1>
    </div>);


root.render(<HeadComponent />);


