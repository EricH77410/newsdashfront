import React from 'react';

const Film = (props) => {
    return (
        <div className="film">
            <div className="card" >
                <img className="card-img-top" src={props.data.img} alt="Img" />
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <a href={props.data.full} target="_blank" className="btn btn-primary">Voir l'annonce</a>
                </div>
            </div>
        </div>
    )
}

export default Film;