import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category : PropTypes.string,
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    
    async updateNews () {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=79c3ed40931c441ea28ebbd22fb3df3c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })

    }



    async componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = async () => {
        this.setState({page: this.state.page - 1});
        this.updateNews();

    }

    handleNextClick = async () => {
        this.setState({page: this.state.page + 1})
        this.updateNews();

    }


    render() {

        return (

            <div className='container my-5'>
                <h1 className='text-center'>OnlineTimes - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row my-5" style={{margin : "40px 0"}}>
                    {!this.state.loading && this.state.articles.map((element) => {
                        console.log(element);
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.length > 40 ? `${element.title.slice(0, 40)}...` : `${element.title}` : ""} description={element.description ? element.description.length > 90 ? `${element.description.slice(0, 90)}...` : `${element.description}` : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author == null ? "Unknown" : element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        )
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>

        )
    }
}

export default News
