import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";




export class News extends Component {


    static defaultProps = {
        country: 'in',
        pageSize: 3,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    }


    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8f9ccf1a792645a29cbcdb491fdc50ec&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let myData = await data.json()
        console.log(myData)
        this.setState({
            articles: myData.articles
        })
    }

    handleNextClick = async () => {
        console.log("Next");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8f9ccf1a792645a29cbcdb491fdc50ec&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState(
                {
                    loading: true
                }
            )
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8f9ccf1a792645a29cbcdb491fdc50ec&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState(
            {
                loading: true
            }
        )
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8f9ccf1a792645a29cbcdb491fdc50ec&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let myData = await data.json()
        console.log(myData)
        this.setState({
            articles: this.state.articles.concat(myData.articles),
            totalResults: myData.totalResults
        })
    };

    render() {
        return (
            <>
                
                {/* Lopping through JSX */}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={"Loading...."}
                >

                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return (
                                    <div className="col md-4" key={element.url}>
                                        <Newsitem title={element.title} description={element.description} image={element.urlToImage ? element.urlToImage : "https://images.wsj.net/im-564212/social"} newUrl={element.url} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News