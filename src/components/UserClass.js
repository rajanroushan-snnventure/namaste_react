import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count:0,
        };
    }
    render() {
        return (<div className="user-card">
            <h3>{this.state.count}</h3>
            <button onClick={()=>{
                this.setState({count : this.state.count+1});
            }}>Count Increase</button>
            <h1>{this.props.name}</h1>
            <h2>Bangalore</h2>
        </div>);
    }
}
export default UserClass;