import React from 'react';

const Annonce = (props) => {
    console.log(props.data)
    return (
        <div className="annonce">
            <div className="card" >
                <img className="card-img-top" src={props.data.img} alt="Img" />
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.content}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Annonce;