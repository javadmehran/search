import React, { Component } from 'react'
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/feather/eye'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
export default class extends Component {

    constructor() {
        super()
        this.state = {
            showPass: true
        }
    }
    handlePass() {
        this.setState({
            showPass: !this.state.showPass
        })
    }
    render() {
        return (
            <>
                <div>
                    <input type={this.state.showPass ? 'text' : 'password'} />
                    <span onClick={this.handlePass.bind(this)}>{<Icon size={20} icon={this.state.showPass ? eye : eyeOff} />}</span>

                </div>


            </>
        )
    }
}
