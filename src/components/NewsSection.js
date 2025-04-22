import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export default class NewsSection extends Component {
  // articles = [
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "Paris: Paul Varry dreamed of a cycling revolution. Then an SUV crushed him",
  //     "description": "Paul Varry's death has triggered a debate in Paris over the dramatic expansion of cycle infrastructure.",
  //     "url": "https://www.bbc.co.uk/news/articles/c9deyw95xzzo",
  //     "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/5734/live/90ac5e20-f139-11ef-896e-d7e7fb1719a4.jpg",
  //     "publishedAt": "2025-02-23T20:37:21.8294125Z",
  //     "content": "Paris is navigating the challenges of its cycling revolution as European capitals are under pressure to curb transport-related carbon emissions. The EU's green deal aims to achieve a 90% reduction in… [+1150 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC Weather",
  //     "title": "UK weather: warnings issued for wind and rain",
  //     "description": "Wind and rain expected to have an impact across parts of the UK on Sunday",
  //     "url": "https://www.bbc.co.uk/weather/articles/c36w1lpnw6eo",
  //     "urlToImage": "https://ichef.bbci.co.uk/ace/branded_weather/1200/cpsprodpb/8de9/live/d696e8f0-f1df-11ef-b8a0-1f5227bb2ea7.jpg",
  //     "publishedAt": "2025-02-23T19:52:21.4238892Z",
  //     "content": "In south Wales, areas badly hit by Storm Bert in November are among those now covered by the Met Office amber weather warning for rain.\r\nWith the warning valid until 06:00 GMT on Monday, the Met Offi… [+598 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "Musk email to government workers sparks confusion across US agencies",
  //     "description": "Some departments encouraged staff to respond, while others requested employees wait for further guidance.",
  //     "url": "https://www.bbc.co.uk/news/articles/cj0qrj20g5vo",
  //     "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/6155/live/beb9abb0-f1f7-11ef-a23f-176f9b2ceec9.jpg",
  //     "publishedAt": "2025-02-23T19:22:23.5163759Z",
  //     "content": "The message sent to millions of federal employees Saturday evening came after Musk posted on his social media platform X that government staff would \"shortly receive an email requesting to understand… [+3667 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "Pope's condition 'remains critical', Vatican says",
  //     "description": "The pontiff \"continues to be alert and well oriented\" and has not had any further respiratory crises, the Vatican said.",
  //     "url": "https://www.bbc.co.uk/news/articles/cr526605r3ro",
  //     "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/43e7/live/93f2ad70-f213-11ef-861d-c9c8c10a1f63.jpg",
  //     "publishedAt": "2025-02-23T19:07:17.8765578Z",
  //     "content": "The new statement comes after the Vatican said on Saturday that the Pope had experienced a respiratory crisis and was in a \"critical\" condition.\r\nEarlier on Sunday, the Pope issued a statement asking… [+808 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "Zelensky willing to give up presidency in exchange for Ukraine Nato membership",
  //     "description": "In response to a question, the Ukrainian president said he would give up his position for peace.",
  //     "url": "https://www.bbc.co.uk/news/articles/cn9vx01evp9o",
  //     "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/49b6/live/063871b0-f207-11ef-9ca4-2169134088d8.jpg",
  //     "publishedAt": "2025-02-23T17:22:21.4632043Z",
  //     "content": "Zelensky's press conference came hours after Russia launched its largest single drone attack on Ukraine yet during the current conflict, Ukrainian officials said.\r\nOn Saturday night, Ukraine's Air Fo… [+1134 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "Prince William at lowest over Kate's cancer, says Jason Knauf",
  //     "description": "Jason Knauf says the Prince of Wales was deeply affected by the Princess of Wales's cancer diagnosis.",
  //     "url": "https://www.bbc.co.uk/news/articles/cx2gyllzj5eo",
  //     "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/45b8/live/78b8e310-f1fc-11ef-a185-593ad5b3f64d.jpg",
  //     "publishedAt": "2025-02-23T16:37:24.7759415Z",
  //     "content": "Mr Knauf also previously worked for the Duke and Duchess of Sussex.\r\nIn October 2018, while working for the couple as their communications secretary, Mr Knauf made a bullying complaint against Meghan… [+1017 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "Body found in forest search for missing runner Jenny Hall",
  //     "description": "Police have been searching the area around Hamsterley Forest for Jenny Hall since Tuesday.",
  //     "url": "https://www.bbc.co.uk/news/articles/cy4vnp9r9ngo",
  //     "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/0f2c/live/60f697b0-1203-11ef-82e8-cd354766a224.png",
  //     "publishedAt": "2025-02-23T16:37:22.2453202Z",
  //     "content": "A body has been found in a forest search for a runner who went missing five days ago, police said.\r\nJenny Hall, 23, was last seen leaving her home at Barracks Farm, Tow Law, County Durham, on Tuesday… [+234 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "Teenage boy stabbed in chest in Nottingham Primark store",
  //     "description": "Detectives say the attack on the 17-year-old was an \"appalling act of violence\".",
  //     "url": "https://www.bbc.co.uk/news/articles/c4gdpl0dww0o",
  //     "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/d933/live/22061aa0-f1fd-11ef-9e61-71ee71f26eb1.jpg",
  //     "publishedAt": "2025-02-23T16:07:16.447756Z",
  //     "content": "A 17-year-old boy has been stabbed in the chest in a Primark store in Nottingham.\r\nNottinghamshire Police said the teenager was attacked inside the shop in Long Row at about 11:30 GMT on Sunday.\r\nOff… [+234 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "British couple in their 70s arrested by Taliban",
  //     "description": "Peter and Barbie Reynolds were returning to their home in Bamiyan on 1 February when they were detained",
  //     "url": "https://www.bbc.co.uk/news/articles/c0rznw4j2e4o",
  //     "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/f7b7/live/b48f98e0-f1e1-11ef-b8a0-1f5227bb2ea7.jpg",
  //     "publishedAt": "2025-02-23T13:37:14.6655197Z",
  //     "content": "The couple, who originally met at the University of Bath, married in Kabul in 1970. Since 2009 they have been running training projects in five schools in Kabul and one project in Bamiyan training mo… [+1815 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "bbc-news",
  //       "name": "BBC News"
  //     },
  //     "author": "BBC News",
  //     "title": "John Simpson: 2025 could be year for the history books",
  //     "description": "Like 1968 or 1989, this could be a year when the world changes in a fundamental way.",
  //     "url": "https://www.bbc.co.uk/news/articles/cd0ng4eyr3xo",
  //     "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/f433/live/c8c78fc0-f164-11ef-afbd-5d6789bb6e08.jpg",
  //     "publishedAt": "2025-02-23T13:07:24.5416413Z",
  //     "content": "President Trump never seems, at least in public, to show much interest in the fine detail of any agreement. It's the agreement itself that matters to him, even if Ukraine and its allies believe it's … [+1333 chars]"
  //   }
  // ]
static defaultProps = {
  country: 'us',
  category:"general",
  pageSize:20
};

 static propTypes={
  country: PropTypes.string,
  category:PropTypes.string,
  pageSize:PropTypes.number,
}
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1
    };

  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e3c80cb86e04287a9949cbda8d1ddae&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
    //  console.log(this.state.articles)
  }
  prevPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e3c80cb86e04287a9949cbda8d1ddae&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);

    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false
    })
  }
  nextPage = async () => {
    if (this.state.page + 1 > (Math.ceil(this.state.totalResults / this.props.pageSize))) {
      console.log("out of bound console")
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4e3c80cb86e04287a9949cbda8d1ddae&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({
        loading: true
      })
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false
      })
    }

  }

  render() {
    return (
      <div className='container mt-3'>
        <h1 className="text-center mt-6" style={{ marginTop: '5rem' }}>EchoNews! - Top  News of the Day!</h1>
        {this.state.loading && <div className="w-100 text-center mt-5"><div className="spinner-border  text-warning" style={{ width: '2rem', height: ' 2rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        </div>}
        <div className="row">
          {!this.state.loading && this.state.articles?.map((element) => {
            return <div className="col-md-4 mt-3 ml-5" key={element.url}>
              <NewsItem title={element.title} imgUrl={element.urlToImage} description={element.description} newUrl={element.url} conTime={element.publishedAt} author={element.author} />

            </div>
          })}
          <div className="d-flex justify-content-between mb-5 mt-3">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevPage}> &larr;Prev</button>
            <button disabled={this.state.page + 1 > (Math.ceil(this.state.totalResults / this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.nextPage}>Next&rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}
