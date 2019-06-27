import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Products from './components/routing/products';
// import Counter from './components/counter-app/counter';
// import HomeVid from './components/vivdy/HomeVid';
import Navbar from './components/routing/navbar';
import Home from './components/routing/home';
import Dashboard from './components/routing/admin/dashboard';
import Posts from './components/routing/posts';
import ProductDetails from './components/routing/productDetails';
import NotFound from './components/routing/notFound';

class App extends Component {
  handleNav(conditon) {
    console.log('nav');
  }
  render() {
    return (
      // <Counter />
      // <HomeVid />
      <div>
      <Navbar onHandle={this.handleNav} />
      <div className="content">
        <Switch>
          <Route path="/products/:id" component={ProductDetails}/>
          <Route path="/products" render={(props) => <Products sortBy="newest" {...props}/>} />
          <Route path="/posts/:year?/:month?" component={Posts} />
          <Redirect from="/messages" to="/posts" />
          <Route path="/admin" render={() => <Dashboard onHandle={this.handleNav} />} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      
      </div>
      </div>
    );
  }
  

}

export default App;
