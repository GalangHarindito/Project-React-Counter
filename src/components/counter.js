import React from "react";


class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
        counter : 0
        }
    }

    plusCounter = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    minusCounter = () =>{
        if(this.state.counter === 0){
        }else{
            this.setState(prevState => ({
                counter: prevState.counter - 1
            }))
        }
    }

    render(){
        return(
            <div>
                <h3>COUNTER</h3>
                <h2>{this.state.counter}</h2>
                <button onClick = {this.plusCounter}>+</button>
                <button onClick = {this.minusCounter}>-</button>
            </div>
        )
    }
}

export default Counter;