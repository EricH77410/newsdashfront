import React from 'react';

const GenricNews = ({data}) => {
    return (
        <div className="generic-news">
            <img src={data.img} alt=""/>
            <h3>{data.title}</h3>
            <p>{data.content}</p>
            <a href={data.full}>Voir la news</a>
        </div>
    )
}

export default GenricNews;