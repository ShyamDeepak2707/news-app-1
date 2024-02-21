import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="news-app-1-1/">OnlineTimes</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="news-app-1/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="news-app-1/business">Business</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="news-app-1/entertainment">Entertainment</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="news-app-1/health">Health</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="news-app-1/science">Science</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="news-app-1/sports">Sports</Link></li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="news-app-1/technology">Technology</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
