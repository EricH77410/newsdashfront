import React, { Component } from 'react';

// Components
import Header from '../components/header';
import NewsList from './newsList';
import AnnonceList from './annoncesList';
import Movies from './moviesList';
import Footer from '../components/footer';

class App extends Component {

  render() {
    return (
      <div className="main">
        <Header/>
          <div className="container">
          
            <h1>News Dashboard</h1>
            <div className="row">
              <div className="col-6">
                <NewsList />
              </div>
              <div className="col-6">
                <AnnonceList />
              </div>    
            </div>
        
            
            <Movies />
          </div>
          
        <Footer />  
      </div>
    );
  }
}


export default App
