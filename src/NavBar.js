import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="News-App/">OnlineTimes</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="News-App/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="News-App/business">Business</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="News-App/entertainment">Entertainment</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="News-App/health">Health</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="News-App/science">Science</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="News-App/sports">Sports</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="News-App/technology">Technology</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
