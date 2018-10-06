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
            <div className="annonces-list">
                <h3>Annonces Audiofanzine</h3>                
                {this.props.annonces ? this.renderAnnonces():''}
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