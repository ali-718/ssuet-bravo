import React, { Component } from 'react'
import Test from './test';

export default class Main extends Component {

    state = {
        Name:[]
    }

    AddOptions = (data) => {
        this.setState({
            Name:this.state.Name.concat(data)
        })
    }

    render() {
        return (
            <div>
                {console.log(this.state)}
                <Test data={this.state.Name} OnSubmit={this.AddOptions} />
            </div>
        )
    }
}
