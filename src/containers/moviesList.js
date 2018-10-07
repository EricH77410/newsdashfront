import React from 'react';
import  { connect } from 'react-redux';
import { fetchDlExclu, fetchDlNews } from '../actions/index'

import Movie from '../components/film';

class MoviesList extends React.Component {
    componentWillMount(){
        this.props.getNews();
    }

    renderNews = () => {
        const list = this.props.news.map( (news, index) => {
            return <Movie data={news} key={index}/>
        })
        return list
    }

    renderExclu = () => {
        const list = this.props.exclu.map( (news, index) => {
            console.log(index,news.title);
        })
        return list
    }

    render() {
        return (
            <div>
                <h3 className="main-title">Films</h3>
                <div className="films-list">                    
                    { this.props.news ? this.renderNews() : '' }
                </div>
            </div>
            
        )
    }

}

const mapStateToProps = (state) => {
    return {
        news: state.dl.dlnews,
        exclu: state.dl.dlexclu
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        getNews: ()=>dispatch(fetchDlNews()),
        getExclu: () => dispatch(fetchDlExclu())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);