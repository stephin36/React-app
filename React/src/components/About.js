import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

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
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => {
                            return(<h1 className="text-xl font-bold">{loggedInUser}</h1>);
                        }}
                    </UserContext.Consumer>
                </div>
                <h2>This is About page</h2>
                <UserClass name={"Stephin"} location={"Kottayam"} />
            </div>
        );
    };
}

export default About;