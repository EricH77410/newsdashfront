import React from 'react';
import  { connect } from 'react-redux';
import { fetchAfNews } from '../actions/index'

class NewsList extends React.Component {
    componentWillMount(){
        this.props.getNews();
    }

    renderNews = () => {
        const list = this.props.news.map( (news, index) => {
            console.log(index,news.title);
        })
        return list
    }
    render() {
        return (
            <div className="news-list">
                <h3>NewsList Here</h3>
                { this.props.news ? this.renderNews() : '' }
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