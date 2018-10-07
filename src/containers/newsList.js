import React from 'react';
import  { connect } from 'react-redux';
import { fetchAfNews } from '../actions/index'

import News from '../components/genericNews'

class NewsList extends React.Component {
    componentWillMount(){
        this.props.getNews();
    }

    renderNews = () => {
        const list = this.props.news.map( (news, index) => {
            return <News data={news} key={index}/>
        })
        return list
    }
    render() {
        return (
            <div>
                <h3 className="main-title">NewsList Here</h3>
                <div className="news-list">               
                    { this.props.news ? this.renderNews() : '' }
                </div>
            </div>
            
        )
    }

}

const mapStateToProps = (state) => {
    return {
        news: state.af.news
    }
}

const mapDispatchToProps = (dispatch) => {
    return { getNews: ()=>dispatch(fetchAfNews()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);