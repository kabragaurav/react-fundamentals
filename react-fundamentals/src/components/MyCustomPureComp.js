import React from "react";

class MyCustomPureComp extends React.PureComponent {
    state = {location: "hyd"};

    render() {
        console.log("I am re-rendering");
        return (
            <div>
                <p>{this.state.location}</p>
                <button onClick={() => this.setState({location: "hyd"})}>hyd</button>
                <button onClick={() => this.setState({location: "blr"})}>blr</button>
            </div>
        );
    }
}

export default MyCustomPureComp;