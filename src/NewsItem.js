import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source,} = this.props;
        return (
            <div className='my-3 card-main' >
                <div className="card">
                <span className="position-absolute  translate-middle badge rounded-pill bg-danger" style={{left: "89%", top: "2%"}}>{source}</span>
                    <img src={!imageUrl ? "https://source.unsplash.com/200x100/?news,indianews" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_' className="btn btn-sm btn-primary">Read More... </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
