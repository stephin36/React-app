import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor() {
        super();
        console.log("Parent constructor called");
    }
    componentDidMount() {
        console.log("Parent componentDidMount() called");
    }
    render() {
        console.log("Parent render called");
        return(
            <div>
                <h1>About</h1>
                <h2>This is About page</h2>
                <UserClass name={"Stephin"} location={"Kottayam"} />
            </div>
        );
    };
}

export default About;