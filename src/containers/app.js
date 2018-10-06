import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchAf, fetchDl} from '../actions'

// Components
import Header from '../components/header';
import NewsList from './newsList';
import AnnonceList from './annoncesList';
import Footer from '../components/footer';

class App extends Component {

  componentWillMount(){
    this.props.getAf()
  }

  renderAnnonces = () => {
    if (this.props.af.length > 0) {
      console.log('render...',this.props.af)
    }    
  }

  renderNews = () => {

  }

  renderDl = () => {
    
  }

  render() {
    return (
      <div className="main">
        <Header/>
          <div className="container">
            <h1>News Dashboard</h1>
            <NewsList />
            <AnnonceList />
          </div>
          
        <Footer />  
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { af: state.af, dl: state.dl }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAf: ()=>dispatch(fetchAf()),
    getDl: ()=>dispatch(fetchDl())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
