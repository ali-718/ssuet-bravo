import React, { Component } from 'react'

export default class State extends Component {

    state = {
        name:"",
        university:"SSUET",
    }

    Clicked = () => {
        this.setState({
            name:"Mohtashim"
        })
    }

    render() {
        return (
            <div>
                {console.log(this.state)}
                <p>{this.state.name}</p>
                <p>New feature</p>
                <p>{this.state.university}</p>
                <input onChange={(val) => {
                        this.setState({
                            name:val.target.value
                        })
                        // console.log(val.target.value)
                }} value={this.state.name} placeholder="Your Name" />
                <button onClick={this.Clicked}>change</button>
            </div>
        )
    }
}
