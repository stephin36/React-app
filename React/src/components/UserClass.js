import React from "react";

class UserClass extends React.Component {
    constructor() {
        super();
        console.log("Child constructor called");
        this.state = {
            userInfo: {
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/stephin36");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
         })
    }

    componentDidUpdate() {
        console.log("Updated...");
    };

    componentWillUnmount() {
        console.log("Unmounted..");
    }
    render() {
        console.log("Child render called");
        const {name, login, id } = this.state.userInfo;
        return(
            <div className="user-card  m-4 p-4 bg-gray-50 rounded-lg">
                <button onClick={ () => {
                }}>Counter</button>
                <h2>Name: {name}</h2>
                <h2>Location: {login}</h2>
                <h2>Contact: {id}</h2>
            </div>
        );
    };
}

export default UserClass;