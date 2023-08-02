import React, { Component } from 'react'

export class loading extends Component {
    render() {
        return (
            <div>
                <div className="spinner-border container" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default loading