import React from 'react';

const Annonce = (props) => {
    return (
        <div className="annonce">
            <div className="card" >
                <img className="card-img-top" src="https://img.audiofanzine.com/images/u/product/thumb1/digital-systemic-emulations-k3-v-extended-273325.png" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Annonce;