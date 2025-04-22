import React, { Component } from 'react'



export default class NewsItem extends Component {
  constructor() {
    super();
    // console.log("hello i am cunstructor of NewsItems")
  }
  render() {
    let { title, description, imgUrl, newUrl, conTime, author } = this.props;
    let d = new Date(conTime);

    return (
      <div>

        <div className="card" >
          <img src={!imgUrl ? 'https://media.istockphoto.com/id/1322460095/video/breaking-news-template-intro-for-tv-broadcast-news-show-program-with-3d-breaking-news-text.jpg?s=640x640&k=20&c=2JOrDbeCGWefRV1-5BBfDLGLOORWCPuBExA-ACeb-Zg=' : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">{d.toLocaleString()}</small></p>
            <a href={newUrl} className="btn btn-sm btn-warning"><strong>Read More</strong></a>

          </div>
          <div className="w-100 text-end">
            <span className="position-absolute  d-flex justify-content-end top-0  badge rounded-pill bg-danger">
              {author}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

