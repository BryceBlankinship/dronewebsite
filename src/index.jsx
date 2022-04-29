import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Hero from './Hero';


class App extends Component {
  render(){
    return(
      <>
        <Hero/>
      </>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
