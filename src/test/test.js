import React, { Component } from 'react'

export default class Test extends Component {
    state={
        name:""
    }
    render() {
        return (
            <div>
                {
                    this.props.data.map(item => (
                        <p key={item}>{item}</p>
                    ))
                }

                <div>
                    <input onChange={(val) => {this.setState({name:val.target.value})}} type="text" placeholder="Name" />
                    <input onClick={() => this.props.OnSubmit(this.state.name)} type="submit" />
                </div>
            </div>
        )
    }
}
