import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title,description, image, newUrl} = this.props;
        return (
            <div>
                <div className="card my-10" style={{width: "18rem", margin:"25px"}}>
                    <img src={image} className="card-img-top" alt="..."/>
                        <div className="card-body my-10">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newUrl} className="btn btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem