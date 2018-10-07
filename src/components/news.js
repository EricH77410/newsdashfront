import React from 'react';

const News = (props) => {
    return (
        <div className="news">
            <div className="card">
                <img className="card-img-top" src={props.data.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.content}</p>
                    <a href={props.data.full} target="_blank" className="btn btn-primary">Lire</a>
                </div>
            </div>
        </div>
    )
}

export default News;