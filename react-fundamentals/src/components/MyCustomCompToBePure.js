/**
 * Making Component class a PureComponent using custom implementation with shouldComponentUpdate
 */
import React from "react";

class MyCustomCompToBePure extends React.Component {
    state = {location: "hyd", count: 0};

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.location !== nextState.location 
            || this.state.count === 5;
    }

    render() {
        console.log("I am re-rendering");
        return (
            <div>
                <p>{this.state.location}</p>
                {this.state.count >= 5 ? <p>Count &gt;= 5 </p> : null}
                <button onClick={() => this.setState({count: this.state.count+1})}>Increase count</button>
                <button onClick={() => this.setState({location: "hyd"})}>hyd</button>
                <button onClick={() => this.setState({location: "blr"})}>blr</button>
            </div>
        );
    }
}

export default MyCustomCompToBePure;