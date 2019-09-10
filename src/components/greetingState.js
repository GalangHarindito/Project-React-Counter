import React from "react";

class GreetingState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle:false
    };
  }

  changeName = () => {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  render() {
    return (
    <div onClick={this.changeName}>
        Hallo dari {this.state.toggle ? "Halo lang" : "It's false"}
    </div>
    )
  }
}
export default GreetingState;
