import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar"; //react top loading bar search

// import News setProgress = {this.setProgress}Item from "./components/News setProgress = {this.setProgress}Item"; //yeh component news ke andar hoga

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  pagesize = 6;
  state = {
    progress: 0,
  };

 
  //aap aise nahi likh sakte apko ek arrow function ki jarurat hogi jisse app this.setState ko acess kar skte hai
  // setProgress(progress) {
  //   this.setState({ progress: progress })
  // }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          {/* pagesize ka meaning ek page mein kitne articles dikhenge */}
          <Routes>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="home"
                  pagesize={this.pagesize}
                  country={"in"}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="newsNet"
                  pagesize={this.pagesize}
                  country={"in"}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="general"
                  pagesize={this.pagesize}
                  country={"in"}
                  category={"general"}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="sports"
                  pagesize={this.pagesize}
                  country={"in"}
                  category={"sports"}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="business"
                  pagesize={this.pagesize}
                  country={"in"}
                  category={"business"}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="entertainment"
                  pagesize={this.pagesize}
                  country={"in"}
                  category={"entertainment"}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="science"
                  pagesize={this.pagesize}
                  country={"in"}
                  category={"science"}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="health"
                  pagesize={this.pagesize}
                  country={"in"}
                  category={"health"}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress} apiKey = {this.apiKey}
                  key="technology"
                  pagesize={this.pagesize}
                  country={"in"}
                  category={"technology"}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
