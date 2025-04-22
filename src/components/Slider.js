import React, { Component } from 'react'
// import myImage from './../assets/board.png';
// import myImag2 from './../assets/image1.png';

export default class Slider extends Component {
    // articles = [
    //     {
    //         "source": {
    //             "id": "bbc-news",
    //             "name": "BBC News"
    //         },
    //         "author": "BBC News",
    //         "title": "Pope's condition 'remains critical', Vatican says",
    //         "description": "The pontiff \"continues to be alert and well oriented\" and has not had any further respiratory crises, the Vatican said.",
    //         "url": "https://www.bbc.co.uk/news/articles/cr526605r3ro",
    //         "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/43e7/live/93f2ad70-f213-11ef-861d-c9c8c10a1f63.jpg",
    //         "publishedAt": "2025-02-23T19:07:17.8765578Z",
    //         "content": "The new statement comes after the Vatican said on Saturday that the Pope had experienced a respiratory crisis and was in a \"critical\" condition.\r\nEarlier on Sunday, the Pope issued a statement asking… [+808 chars]"
    //     }
    // ];
    // constructor() {
    //     super();
    //     this.state = {
    //         articles: this.articles,
    //         loading: false
    //     }
    // }
    // async componentDidMount() {
    //     let url = "https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=4e3c80cb86e04287a9949cbda8d1ddae"
    //     let data = await fetch(url);
    //     let parsedata = await data.json()
    //     this.setState({ articles: parsedata.articles })
    //     console.log(this.state.articles)


    // }

    render() {
        return (
            <div>

                <div id="carouselExampleFade" className=" container carousel slide carousel-fade  ">
                    <div className="carousel-inner">
                        {this.state.articles.map((element) => {
                            return <><div className="carousel-item " key={element.url}>
                                <img src='https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/43e7/live/93f2ad70-f213-11ef-861d-c9c8c10a1f63.jpg' className="d-block w-100" alt="..." />
                            </div>
                            </>
                        })}

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


            </div>
        )
    }
}
