import React, { Component } from 'react';

// Components
import Header from '../components/header';
import NewsList from './newsList';
import AnnonceList from './annoncesList';
import Footer from '../components/footer';

class App extends Component {

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


export default App
