import React from 'react';
import { connect } from 'react-redux';
import { fetchAfAnnonces } from '../actions/index'

import Annonce from '../components/annonce'

class AnnonceList extends React.Component {

    componentWillMount(){
        this.props.getAnnonces();
    }

    renderAnnonces = () => {
        const list = this.props.annonces.map( (annonce, index) => {
            return <Annonce data={annonce} key={index}/>
        })
        return list
    }

    render() {
        return (
            <div>
                <h3 className="main-title">Annonces Audiofanzine</h3> 
                <div className="annonces-list">
                    {this.props.annonces ? this.renderAnnonces():''}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {annonces: state.af.annonces}
}
const mapDispatchToProps = (dispatch) => {
    return { getAnnonces: ()=>dispatch(fetchAfAnnonces()) }
}
export default connect(mapStateToProps, mapDispatchToProps)(AnnonceList);