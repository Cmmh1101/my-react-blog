import React, { Component } from "react";
import HomePage from "./Pages/HomePage";
import "./App.css";
import "./components/navbar.css";
import "./components/hero.css";
import "./components/header.css";
import "./components/articlesList.css";
import "./Pages/articlePage.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ArticlePage from "./Pages/ArticlePage";
import Navigation from "./components/NavBar";
import ArticlesListPage from "./Pages/ArticlesListPage";
import NotFoundPage from "./Pages/404page";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} exact />
            <Route path="/article/:name" component={ArticlePage} exact />
            <Route path="/articles-list" component={ArticlesListPage} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
