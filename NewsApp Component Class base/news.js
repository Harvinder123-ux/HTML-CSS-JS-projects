import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types"; //use impt
import InfiniteScroll from "react-infinite-scroll-component"; //from npm website react infinte scroll component

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: "6",
    category: "general",
    totalResults: 0,
  };

  static propTypes = {
    country: PropTypes.string, //pts
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  articles = [
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];

  constructor(props) {
    super(props); //use the super becoz News is extended class - u are doing things like this you should use super in it
    console.log("hello I'm constructor form news component");
    this.state = {
      //state aap tab isttemaal karte ho jab aap chahte ho kuch change karna baar baar binar page ko reload kre
      //but aap props kabhi bhi change nhi kar sakte direactly they are just read only
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };

    document.title = `NewsNet - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  async updateNews() {
    // console.log("cdm");
    this.props.setProgress(10);
    const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let response = await fetch(URL);
    this.props.setProgress(30);
    // console.log(response);
    let parseData = await response.json();
    this.props.setProgress(70);
    console.log(parseData);

    // let resultUrl = result.url;
    // console.log(resultUrl);

    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    }); //isme main kahunga ki state ke jo articles haina usko aap set kro parse data.articles se
    // this.props.setProgress(70);
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    let response = await fetch(URL);
    let parseData = await response.json();

    // Filter out duplicate articles based on their URLs
    const uniqueArticles = parseData.articles.filter((newArticle) => {
      return !this.state.articles.some(
        (existingArticle) => existingArticle.url === newArticle.url
      );
    });

    this.setState({
      articles: this.state.articles.concat(uniqueArticles),
      totalResults: parseData.totalResults,
    });
  };


  // handlePrevClick = async () => {
  //   console.log("Previous");

  //   // console.log("cdm");
  //   let URL = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=a18075bbe416411dad56131806ba05a1&page=${
  //     this.state.page - 1
  //   }&pagesize=${this.props.pagesize}`;
  //   this.setState({ loading: true });
  //   let response = await fetch(URL);
  //   // console.log(response);
  //   let parseData = await response.json();
  //   console.log(parseData);
  //   // let resultUrl = result.url;
  //   // console.log(resultUrl);

  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parseData.articles,
  //     loading: false,
  //   });
  //   // this.setState({page : this.state.page  - 1});
  //   // this.updateNews();
  // };

  // handleNextClick = async () => {
  //   console.log("Next");
  //   //condition - jis page par hum jayenge agar woh bada ho jata hai hamare total no of pages set toh do nothing else
  //   //btw - Math-ceil meaning 1.6 = 2 large integer
  //   // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
  //   if (
  //     !(
  //       this.state.page + 1 >
  //       Math.ceil(this.state.totalResults / this.props.pagesize)
  //     )
  //   ) {
  //     console.log("cdm");
  //     let URL = `https://newsapi.org/v2/top-headlines?country=${
  //       this.props.country
  //     }&category=${
  //       this.props.category
  //     }&apiKey=a18075bbe416411dad56131806ba05a1&page=${
  //       this.state.page + 1
  //     }&pagesize=${this.props.pagesize}`;
  //     this.setState({ loading: true });

  //     let response = await fetch(URL);
  //     // console.log(response);
  //     let parseData = await response.json();
  //     console.log(parseData);
  //     // let resultUrl = result.url;
  //     // console.log(resultUrl);
  //     // this.setState({ articles: parseData.articles });

  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parseData.articles,
  //       loading: false,
  //     });

  //     // this.setState({page: this.state.page +1})
  //     // this.updateNews;
  //   }
  // };

  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsNet - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {/* agar loading true hai toh spinner ko dikhao else nahi */}
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          {" "}
          <div className="container">
            <div className="row">
              {/* agar loading true nahi hai toh saare articles ko dikhao else nahi */}
              {/* {!this.state.loading && */}
              {this.state.articles.map((elements) => {
                return (
                  // console.log(elements)
                  //   hum div return kar rahe hai toh mean unique key uso jaana chaiye naki newsItem ko
                  // <div className="col-md-4" key={elements.url}>
                  <div className="col-md-4" key={elements.url}>
                    <NewsItem
                      title={elements.title ? elements.title : ""}
                      description={
                        elements.description
                          ? elements.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={elements.urlToImage}
                      newsUrl={elements.url}
                      author={elements.author}
                      date={elements.publishedAt}
                      source={elements.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page < 1}
            type="button"
            className="btn btn-dark my-5"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            type="button"
            className="btn btn-dark my-5"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
