import React from 'react';
import './App.css';
import Header from '../components/header/header.component';
import HomePage from '../pages/home/home.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPage from '../pages/about/about-page.component';
import Footer from '../components/footer/footer.component';

class App extends React.Component {
    render() {
      return (
        <div className='container'>
          <div className='header'>
            <Header date={new Date()}/>
          </div>
          <div>
            <BrowserRouter>
              <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/about' component={AboutPage} />
              </Switch>
            </BrowserRouter>
          </div>
          <div className='footer'>
            <Footer />
          </div>
        </div>
      );
  }
}
export default App;
