import React from 'react';

const Annonce = (props) => {
    return (
        <div className="annonce">
            <div className="card" >
                <img className="card-img-top" src={props.data.img} alt="Img" />
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}<span className="card-price">{props.data.price}</span></h5>
                    <p className="card-text">{props.data.content}</p>                    
                    <a href={props.data.full} target="_blank" >Voir l'annonce</a>
                </div>
            </div>
        </div>
    )
}

export default Annonce;