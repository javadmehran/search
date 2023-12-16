import React, { Component } from 'react'

export default class Calculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inp1: null,
            inp2: null,
            result: 0

        }
    }
    render() {
        return (
            <>
                <div className='a1'>
                    <input type='number' value={this.state.inp1} onChange={(e) => this.setState({ inp1: e.target.value })} />
                    <input type='number' value={this.state.inp2} onChange={(e) => this.setState({ inp2: e.target.value })} />
                    <br />
                    <button onClick={() => this.setState({ result: +this.state.inp1 + +this.state.inp2, inp1: '', inp2: '' })}>+</button>
                    <button onClick={() => this.setState({ result: this.state.inp1 - this.state.inp2, inp1: '', inp2: '' })}>-</button>
                    <button onClick={() => this.setState({ result: this.state.inp1 * this.state.inp2, inp1: '', inp2: '' })}>*</button>
                    <button onClick={() => this.setState({ result: this.state.inp1 / this.state.inp2, inp1: '', inp2: '' })}>/</button>
                    <h2>{this.state.result}</h2>

                </div>

            </>
        )
    }
}
