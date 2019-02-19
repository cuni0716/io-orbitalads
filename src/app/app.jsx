import React, { Component } from 'react';
import './app.css';
import Header from './components/header';
import Footer from './components/footer';
import HomeContainer from './templates/home-container';

export default class App extends Component {
  render() {
    return [
      <Header key="header" />,
      <HomeContainer />,
      <Footer key="footer" />,
    ];
  }
}
