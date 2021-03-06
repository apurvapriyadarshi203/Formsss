import React, { Component } from 'react'

export class Count1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={this.increment}>Count</button>
            </div>
        )
    }
}

export default Count1
